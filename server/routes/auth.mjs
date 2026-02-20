import { Router } from 'express';
import crypto from 'node:crypto';

const router = Router();

/**
 * GET /auth/github
 * Redirect user to GitHub's OAuth authorization page.
 * Query: ?returnTo=/edit?path=docs/... (optional, where to redirect after login)
 */
router.get('/github', (req, res) => {
  if (!process.env.GITHUB_CLIENT_ID) {
    return res.status(503).send('GitHub OAuth not configured');
  }

  const state = crypto.randomBytes(16).toString('hex');
  req.session.oauthState = state;
  req.session.returnTo = req.query.returnTo || '/';

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: `${req.protocol}://${req.get('host')}/auth/callback`,
    scope: 'public_repo',
    state,
  });

  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

/**
 * GET /auth/callback
 * GitHub redirects here after user authorizes.
 * Exchanges the temporary code for an access token, fetches user profile,
 * stores both in the session, then redirects to the original page.
 */
router.get('/callback', async (req, res) => {
  const { code, state } = req.query;

  // Validate state to prevent CSRF
  if (!state || state !== req.session.oauthState) {
    return res.status(403).send('State mismatch — possible CSRF attack. Please try again.');
  }
  delete req.session.oauthState;

  if (!code) {
    return res.status(400).send('Missing authorization code');
  }

  try {
    // Exchange code for access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenRes.json();

    if (tokenData.error || !tokenData.access_token) {
      console.error('OAuth token exchange failed:', tokenData.error_description || tokenData.error);
      return res.status(401).send('GitHub authorization failed. Please try again.');
    }

    // Fetch user profile
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        Accept: 'application/vnd.github+json',
      },
    });

    if (!userRes.ok) {
      return res.status(401).send('Failed to fetch GitHub profile');
    }

    const user = await userRes.json();

    // Store in session
    req.session.githubToken = tokenData.access_token;
    req.session.githubUser = {
      id: user.id,
      login: user.login,
      name: user.name || user.login,
      avatar_url: user.avatar_url,
    };

    // Redirect to the page the user originally wanted
    const returnTo = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(returnTo);
  } catch (err) {
    console.error('OAuth callback error:', err.message);
    res.status(500).send('Authentication failed. Please try again.');
  }
});

/**
 * GET /auth/logout
 * Destroy session and redirect to homepage.
 */
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

/**
 * GET /auth/user
 * Returns the authenticated user's info (for frontend).
 * No auth required — returns { authenticated: false } if not logged in.
 */
router.get('/user', (req, res) => {
  if (!req.session.githubUser) {
    return res.json({ authenticated: false });
  }
  res.json({
    authenticated: true,
    user: req.session.githubUser,
  });
});

export default router;
