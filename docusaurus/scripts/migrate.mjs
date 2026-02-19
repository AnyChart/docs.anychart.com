#!/usr/bin/env node
/**
 * Phase 2 Migration Script
 * Migrates all source .md files from the repo root into docusaurus/docs/
 *
 * Features:
 * - Extracts {:index N} / {:index N :title "..."} → YAML frontmatter
 * - Converts file/directory names to kebab-case
 * - Converts group.cfg → _category_.json
 * - Creates _category_.json for directories without group.cfg
 * - Updates internal markdown links to kebab-case paths
 * - Converts anchor underscores to hyphens (Docusaurus convention)
 * - Generates a detailed migration report
 *
 * Usage: node scripts/migrate.mjs [--dry-run]
 */

import {readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync, rmSync} from 'fs';
import {join, dirname, basename, extname, relative} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectDir = dirname(__dirname);        // docusaurus/
const repoRoot = dirname(projectDir);         // docs.anychart.com/
const targetDocsDir = join(projectDir, 'docs');

const DRY_RUN = process.argv.includes('--dry-run');

// ─── Configuration ──────────────────────────────────────────────

/** Directories to skip at the repo root */
const SKIP_ROOT_DIRS = new Set([
  'docusaurus', 'node_modules', '.git', 'prompts', 'samples',
  'static', '.github', '.idea', '.vscode', '.claude',
]);

/** Files to skip at repo root */
const SKIP_ROOT_FILES = new Set(['README.md', 'CLAUDE.md']);

/**
 * Known broken links in source content → corrected targets (kebab-case).
 * These fix genuine bugs in the original documentation.
 */
/**
 * File-specific content patches for genuine source content bugs.
 * Keys are target file paths (relative to docs/).
 * Values are arrays of [oldString, newString] pairs.
 */
const CONTENT_PATCHES = {
  'basic-charts/custom-drawing.md': [
    ['(#drawer)', '(#rendering-object)'],
    ['(#basic-drawer)', '(#point-renderer)'],
  ],
};

const LINK_FIXES = {
  'common-settings/background': 'appearance-settings/background',
  'dot-point': 'dot-point-map',
  'graph-chart': 'network-graph',
  'basic-charts/graph-chart': 'basic-charts/network-graph',
  // interactivity is a directory; the heading lives in its overview doc
  'common-settings/interactivity': 'common-settings/interactivity/overview',
};

/** Special label overrides for directory names */
const LABEL_OVERRIDES = {
  '3D_Plot': '3D Plot',
  '3D': '3D',
  'PERT_Chart': 'PERT Chart',
  'OHLC_Chart': 'OHLC Chart',
  'HiLo_Chart': 'HiLo Chart',
  'ASYNC_Rendering': 'ASYNC Rendering',
  'UI_Controls': 'UI Controls',
};

// ─── Stats ──────────────────────────────────────────────────────

const stats = {
  files: 0,
  categories: 0,
  dirs: 0,
  linksUpdated: 0,
  indexExtracted: 0,
  titleExtracted: 0,
  warnings: [],
  errors: [],
  fileMap: [], // source → target mapping for the report
};

/**
 * Set of kebab-case directory names that have a "category index convention doc"
 * (a .md file matching the directory name). Links to these from within the same
 * directory need to go up one level (prefix ../) to reach the category page.
 */
const sameNameDocDirs = new Set();

// ─── Helpers ────────────────────────────────────────────────────

/**
 * Convert PascalCase_With_Underscores to kebab-case.
 * Handles special chars: %, +, (), etc.
 *   "Line_Chart" → "line-chart"
 *   "3D_Plot" → "3d-plot"
 *   "Bollinger_Bands_%B" → "bollinger-bands-b"
 *   "Volume_+_Moving_Average" → "volume-moving-average"
 *   "Quick_Start_(Project)" → "quick-start-project"
 *   "Server-Side_Rendering" → "server-side-rendering" (preserves existing hyphens)
 */
function toKebabCase(str) {
  return str
    .replace(/[()%]/g, '')           // Remove parens, percent
    .replace(/\+/g, '')              // Remove plus
    .replace(/_/g, '-')              // Underscores to hyphens
    .replace(/--+/g, '-')           // Collapse multiple hyphens
    .replace(/^-|-$/g, '')          // Trim leading/trailing hyphens
    .toLowerCase();
}

/**
 * Convert directory name to a human-readable sidebar label.
 *   "Basic_Charts" → "Basic Charts"
 *   "3D_Plot" → "3D Plot"
 */
function dirToLabel(dirName) {
  if (LABEL_OVERRIDES[dirName]) return LABEL_OVERRIDES[dirName];
  return dirName
    .replace(/_/g, ' ')
    .replace(/\(([^)]+)\)/g, '($1)');  // Keep parenthesized parts
}

/**
 * Parse {:index N} or {:index N :title "text"} from the first line.
 * Returns { meta: {sidebar_position?, title?}, hasIndex: boolean }
 */
function parseIndexLine(line) {
  const meta = {};
  if (!line || !line.trim().startsWith('{:index')) {
    return {meta, hasIndex: false};
  }

  const indexMatch = line.match(/\{:index\s+([\d.]+)/);
  if (indexMatch) {
    meta.sidebar_position = parseFloat(indexMatch[1]);
  }

  // Note: {:index N :title "..."} titles are HTML page titles (e.g. "Quick Start | AnyChart")
  // We skip them — Docusaurus derives the title from the first # heading instead.
  const titleMatch = line.match(/:title\s+"([^"]+)"/);
  if (titleMatch) {
    stats.titleExtracted++;
  }

  return {meta, hasIndex: true};
}

/**
 * Generate YAML frontmatter from a metadata object.
 */
function generateFrontmatter(meta) {
  const entries = Object.entries(meta);
  if (entries.length === 0) return '';

  const lines = ['---'];
  for (const [key, value] of entries) {
    if (typeof value === 'string') {
      lines.push(`${key}: "${value.replace(/"/g, '\\"')}"`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  lines.push('---');
  return lines.join('\n') + '\n';
}

/**
 * Convert an anchor fragment to match Docusaurus heading ID generation.
 * Docusaurus uses github-slugger which strips special chars like (), +, /, &, =, %
 * but does NOT collapse resulting double hyphens.
 *
 *   "Tasks_(Actual)" → "tasks-actual"
 *   "format()" → "format"
 *   "Position_+_Alignment" → "position--alignment"  (double dash preserved!)
 *   "Expanding_/_Collapsing" → "expanding--collapsing"
 *   "Minimum_&_Maximum" → "minimum--maximum"
 *   "Bollinger_Bands_%25B" → "bollinger-bands-b"
 */
function convertAnchor(raw) {
  let anchor = raw;
  // URL-decode %25 → % (and other encoded chars)
  try { anchor = decodeURIComponent(anchor); } catch { /* ignore */ }
  return anchor
    .replace(/_/g, '-')              // underscores to hyphens
    .replace(/[()%+/&=\\]/g, '')     // strip special chars Docusaurus strips
    // NOTE: Do NOT collapse -- because Docusaurus/github-slugger preserves them
    .replace(/^-|-$/g, '')           // trim leading/trailing hyphens
    .toLowerCase();
}

/**
 * Safely URL-decode a path segment (handles %25 etc.)
 */
function safeDecodeSegment(seg) {
  try { return decodeURIComponent(seg); } catch { return seg; }
}

/**
 * Update internal markdown links to use kebab-case paths.
 *
 * Transforms:
 *   [Quick Start](../Quick_Start/Quick_Start) → [Quick Start](../quick-start/quick-start)
 *   [text](General_Settings) → [text](general-settings)
 *   [text](#supported_charts) → [text](#supported-charts)
 *   [text](../../Quick_Start/Modules#basic_3d) → [text](../../quick-start/modules#basic-3d)
 *   [text](#format()) → [text](#format)
 *   [text](#Tasks_(Actual)) → [text](#tasks-actual)
 *
 * Skips external URLs (http://, https://, //, mailto:).
 *
 * @param {string} content - Markdown content
 * @param {string} currentKebabDir - The kebab-case name of the current file's parent dir
 */
function updateInternalLinks(content, currentKebabDir) {
  let updatedCount = 0;

  const result = content.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (match, text, href) => {
      // Skip external URLs
      if (/^(https?:\/\/|\/\/|mailto:)/.test(href)) {
        return match;
      }

      // Local anchor only: #something
      if (href.startsWith('#')) {
        const newAnchor = '#' + convertAnchor(href.slice(1));
        if (newAnchor !== href) updatedCount++;
        return `[${text}](${newAnchor})`;
      }

      // Split path and anchor
      const hashIdx = href.indexOf('#');
      let pathPart, anchorPart;
      if (hashIdx >= 0) {
        pathPart = href.slice(0, hashIdx);
        anchorPart = '#' + convertAnchor(href.slice(hashIdx + 1));
      } else {
        pathPart = href;
        anchorPart = '';
      }

      // Convert each path segment to kebab-case
      const segments = pathPart.split('/');
      const converted = segments.map(seg => {
        if (seg === '..' || seg === '.' || seg === '') return seg;
        // Remove .md extension before converting
        let clean = seg.replace(/\.md$/i, '');
        // Strip backslash escapes (e.g. \(ADL\) → (ADL))
        clean = clean.replace(/\\/g, '');
        // URL-decode (%25B → %B, etc.) before kebab conversion
        clean = safeDecodeSegment(clean);
        return toKebabCase(clean);
      });

      // Apply known link fixes for source content bugs
      const nonRelSegs = converted.filter(s => s !== '' && s !== '.' && s !== '..');
      const linkKey = nonRelSegs.join('/');
      if (LINK_FIXES[linkKey]) {
        const fixedSegs = LINK_FIXES[linkKey].split('/');
        // Replace only the non-relative segments
        const relPrefix = converted.filter(s => s === '..' || s === '.' || s === '');
        converted.length = 0;
        converted.push(...relPrefix, ...fixedSegs);
      }

      // Fix sibling links to category index convention docs.
      // When inside pert-chart/, a link to "pert-chart" resolves to /pert-chart/pert-chart.
      // But the doc is the category page at /pert-chart. Prefix with ../ so it resolves correctly.
      const nonEmptySegs = converted.filter(s => s !== '' && s !== '.' && s !== '..');
      if (nonEmptySegs.length === 1
          && sameNameDocDirs.has(nonEmptySegs[0])
          && nonEmptySegs[0] === currentKebabDir
          && !converted.includes('..')) {
        converted.unshift('..');
      }

      // Collapse trailing duplicate segment: ../quick-start/quick-start → ../quick-start
      // This handles "category index convention docs" where Docusaurus makes
      // dir/dir.md the category page at /dir (not /dir/dir).
      let pathResult = converted.join('/');
      pathResult = pathResult.replace(/([^/]+)\/\1$/, '$1');

      const newHref = pathResult + anchorPart;
      if (newHref !== href) updatedCount++;
      return `[${text}](${newHref})`;
    }
  );

  stats.linksUpdated += updatedCount;
  return result;
}

// ─── File Processing ────────────────────────────────────────────

/**
 * Process a single markdown file: extract {:index}, add frontmatter,
 * update links, write to target.
 */
function processMarkdownFile(sourcePath, targetPath) {
  try {
    let content = readFileSync(sourcePath, 'utf-8');
    const lines = content.split('\n');

    // Extract {:index} from first line
    const {meta, hasIndex} = parseIndexLine(lines[0]);
    if (hasIndex) {
      lines.shift();
      stats.indexExtracted++;
      // titleExtracted counter is handled inside parseIndexLine

      // Remove leading blank line after {:index} if present
      if (lines.length > 0 && lines[0].trim() === '') {
        // Keep it — some files expect the blank line before the heading
      }
    }

    // Reassemble content
    content = lines.join('\n');

    // Fix missing space after heading markers: ##Heading → ## Heading
    // CommonMark requires a space after # for valid headings.
    content = content.replace(/^(#{1,6})([^\s#])/gm, '$1 $2');

    // Update internal links to kebab-case
    // Pass the kebab-case name of the target directory for sibling-link detection
    const currentKebabDir = basename(dirname(targetPath));
    content = updateInternalLinks(content, currentKebabDir);

    // Apply file-specific content patches for known source bugs
    const relTarget = relative(targetDocsDir, targetPath).replace(/\\/g, '/');
    if (CONTENT_PATCHES[relTarget]) {
      for (const [oldStr, newStr] of CONTENT_PATCHES[relTarget]) {
        content = content.replace(oldStr, newStr);
      }
    }

    // Generate frontmatter + content
    const frontmatter = generateFrontmatter(meta);
    const finalContent = frontmatter + content;

    if (!DRY_RUN) {
      mkdirSync(dirname(targetPath), {recursive: true});
      writeFileSync(targetPath, finalContent, 'utf-8');
    }

    stats.files++;
    stats.fileMap.push({
      source: relative(repoRoot, sourcePath),
      target: relative(projectDir, targetPath),
    });

  } catch (err) {
    stats.errors.push(`Error processing ${relative(repoRoot, sourcePath)}: ${err.message}`);
  }
}

/**
 * Build the category link config.
 *
 * If the directory contains a .md file with the same name as the directory
 * (e.g. quick-start/quick-start.md), Docusaurus treats it as a "category index
 * convention doc". In that case we use link.type = 'doc' to make that doc the
 * category page. Otherwise we use 'generated-index' with an explicit slug so
 * the index page lives at /dir-name instead of /category/dir-name.
 */
function buildCategoryLink(slug, indexDocId) {
  if (indexDocId) {
    return {type: 'doc', id: indexDocId};
  }
  return {type: 'generated-index', slug};
}

/**
 * Convert a group.cfg file to _category_.json.
 */
function processGroupCfg(sourcePath, targetDir, originalDirName, slug, indexDocId) {
  try {
    const content = readFileSync(sourcePath, 'utf-8').trim();
    const {meta} = parseIndexLine(content);

    const category = {
      label: dirToLabel(originalDirName),
      position: meta.sidebar_position !== undefined ? meta.sidebar_position : 999,
      link: buildCategoryLink(slug, indexDocId),
    };

    if (!DRY_RUN) {
      mkdirSync(targetDir, {recursive: true});
      writeFileSync(
        join(targetDir, '_category_.json'),
        JSON.stringify(category, null, 2) + '\n',
        'utf-8'
      );
    }
    stats.categories++;

  } catch (err) {
    stats.errors.push(`Error converting group.cfg at ${relative(repoRoot, sourcePath)}: ${err.message}`);
  }
}

/**
 * Create a _category_.json for a directory that has no group.cfg.
 * Uses a high position number (alphabetical fallback).
 */
function createDefaultCategory(targetDir, originalDirName, slug, indexDocId) {
  const category = {
    label: dirToLabel(originalDirName),
    link: buildCategoryLink(slug, indexDocId),
  };

  if (!DRY_RUN) {
    mkdirSync(targetDir, {recursive: true});
    writeFileSync(
      join(targetDir, '_category_.json'),
      JSON.stringify(category, null, 2) + '\n',
      'utf-8'
    );
  }
  stats.categories++;
}

/**
 * Recursively process a source directory.
 */
function processDirectory(sourceDir, targetDir, originalDirName) {
  let entries;
  try {
    entries = readdirSync(sourceDir);
  } catch (err) {
    stats.errors.push(`Cannot read directory ${relative(repoRoot, sourceDir)}: ${err.message}`);
    return;
  }

  // Compute slug from the target path relative to docs root
  // e.g. "basic-charts" → "/basic-charts", "basic-charts/error-chart" → "/basic-charts/error-chart"
  const relPath = relative(targetDocsDir, targetDir).replace(/\\/g, '/');
  const slug = '/' + relPath;

  // Check if there's a .md file whose kebab name matches the directory name.
  // Docusaurus treats such files as "category index convention docs" and absorbs them
  // into the category page, so we use link.type='doc' for those.
  const kebabDirName = toKebabCase(originalDirName);
  const mdEntries = entries.filter(e => e.endsWith('.md'));
  const matchingDoc = mdEntries.find(e => {
    const nameWithoutExt = basename(e, '.md');
    return toKebabCase(nameWithoutExt) === kebabDirName;
  });
  const indexDocId = matchingDoc
    ? relPath + '/' + toKebabCase(basename(matchingDoc, '.md'))
    : null;

  if (indexDocId) {
    sameNameDocDirs.add(kebabDirName);
  }

  const hasGroupCfg = entries.includes('group.cfg');

  // Convert group.cfg → _category_.json
  if (hasGroupCfg) {
    processGroupCfg(join(sourceDir, 'group.cfg'), targetDir, originalDirName, slug, indexDocId);
  } else {
    // Create a default category for directories without group.cfg
    createDefaultCategory(targetDir, originalDirName, slug, indexDocId);
  }

  for (const entry of entries) {
    if (entry === 'group.cfg') continue;
    if (entry.startsWith('.')) continue;

    const sourcePath = join(sourceDir, entry);
    let entryStat;
    try {
      entryStat = statSync(sourcePath);
    } catch {
      continue;
    }

    if (entryStat.isDirectory()) {
      const kebabName = toKebabCase(entry);
      const childTargetDir = join(targetDir, kebabName);
      processDirectory(sourcePath, childTargetDir, entry);
      stats.dirs++;

    } else if (entry.endsWith('.md')) {
      const nameWithoutExt = basename(entry, '.md');
      const kebabFilename = toKebabCase(nameWithoutExt) + '.md';
      const targetPath = join(targetDir, kebabFilename);
      processMarkdownFile(sourcePath, targetPath);
    }
    // Skip other files (non-.md, non-group.cfg)
  }
}

// ─── Index Page ─────────────────────────────────────────────────

function createIndexPage() {
  const content = `---
slug: /
sidebar_position: 0
title: AnyChart Documentation
---

# AnyChart Documentation

Welcome to AnyChart Documentation. Learn how to create interactive JavaScript charts for your web applications.

## Getting Started

- [Quick Start](quick-start) - Create your first chart in minutes
- [Supported Chart Types](quick-start/supported-charts-types) - Browse all available chart types
- [Modules](quick-start/modules) - Learn about AnyChart's modular architecture

## Chart Types

- [Basic Charts](basic-charts/overview) - Line, Bar, Column, Pie, and more
- [Stock Charts](stock-charts/overview) - Financial and timeline charts
- [Maps](maps/quick-start) - Geographic data visualization
- [Gantt Charts](gantt-chart/overview) - Project management charts
- [PERT Charts](pert-chart) - Network diagrams
- [Gauges](gauges/quick-start) - Circular and linear gauges

## Customization

- [Appearance Settings](appearance-settings) - Colors, fonts, and themes
- [Axes and Grids](axes-and-grids/axis-basics) - Axis configuration
- [Common Settings](common-settings/overview) - Shared chart configuration

## Data

- [Working with Data](working-with-data/overview) - Data formats and adapters
- [Dashboards](dashboards/table-layout) - Multi-chart layouts
`;

  if (!DRY_RUN) {
    writeFileSync(join(targetDocsDir, 'index.md'), content, 'utf-8');
  }
}

// ─── Main ───────────────────────────────────────────────────────

console.log('╔══════════════════════════════════════════════╗');
console.log('║     Phase 2 Migration Script                ║');
console.log('╚══════════════════════════════════════════════╝');
console.log('');
if (DRY_RUN) console.log('  *** DRY RUN — no files will be written ***\n');
console.log(`  Source: ${repoRoot}`);
console.log(`  Target: ${targetDocsDir}`);
console.log('');

// Clean existing docs directory
if (!DRY_RUN) {
  if (existsSync(targetDocsDir)) {
    console.log('  Cleaning existing docs/ directory...');
    rmSync(targetDocsDir, {recursive: true});
  }
  mkdirSync(targetDocsDir, {recursive: true});
}

// Find content directories at repo root
const rootEntries = readdirSync(repoRoot);
const sourceDirs = rootEntries.filter(entry => {
  if (SKIP_ROOT_DIRS.has(entry)) return false;
  if (entry.startsWith('.')) return false;
  try {
    return statSync(join(repoRoot, entry)).isDirectory();
  } catch {
    return false;
  }
}).sort();

console.log(`  Found ${sourceDirs.length} content directories:\n`);
for (const d of sourceDirs) {
  console.log(`    ${d}/ → ${toKebabCase(d)}/`);
}
console.log('');

// Process each directory
for (const dir of sourceDirs) {
  const sourceDir = join(repoRoot, dir);
  const kebabName = toKebabCase(dir);
  const targetDir = join(targetDocsDir, kebabName);

  console.log(`  Processing ${dir}/ ...`);
  processDirectory(sourceDir, targetDir, dir);
}

// Create index page
createIndexPage();
console.log('  Created index.md');

// ─── Report ─────────────────────────────────────────────────────

console.log('\n╔══════════════════════════════════════════════╗');
console.log('║     Migration Report                        ║');
console.log('╚══════════════════════════════════════════════╝\n');
console.log(`  Markdown files migrated:  ${stats.files}`);
console.log(`  Category files created:   ${stats.categories}`);
console.log(`  Directories processed:    ${stats.dirs}`);
console.log(`  {:index} extracted:       ${stats.indexExtracted}`);
console.log(`  {:title} extracted:       ${stats.titleExtracted}`);
console.log(`  Internal links updated:   ${stats.linksUpdated}`);

if (stats.warnings.length > 0) {
  console.log(`\n  Warnings (${stats.warnings.length}):`);
  for (const w of stats.warnings) {
    console.log(`    ! ${w}`);
  }
}

if (stats.errors.length > 0) {
  console.log(`\n  Errors (${stats.errors.length}):`);
  for (const e of stats.errors) {
    console.log(`    X ${e}`);
  }
}

// Write detailed file map to a report file
if (!DRY_RUN) {
  const reportLines = [
    '# Migration Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## File Mapping',
    '',
    '| Source | Target |',
    '|--------|--------|',
    ...stats.fileMap.map(({source, target}) => `| ${source} | ${target} |`),
    '',
    '## Statistics',
    '',
    `- Files: ${stats.files}`,
    `- Categories: ${stats.categories}`,
    `- Directories: ${stats.dirs}`,
    `- Index directives extracted: ${stats.indexExtracted}`,
    `- Title directives extracted: ${stats.titleExtracted}`,
    `- Links updated: ${stats.linksUpdated}`,
    '',
  ];

  if (stats.errors.length > 0) {
    reportLines.push('## Errors', '', ...stats.errors.map(e => `- ${e}`), '');
  }
  if (stats.warnings.length > 0) {
    reportLines.push('## Warnings', '', ...stats.warnings.map(w => `- ${w}`), '');
  }

  writeFileSync(
    join(projectDir, 'migration-report.md'),
    reportLines.join('\n'),
    'utf-8'
  );
  console.log('\n  Full report written to: docusaurus/migration-report.md');
}

console.log('\n  Done!\n');
