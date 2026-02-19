import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Octokit } from 'octokit';
import { readFile } from 'node:fs/promises';
import { join, normalize } from 'node:path';

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

const PORT = process.env.PORT || 3001;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'AnyChart';
const GITHUB_REPO = process.env.GITHUB_REPO || 'docs.anychart.com';
const GITHUB_BASE_BRANCH = process.env.GITHUB_BASE_BRANCH || 'gogin-AI-refactor';
const DOCS_ROOT = process.env.DOCS_ROOT || join(import.meta.dirname, '..');

// Rate limiting: simple in-memory IP tracker
const submissions = new Map();
const RATE_LIMIT = 5;        // max submissions
const RATE_WINDOW = 3600000; // per hour (ms)

function checkRateLimit(ip) {
  const now = Date.now();
  const history = (submissions.get(ip) || []).filter(t => now - t < RATE_WINDOW);
  if (history.length >= RATE_LIMIT) return false;
  history.push(now);
  submissions.set(ip, history);
  return true;
}

/**
 * GET /api/content?path=docs/basic-charts/line-chart.md
 * Returns the raw markdown content of a doc file.
 */
app.get('/api/content', async (req, res) => {
  const filePath = req.query.path;
  if (!filePath || typeof filePath !== 'string') {
    return res.status(400).json({ error: 'Missing ?path= parameter' });
  }

  // Sanitize: must start with "docs/" and not escape the docs root
  const normalized = normalize(filePath).replace(/\\/g, '/');
  if (!normalized.startsWith('docs/') || normalized.includes('..')) {
    return res.status(400).json({ error: 'Invalid path — must start with docs/' });
  }

  try {
    const fullPath = join(DOCS_ROOT, normalized);
    const content = await readFile(fullPath, 'utf-8');
    res.json({ path: normalized, content });
  } catch (err) {
    if (err.code === 'ENOENT') {
      return res.status(404).json({ error: 'File not found' });
    }
    console.error('Error reading file:', err);
    res.status(500).json({ error: 'Failed to read file' });
  }
});

/**
 * POST /api/suggest
 * Body: { path, content, description, author? }
 * Creates a GitHub PR with the edited file.
 */
app.post('/api/suggest', async (req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GitHub integration not configured' });
  }

  // Rate limit
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.ip;
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many submissions. Please try again later.' });
  }

  const { path: filePath, content, description, author } = req.body;

  // Validate
  if (!filePath || !content || !description) {
    return res.status(400).json({ error: 'Missing required fields: path, content, description' });
  }

  const normalized = normalize(filePath).replace(/\\/g, '/');
  if (!normalized.startsWith('docs/') || normalized.includes('..')) {
    return res.status(400).json({ error: 'Invalid path' });
  }

  if (description.length < 5 || description.length > 200) {
    return res.status(400).json({ error: 'Description must be 5-200 characters' });
  }

  // Read current file to verify it exists and content actually changed
  let currentContent;
  try {
    currentContent = await readFile(join(DOCS_ROOT, normalized), 'utf-8');
  } catch {
    return res.status(404).json({ error: 'File not found' });
  }

  if (content.trim() === currentContent.trim()) {
    return res.status(400).json({ error: 'No changes detected' });
  }

  try {
    const octokit = new Octokit({ auth: GITHUB_TOKEN });

    // Generate a unique branch name
    const timestamp = Date.now();
    const slug = normalized
      .replace(/^docs\//, '')
      .replace(/\.md$/, '')
      .replace(/\//g, '-')
      .slice(0, 40);
    const branchName = `community/edit-${timestamp}-${slug}`;

    // Get the SHA of the base branch
    const { data: refData } = await octokit.rest.git.getRef({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      ref: `heads/${GITHUB_BASE_BRANCH}`,
    });
    const baseSha = refData.object.sha;

    // Create branch
    await octokit.rest.git.createRef({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      ref: `refs/heads/${branchName}`,
      sha: baseSha,
    });

    // Get current file's blob SHA (needed for update)
    let fileSha;
    try {
      const { data: fileData } = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: normalized,
        ref: GITHUB_BASE_BRANCH,
      });
      fileSha = fileData.sha;
    } catch {
      return res.status(404).json({ error: 'File not found in repository' });
    }

    // Commit the edited file
    const authorLine = author ? `\n\nSubmitted by: ${author}` : '';
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: normalized,
      message: `docs: ${description}${authorLine}`,
      content: Buffer.from(content).toString('base64'),
      sha: fileSha,
      branch: branchName,
    });

    // Create pull request
    const prBody = [
      `## Community Edit`,
      '',
      `**File:** \`${normalized}\``,
      `**Description:** ${description}`,
      author ? `**Submitted by:** ${author}` : '*Anonymous submission*',
      '',
      '---',
      '*This PR was created via the documentation editor.*',
    ].join('\n');

    const { data: pr } = await octokit.rest.pulls.create({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      title: `Docs: ${description}`,
      body: prBody,
      head: branchName,
      base: GITHUB_BASE_BRANCH,
    });

    // Add label if it exists
    try {
      await octokit.rest.issues.addLabels({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        issue_number: pr.number,
        labels: ['community-edit'],
      });
    } catch {
      // Label doesn't exist yet — that's fine
    }

    res.json({
      success: true,
      pr_url: pr.html_url,
      pr_number: pr.number,
    });
  } catch (err) {
    console.error('GitHub API error:', err.message);
    res.status(500).json({ error: 'Failed to create pull request. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Edit server running on http://localhost:${PORT}`);
  console.log(`GitHub: ${GITHUB_OWNER}/${GITHUB_REPO} (base: ${GITHUB_BASE_BRANCH})`);
  if (!GITHUB_TOKEN) {
    console.warn('WARNING: GITHUB_TOKEN not set — PR creation will fail');
  }
});
