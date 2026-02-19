import { readFileSync } from 'fs';

// Read a real doc file
const content = readFileSync('./docs/basic-charts/area-chart.md', 'utf8');

// Apply the same regex as the preprocessor
const regex3 = /\{sample\}([A-Za-z0-9_\\]+)\{sample\}/g;
let match;
const matches = [];
while ((match = regex3.exec(content)) !== null) {
  const cleanName = match[1].replace(/\\/g, '');
  matches.push({ raw: match[0], captured: match[1], cleanName });
}

console.log('Found', matches.length, '{sample} matches:');
matches.forEach(m => {
  console.log('  Raw:', m.raw);
  console.log('  Captured:', m.captured);
  console.log('  Clean:', m.cleanName);
  console.log();
});

// Also apply the full preprocessor to see the output around those matches
let transformed = content;

// Regex #2: with dimensions
transformed = transformed.replace(
  /\{sample(?:\s+:width\s+(\d+))?(?:\s+:height\s+(\d+))\}([A-Za-z0-9_\\]+)\{sample\}/g,
  (_match, width, height, name) => {
    const cleanName = name.replace(/\\/g, '');
    const attrs = [`name="${cleanName}"`];
    if (height) attrs.push(`height={${height}}`);
    if (width) attrs.push(`width={${width}}`);
    return `<ChartSample ${attrs.join(' ')} />`;
  },
);

// Regex #3: no dimensions
transformed = transformed.replace(
  /\{sample\}([A-Za-z0-9_\\]+)\{sample\}/g,
  (_match, name) => {
    const cleanName = name.replace(/\\/g, '');
    return `<ChartSample name="${cleanName}" />`;
  },
);

// Show lines around ChartSample
const lines = transformed.split('\n');
lines.forEach((line, i) => {
  if (line.includes('ChartSample') || line.includes('{sample}')) {
    console.log(`Line ${i + 1}: ${line}`);
  }
});

// Also check if any {sample} directives remain unmatched
const remaining = transformed.match(/\{sample\}/g);
console.log('\nRemaining unmatched {sample}:', remaining ? remaining.length : 0);
