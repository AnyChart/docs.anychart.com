/**
 * Copies sample HTML files from the repo root samples/ directory
 * into static/samples/, replacing {{branch-name}} with the actual version.
 */
import {readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync} from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectDir = dirname(__dirname);
const sourceDir = join(projectDir, 'samples');
const targetDir = join(projectDir, 'static', 'samples');

// Read version from config.toml
function getVersion() {
  if (process.argv[2]) return process.argv[2];
  if (process.env.ANYCHART_VERSION) return process.env.ANYCHART_VERSION;

  try {
    const config = readFileSync(join(projectDir, 'config.toml'), 'utf-8');
    const match = config.match(/anychart-version\s*=\s*"([^"]+)"/);
    if (match) return match[1];
  } catch (e) {
    // ignore
  }
  return '8.14.1';
}

const version = getVersion();
console.log(`Preparing samples...`);
console.log(`  Source: ${sourceDir}`);
console.log(`  Target: ${targetDir}`);
console.log(`  Version: ${version}`);

// Clean and recreate target
if (existsSync(targetDir)) {
  rmSync(targetDir, {recursive: true});
}
mkdirSync(targetDir, {recursive: true});

// Copy all HTML files with replacement
const files = readdirSync(sourceDir).filter(f => f.endsWith('.html'));
let count = 0;
for (const file of files) {
  const content = readFileSync(join(sourceDir, file), 'utf-8');
  const processed = content.replace(/\{\{branch-name\}\}/g, version);
  writeFileSync(join(targetDir, file), processed, 'utf-8');
  count++;
}

console.log(`Done. Copied ${count} samples.`);
