#!/usr/bin/env node
/**
 * Convert all internal markdown links from kebab-case to original-case paths.
 *
 * After adding slug: frontmatter with original PascalCase_Underscore URLs,
 * Docusaurus resolves relative links against the slug-based URL. So links
 * like `./surface-chart` resolve as `/3D_Plot/surface-chart` instead of
 * `/3D_Plot/Surface_Chart`. This script fixes all internal links to match
 * the original-case URL structure.
 *
 * Usage: node scripts/fix-internal-links.mjs
 */

import {readFileSync, writeFileSync, readdirSync, statSync} from 'fs';
import {join, dirname, basename, relative} from 'path';
import {fileURLToPath} from 'url';
import {execSync} from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectDir = dirname(__dirname);
const docsDir = join(projectDir, 'docs');

const SOURCE_COMMIT = '03afadaf60b69dd2f6281a5e5c344a2ea0b5bfa0';

// ─── Helpers ────────────────────────────────────────────────────

function toKebabCase(str) {
  return str
    .replace(/[()%]/g, '')
    .replace(/\+/g, '')
    .replace(/_/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

/**
 * Convert an original filename/dirname to its URL-safe form for use in links.
 * Most names pass through as-is. Special chars like % and + get URL-encoded.
 */
function toUrlSafe(originalName) {
  return originalName
    .replace(/%/g, '%25')
    .replace(/\+/g, '%2B');
}

// ─── Build kebab → original mapping ─────────────────────────────

console.log('Building kebab → original-case mapping...');

const rawPaths = execSync(
  `git ls-tree -r --name-only ${SOURCE_COMMIT}`,
  {cwd: projectDir, encoding: 'utf-8'}
);

const originalPaths = rawPaths
  .trim()
  .split('\n')
  .filter(p => p.endsWith('.md'))
  .filter(p => !p.startsWith('docusaurus/'))
  .filter(p => p !== 'README.md');

// Segment-level mapping: kebab-segment → original-segment (URL-safe)
// We collect from both directory names and file names (without .md)
const segmentMap = new Map();

// Full-path mapping: kebab-path (no .md) → original-path (URL-safe, no .md)
const fullPathMap = new Map();

// Collect all unique directory names
const dirNames = new Set();
for (const p of originalPaths) {
  const parts = p.replace(/\.md$/, '').split('/');
  // Each segment (both dirs and filename)
  for (const part of parts) {
    const kebab = toKebabCase(part);
    const urlSafe = toUrlSafe(part);
    if (!segmentMap.has(kebab)) {
      segmentMap.set(kebab, urlSafe);
    }
  }

  // Full path mapping
  const kebabFull = parts.map(s => toKebabCase(s)).join('/');
  const originalFull = parts.map(s => toUrlSafe(s)).join('/');
  fullPathMap.set(kebabFull, originalFull);

  // Collect dir names
  for (let i = 0; i < parts.length - 1; i++) {
    dirNames.add(parts[i]);
  }
}

// Also add directory-only paths to fullPathMap (for category links)
for (const p of originalPaths) {
  const dir = dirname(p);
  if (dir !== '.') {
    const parts = dir.split('/');
    const kebabDir = parts.map(s => toKebabCase(s)).join('/');
    const originalDir = parts.map(s => toUrlSafe(s)).join('/');
    if (!fullPathMap.has(kebabDir)) {
      fullPathMap.set(kebabDir, originalDir);
    }
  }
}

console.log(`  ${segmentMap.size} unique segment mappings`);
console.log(`  ${fullPathMap.size} full path mappings`);

// Show a few examples
const examples = ['surface-chart', 'basic-charts', 'bar-chart', 'bollinger-bands-b', 'williams-r', 'volume-moving-average'];
for (const ex of examples) {
  if (segmentMap.has(ex)) {
    console.log(`    ${ex} → ${segmentMap.get(ex)}`);
  }
}

// ─── Convert a single link segment ──────────────────────────────

function convertSegment(seg) {
  // Don't touch relative markers or empty segments
  if (seg === '..' || seg === '.' || seg === '') return seg;
  // Look up in mapping
  return segmentMap.get(seg) || seg;
}

// ─── Process all docs ───────────────────────────────────────────

let totalFiles = 0;
let totalLinksFixed = 0;

/**
 * Convert the path portion of a link href from kebab-case to original-case.
 * Returns null if no change needed.
 */
function convertHref(href) {
  // Skip external URLs
  if (/^(https?:\/\/|\/\/|mailto:)/.test(href)) return null;
  // Skip anchor-only links
  if (href.startsWith('#')) return null;

  // Split path and anchor
  const hashIdx = href.indexOf('#');
  let pathPart, anchorPart;
  if (hashIdx >= 0) {
    pathPart = href.slice(0, hashIdx);
    anchorPart = href.slice(hashIdx); // keep anchor as-is
  } else {
    pathPart = href;
    anchorPart = '';
  }

  // Convert each path segment to original case
  const segments = pathPart.split('/');
  const converted = segments.map(convertSegment);
  const newPath = converted.join('/');

  if (newPath !== pathPart) {
    return newPath + anchorPart;
  }
  return null;
}

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let linksFixed = 0;

  // 1. Markdown links: [text](href)
  let updated = content.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (match, text, href) => {
      const newHref = convertHref(href);
      if (newHref !== null) {
        linksFixed++;
        return `[${text}](${newHref})`;
      }
      return match;
    }
  );

  // 2. HTML anchor tags: <a href="...">
  updated = updated.replace(
    /<a\s+href="([^"]+)"/g,
    (match, href) => {
      const newHref = convertHref(href);
      if (newHref !== null) {
        linksFixed++;
        return `<a href="${newHref}"`;
      }
      return match;
    }
  );

  if (linksFixed > 0) {
    writeFileSync(filePath, updated, 'utf-8');
    totalLinksFixed += linksFixed;
    totalFiles++;
  }
}

function walkDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.endsWith('.md')) {
      processFile(fullPath);
    }
  }
}

console.log('\nConverting internal links...');
walkDir(docsDir);

console.log(`\nDone!`);
console.log(`  Files modified: ${totalFiles}`);
console.log(`  Links converted: ${totalLinksFixed}`);
