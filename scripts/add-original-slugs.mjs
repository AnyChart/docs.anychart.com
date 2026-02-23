#!/usr/bin/env node
/**
 * Add original-URL slugs to all migrated docs.
 *
 * Reads the original file tree from git history (pre-migration commit),
 * maps each original path to its kebab-case equivalent in docs/,
 * and injects `slug: /Original_Path` into the YAML frontmatter.
 *
 * Also updates _category_.json files to use original directory names as slugs.
 *
 * Usage: node scripts/add-original-slugs.mjs
 */

import {readFileSync, writeFileSync, readdirSync, existsSync} from 'fs';
import {join, dirname, basename} from 'path';
import {fileURLToPath} from 'url';
import {execSync} from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectDir = dirname(__dirname);
const docsDir = join(projectDir, 'docs');

// The commit hash just before the old content directories were removed.
// This is the authoritative source for original file paths.
const SOURCE_COMMIT = '03afadaf60b69dd2f6281a5e5c344a2ea0b5bfa0';

// ─── Helpers ────────────────────────────────────────────────────

/**
 * Same toKebabCase as migrate.mjs — must produce identical output.
 */
function toKebabCase(str) {
  return str
    .replace(/[()%]/g, '')
    .replace(/\+/g, '')
    .replace(/_/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

// ─── Step 1: Get original file paths from git ───────────────────

console.log('Reading original file paths from git history...');
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

console.log(`  Found ${originalPaths.length} original markdown files.`);

// ─── Step 2: Build mapping: original path → kebab docs path ─────

const stats = {updated: 0, skipped: 0, missing: 0, categories: 0};

for (const originalPath of originalPaths) {
  // Compute kebab-case path segments
  const segments = originalPath.replace(/\.md$/, '').split('/');
  const kebabSegments = segments.map(s => toKebabCase(s));

  // Compute original slug (strip .md, prepend /)
  // Same-name convention: Quick_Start/Quick_Start.md → /Quick_Start (not /Quick_Start/Quick_Start)
  // because Docusaurus makes dir/dir.md the category page at /dir
  let slugSegments = [...segments];
  if (slugSegments.length >= 2 && slugSegments[slugSegments.length - 1] === slugSegments[slugSegments.length - 2]) {
    slugSegments.pop();
  }
  const originalSlug = '/' + slugSegments.join('/');

  // Determine the target file in docs/
  // Same-name convention: if filename matches parent dir, Docusaurus treats it
  // as category page. The file lives at dir/dir.md in docs/.
  const kebabPath = kebabSegments.join('/') + '.md';
  const targetFile = join(docsDir, kebabPath);

  if (!existsSync(targetFile)) {
    console.log(`  MISSING: ${originalPath} → docs/${kebabPath}`);
    stats.missing++;
    continue;
  }

  // Read current content
  let content = readFileSync(targetFile, 'utf-8');

  // Check if slug already exists in frontmatter
  if (/^---\s*\n[\s\S]*?^slug:/m.test(content)) {
    // Already has a slug — skip (e.g., index.md)
    stats.skipped++;
    continue;
  }

  // Inject slug into existing frontmatter or create new frontmatter
  if (content.startsWith('---\n')) {
    // Has frontmatter — add slug after opening ---
    content = content.replace(
      /^---\n/,
      `---\nslug: "${originalSlug}"\n`
    );
  } else {
    // No frontmatter — create one
    content = `---\nslug: "${originalSlug}"\n---\n` + content;
  }

  writeFileSync(targetFile, content, 'utf-8');
  stats.updated++;
}

console.log(`\n  Docs updated: ${stats.updated}`);
console.log(`  Docs skipped (already have slug): ${stats.skipped}`);
console.log(`  Docs missing: ${stats.missing}`);

// ─── Step 3: Update _category_.json slugs ───────────────────────

console.log('\nUpdating _category_.json slugs...');

// Build a map of kebab dir path → original dir path
const originalDirs = new Set();
for (const p of originalPaths) {
  const dir = dirname(p);
  if (dir !== '.') originalDirs.add(dir);
}

// Get unique directory paths
const dirPaths = [...originalDirs].sort();

for (const originalDirPath of dirPaths) {
  const segments = originalDirPath.split('/');
  const kebabSegments = segments.map(s => toKebabCase(s));
  const kebabDirPath = kebabSegments.join('/');

  const categoryFile = join(docsDir, kebabDirPath, '_category_.json');
  if (!existsSync(categoryFile)) {
    console.log(`  MISSING category: docs/${kebabDirPath}/_category_.json`);
    continue;
  }

  const category = JSON.parse(readFileSync(categoryFile, 'utf-8'));

  // Update the slug in link.slug (only for generated-index type)
  const originalSlug = '/' + originalDirPath;
  if (category.link && category.link.type === 'generated-index') {
    category.link.slug = originalSlug;
  }
  // For link.type === 'doc', the slug comes from the doc's frontmatter, no change needed

  writeFileSync(categoryFile, JSON.stringify(category, null, 2) + '\n', 'utf-8');
  stats.categories++;
}

console.log(`  Categories updated: ${stats.categories}`);

// ─── Done ───────────────────────────────────────────────────────

console.log('\nDone!');
console.log(`\nSummary:`);
console.log(`  ${stats.updated} docs got slug frontmatter`);
console.log(`  ${stats.skipped} docs skipped (already had slug)`);
console.log(`  ${stats.missing} docs not found`);
console.log(`  ${stats.categories} _category_.json files updated`);
