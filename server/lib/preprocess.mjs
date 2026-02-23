/**
 * Preprocessing for the community edit page.
 *
 * preprocessForEditor()  — strips frontmatter and resolves custom directives
 *                          into standard markdown so users see clean content.
 * reversePreprocess()    — converts the cleaned content back to the original
 *                          directive format so the committed file is unchanged
 *                          except for the user's actual edits.
 */

const ANYCHART_VERSION = process.env.ANYCHART_VERSION || '8.14.1';

// ── preprocessForEditor ─────────────────────────────────────────────────────

/**
 * Transform raw doc source into editor-friendly markdown.
 *
 * @param {string} raw - Full file content including YAML frontmatter
 * @returns {{ content: string, frontmatter: string }}
 */
export function preprocessForEditor(raw) {
  let content = raw;
  let frontmatter = '';

  // 1. Strip YAML frontmatter
  const fmMatch = content.match(/^---\r?\n([\s\S]*?\r?\n)---\r?\n/);
  if (fmMatch) {
    frontmatter = fmMatch[0];
    content = content.slice(fmMatch[0].length);
  }

  // 2. {{branch-name}} → version string
  content = content.replace(/\{\{branch-name\}\}/g, ANYCHART_VERSION);

  // 3. {sample ...}NAME{sample} → HTML comment marker
  //    Preserves width/height params so reversePreprocess can restore them.
  content = content.replace(
    /\{sample((?:\s+:[a-z]+\s+\d+\s*)*)\}([A-Za-z0-9_\\-]+)\{sample\}/g,
    (_match, params, name) => {
      const cleanName = name.replace(/\\/g, '');
      const width = params.match(/:width\s+(\d+)/)?.[1] || '';
      const height = params.match(/:height\s+(\d+)/)?.[1] || '';
      const parts = [`<!-- sample: ${cleanName}`];
      if (width) parts.push(`width:${width}`);
      if (height) parts.push(`height:${height}`);
      return parts.join(' ') + ' -->';
    },
  );

  // 4. {api:target}text{api} → [text](https://api.anychart.com/target)
  content = content.replace(
    /\{api:([^}]+)\}([^{]*)\{api\}/g,
    (_match, target, text) => {
      const displayText = text || target;
      return `[${displayText}](https://api.anychart.com/${target})`;
    },
  );

  // 5. {pg:location}text{pg} → [text](https://playground.anychart.com/location)
  content = content.replace(
    /\{pg:([^}]+)\}([^{]*)\{pg\}/g,
    (_match, location, text) => {
      return `[${text}](https://playground.anychart.com/${location})`;
    },
  );

  return { content, frontmatter };
}

// ── reversePreprocess ───────────────────────────────────────────────────────

/**
 * Convert editor-friendly markdown back to the original directive format.
 *
 * @param {string} content   - The preprocessed content from the editor
 * @param {string} frontmatter - The YAML frontmatter stripped earlier
 * @returns {string} Full file content ready for commit
 */
export function reversePreprocess(content, frontmatter) {
  let result = content;

  // 1. Version string → {{branch-name}}
  //    Use a regex that matches the version in contexts where it appeared
  //    (inside URLs, code blocks, etc.)
  result = result.replace(
    new RegExp(escapeRegex(ANYCHART_VERSION), 'g'),
    '{{branch-name}}',
  );

  // 2. Sample comment markers → {sample ...}NAME{sample}
  result = result.replace(
    /<!-- sample: ([A-Za-z0-9_-]+)(?: width:(\d+))?(?: height:(\d+))? -->/g,
    (_match, name, width, height) => {
      let params = '';
      if (width) params += ` :width ${width}`;
      if (height) params += ` :height ${height}`;
      return `{sample${params}}${name}{sample}`;
    },
  );

  // 3. API links → {api:target}text{api}
  result = result.replace(
    /\[([^\]]*)\]\(https:\/\/api\.anychart\.com\/([^)]+)\)/g,
    (_match, text, target) => {
      return `{api:${target}}${text}{api}`;
    },
  );

  // 4. Playground links → {pg:location}text{pg}
  result = result.replace(
    /\[([^\]]*)\]\(https:\/\/playground\.anychart\.com\/([^)]+)\)/g,
    (_match, text, location) => {
      return `{pg:${location}}${text}{pg}`;
    },
  );

  // 5. Re-add frontmatter
  if (frontmatter) {
    result = frontmatter + result;
  }

  return result;
}

// ── Line-level merge ────────────────────────────────────────────────────────

/**
 * Merge only the changed lines from `edited` into `original`.
 *
 * Both strings are split into lines; unchanged lines keep the original bytes
 * exactly. Only lines that differ are taken from `edited`. This is a safety
 * net ensuring preprocessing round-trip imperfections don't corrupt unchanged
 * lines.
 *
 * @param {string} original - The original raw file content
 * @param {string} edited   - The reverse-preprocessed edited content
 * @returns {string}
 */
export function mergeByLines(original, edited) {
  const origLines = original.split('\n');
  const editLines = edited.split('\n');

  // If lengths differ the user added/removed lines — use a simple LCS diff.
  if (origLines.length !== editLines.length) {
    return applyLineDiff(origLines, editLines);
  }

  // Same number of lines: keep originals where possible.
  const merged = origLines.map((origLine, i) => {
    if (normalizeLine(origLine) === normalizeLine(editLines[i])) {
      return origLine; // keep original bytes exactly
    }
    return editLines[i]; // user actually changed this line
  });

  return merged.join('\n');
}

/**
 * Simple LCS-based line diff that keeps original lines where unchanged
 * and takes edited lines where they differ.
 */
function applyLineDiff(origLines, editLines) {
  // Build LCS table
  const m = origLines.length;
  const n = editLines.length;

  // For very large files, fall back to the edited content directly
  // to avoid memory issues with the LCS table
  if (m * n > 10_000_000) {
    return editLines.join('\n');
  }

  const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (normalizeLine(origLines[i - 1]) === normalizeLine(editLines[j - 1])) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to build merged result
  const result = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && normalizeLine(origLines[i - 1]) === normalizeLine(editLines[j - 1])) {
      result.push(origLines[i - 1]); // keep original bytes
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.push(editLines[j - 1]); // added/changed line from edit
      j--;
    } else {
      // deleted line from original — skip
      i--;
    }
  }

  result.reverse();
  return result.join('\n');
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Normalize a line for comparison purposes.
 * Strips backslash escapes, trailing whitespace, and trailing \r
 * so that roundtrip differences in escaping don't cause false diffs.
 */
function normalizeLine(line) {
  return line
    .replace(/\\/g, '')
    .trimEnd();
}
