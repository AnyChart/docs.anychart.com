import { Router } from 'express';
import { normalize } from 'node:path';
import requireAuth from '../middleware/requireAuth.mjs';
import { createOctokit, fetchContent, submitEdit } from '../lib/github.mjs';

const router = Router();

/**
 * Validate a docs file path.
 * Must start with "docs/" and not contain "..".
 */
function validatePath(filePath) {
  if (!filePath || typeof filePath !== 'string') return null;
  const normalized = normalize(filePath).replace(/\\/g, '/');
  if (!normalized.startsWith('docs/') || normalized.includes('..')) return null;
  return normalized;
}

/**
 * GET /api/content?path=docs/basic-charts/line-chart.md
 * Fetch file content from GitHub API using the user's token.
 * Requires authentication.
 */
router.get('/content', requireAuth, async (req, res) => {
  const path = validatePath(req.query.path);
  if (!path) {
    return res.status(400).json({ error: 'Invalid path — must start with docs/' });
  }

  try {
    const octokit = createOctokit(req.session.githubToken);
    const result = await fetchContent(octokit, path);
    res.json(result);
  } catch (err) {
    if (err.status === 401) {
      req.session.destroy(() => {});
      return res.status(401).json({ error: 'Session expired. Please log in again.', loginUrl: '/auth/github' });
    }
    if (err.status === 404) {
      return res.status(404).json({ error: 'File not found' });
    }
    console.error('Error fetching content:', err.message);
    res.status(500).json({ error: 'Failed to fetch file content' });
  }
});

/**
 * POST /api/suggest
 * Body: { path, content, description }
 * Creates a fork (if needed), branch, commit, and PR — all as the logged-in user.
 * Requires authentication.
 */
router.post('/suggest', requireAuth, async (req, res) => {
  const { path: rawPath, content, description } = req.body;

  // Validate inputs
  const path = validatePath(rawPath);
  if (!path) {
    return res.status(400).json({ error: 'Invalid path — must start with docs/' });
  }
  if (!content) {
    return res.status(400).json({ error: 'Missing content' });
  }
  if (!description || description.length < 5 || description.length > 200) {
    return res.status(400).json({ error: 'Description must be 5-200 characters' });
  }

  try {
    const result = await submitEdit(req.session.githubToken, { path, content, description });
    res.json(result);
  } catch (err) {
    if (err.status === 401) {
      req.session.destroy(() => {});
      return res.status(401).json({ error: 'Session expired. Please log in again.', loginUrl: '/auth/github' });
    }
    if (err.message?.includes('timed out')) {
      return res.status(503).json({ error: 'Fork creation timed out. Please try again.' });
    }
    console.error('Error creating PR:', err.message);
    res.status(500).json({ error: 'Failed to create pull request. Please try again.' });
  }
});

export default router;
