# GitHub OAuth & Server Consolidation Plan

> **Status:** PLANNED (not yet implemented)
> **Created:** 2026-02-20
> **Branch:** `gogin-AI-refactor`

---

## Goal

Replace the current bot-token edit flow with GitHub OAuth. Users log in with GitHub, edit docs in a WYSIWYG editor, and click Submit. Everything else — fork, branch, commit, PR — happens automatically server-side. The Express server serves both the Docusaurus static build and the API.

---

## What Changes

| Aspect | Current | After |
|--------|---------|-------|
| Auth | None (anonymous) | GitHub OAuth login required |
| PR author | Bot account (PAT) | The actual user |
| Token | Server-side `GITHUB_TOKEN` PAT | User's OAuth `gho_` token (server-side session) |
| Identity | Self-reported name/email | Verified GitHub identity |
| Spam protection | IP rate limit (5/hr) | GitHub account required |
| Server role | API only (port 3001) | API + static site serving |
| PR target | `gogin-AI-refactor` | `develop` |

---

## Architecture

### Production

```
Internet
  │
  ▼
nginx (port 443)
  ├── SSL termination
  ├── gzip / brotli
  ├── static asset caching
  └── proxy_pass → localhost:3001
        │
        ▼
Express (port 3001)
  ├── GET  /auth/github        → redirect to GitHub OAuth
  ├── GET  /auth/callback      → exchange code for token, set session
  ├── GET  /auth/logout        → clear session
  ├── GET  /auth/user          → return logged-in user info (JSON)
  ├── GET  /api/content        → fetch file from GitHub API (user's token)
  ├── POST /api/suggest        → fork → branch → commit → PR (user's token)
  └── GET  /*                  → express.static(build/)
```

Single process. Single port. nginx in front.

### Development

```
npm run dev
  ├── Docusaurus dev server (localhost:3000, hot reload)
  └── Express server (localhost:3001, --watch)
```

Editor page talks to Express on 3001. Docusaurus pages use hot reload on 3000.

---

## OAuth Flow

### Prerequisites

Register a **GitHub OAuth App** at https://github.com/settings/developers:
- **App name:** AnyChart Docs Editor
- **Homepage URL:** https://docs.anychart.com
- **Callback URL:** https://docs.anychart.com/auth/callback
- **Scopes requested:** `public_repo`

This gives you a `CLIENT_ID` and `CLIENT_SECRET`.

### Login Flow (User Perspective)

```
1. User clicks "Suggest Changes" on any doc page
2. Not logged in → redirected to /auth/github
3. /auth/github redirects to GitHub's authorization page
4. User clicks "Authorize" on GitHub (one time only)
5. GitHub redirects back to /auth/callback
6. Server exchanges code for access token, stores in session
7. User is redirected to the editor page
8. Subsequent visits: session cookie recognized, no re-login needed
```

### Login Flow (Technical)

```
Step 1: GET /auth/github
  → Generate random `state` string, store in session
  → Redirect to:
    https://github.com/login/oauth/authorize
      ?client_id=CLIENT_ID
      &redirect_uri=https://docs.anychart.com/auth/callback
      &scope=public_repo
      &state=RANDOM_STATE

Step 2: GitHub redirects to GET /auth/callback?code=XXX&state=YYY
  → Validate state matches session
  → POST https://github.com/login/oauth/access_token
    Body: { client_id, client_secret, code }
    Response: { access_token: "gho_...", scope: "public_repo" }
  → Fetch user profile: GET https://api.github.com/user
  → Store in session: { token, login, id, avatar_url, name }
  → Redirect to original editor page (or /edit?path=...)

Step 3: Authenticated requests
  → Session cookie sent automatically
  → Server reads session.githubToken for API calls
```

### Token Details

- **Prefix:** `gho_` (GitHub OAuth token)
- **Expiration:** Never (lives until user revokes or unused for 1 year)
- **Refresh tokens:** Not needed (no expiration)
- **Scope:** `public_repo` — read/write public repos only
- **Storage:** Server-side session (httpOnly cookie holds session ID only)

---

## PR Creation Pipeline

When user clicks "Submit" in the editor, the server executes this automatically:

```
POST /api/suggest
  Body: { path: "docs/basic-charts/line-chart.md", content: "...", description: "..." }
  Session: { githubToken, login, id }
        │
        ▼
  1. Get authenticated user info
     GET /user → { login: "contributor123" }
        │
        ▼
  2. Check if user has a fork of AnyChart/docs.anychart.com
     GET /repos/contributor123/docs.anychart.com
     ├── 200 + fork=true + parent matches → use existing fork
     └── 404 → create fork (step 3)
        │
        ▼
  3. Create fork (if needed)
     POST /repos/AnyChart/docs.anychart.com/forks
     { default_branch_only: true }
     → Wait for fork to be ready (poll, ~2-5 seconds)
        │
        ▼
  4. Sync fork's develop branch with upstream
     POST /repos/contributor123/docs.anychart.com/merge-upstream
     { branch: "develop" }
     → Ensures fork is up-to-date before branching
        │
        ▼
  5. Create branch on fork
     GET  /repos/contributor123/docs.anychart.com/git/ref/heads/develop → baseSha
     POST /repos/contributor123/docs.anychart.com/git/refs
     { ref: "refs/heads/docs-edit-{timestamp}", sha: baseSha }
        │
        ▼
  6. Commit edited file to the branch
     GET  /repos/contributor123/docs.anychart.com/contents/{path}?ref=branch → fileSha
     PUT  /repos/contributor123/docs.anychart.com/contents/{path}
     { message, content (base64), sha: fileSha, branch }
        │
        ▼
  7. Open PR from fork to upstream
     POST /repos/AnyChart/docs.anychart.com/pulls
     {
       title: "Docs: {description}",
       body: "## Community Edit\n\n**File:** ...\n**Description:** ...",
       head: "contributor123:docs-edit-{timestamp}",
       base: "develop",
       maintainer_can_modify: true
     }
        │
        ▼
  8. Return result
     { success: true, pr_url: "https://github.com/AnyChart/docs.anychart.com/pull/123" }
```

### Error Handling

| Error | Cause | Response |
|-------|-------|----------|
| 401 from GitHub API | Token revoked | Clear session, return 401, frontend redirects to login |
| Fork creation timeout | GitHub slow | Return 503, user can retry |
| File SHA mismatch | File changed since loaded | Return 409, frontend reloads content |
| PR already exists | Duplicate submission | Return 409 with existing PR URL |
| Rate limit (GitHub API) | Too many API calls | Return 429, show retry message |

---

## Server Code Structure

```
server/
├── package.json            ← Dependencies: express, @octokit/rest, express-session, cors
├── index.mjs               ← Entry point: create app, mount routes, serve build/, listen
├── routes/
│   ├── auth.mjs            ← /auth/github, /auth/callback, /auth/logout, /auth/user
│   └── api.mjs             ← /api/content, /api/suggest (require auth middleware)
├── middleware/
│   └── requireAuth.mjs     ← Check session.githubToken exists, return 401 if not
└── lib/
    └── github.mjs          ← ensureFork(), createBranch(), commitFile(), createPR()
```

### index.mjs (entry point)

```javascript
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { join } from 'node:path';
import authRoutes from './routes/auth.mjs';
import apiRoutes from './routes/api.mjs';

const app = express();
const BUILD_DIR = join(import.meta.dirname, '..', 'build');
const PORT = process.env.PORT || 3001;

// Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000  // 30 days
  }
}));

app.use(express.json({ limit: '2mb' }));
app.use(cors({ origin: true, credentials: true }));

// Routes (before static files)
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Static Docusaurus build
app.use(express.static(BUILD_DIR));
app.use((req, res) => {
  res.sendFile(join(BUILD_DIR, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### routes/auth.mjs

```javascript
import { Router } from 'express';
import crypto from 'node:crypto';

const router = Router();

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const CALLBACK_URL = process.env.GITHUB_CALLBACK_URL || '/auth/callback';

// Step 1: Redirect to GitHub
router.get('/github', (req, res) => {
  const state = crypto.randomBytes(16).toString('hex');
  req.session.oauthState = state;
  req.session.returnTo = req.query.returnTo || '/';

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: CALLBACK_URL,
    scope: 'public_repo',
    state
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

// Step 2: GitHub callback
router.get('/callback', async (req, res) => {
  // Validate state
  if (req.query.state !== req.session.oauthState) {
    return res.status(403).send('State mismatch');
  }
  delete req.session.oauthState;

  // Exchange code for token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code
    })
  });
  const { access_token, error } = await tokenRes.json();
  if (error || !access_token) return res.status(401).send('OAuth failed');

  // Fetch user profile
  const userRes = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${access_token}` }
  });
  const user = await userRes.json();

  // Store in session
  req.session.githubToken = access_token;
  req.session.githubUser = {
    id: user.id,
    login: user.login,
    name: user.name,
    avatar_url: user.avatar_url
  };

  const returnTo = req.session.returnTo || '/';
  delete req.session.returnTo;
  res.redirect(returnTo);
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

// Get current user (for frontend)
router.get('/user', (req, res) => {
  if (!req.session.githubUser) return res.json({ authenticated: false });
  res.json({ authenticated: true, user: req.session.githubUser });
});

export default router;
```

### middleware/requireAuth.mjs

```javascript
export default function requireAuth(req, res, next) {
  if (!req.session.githubToken) {
    return res.status(401).json({ error: 'Not authenticated', loginUrl: '/auth/github' });
  }
  next();
}
```

### lib/github.mjs

Core GitHub operations using user's OAuth token:

- `ensureFork(octokit, username)` — check/create fork, sync with upstream
- `createBranch(octokit, username, baseBranch)` — create `docs-edit-{timestamp}` branch
- `commitFile(octokit, username, branch, filePath, content, message)` — commit edited file
- `createPR(octokit, username, branch, title, body)` — open cross-repo PR
- `submitEdit(token, { path, content, description })` — orchestrates all of the above

### routes/api.mjs

```javascript
import { Router } from 'express';
import requireAuth from '../middleware/requireAuth.mjs';
import { submitEdit } from '../lib/github.mjs';
import { Octokit } from '@octokit/rest';

const router = Router();

// Fetch file content (from GitHub API, using user's token)
router.get('/content', requireAuth, async (req, res) => {
  const { path } = req.query;
  // Validate path
  if (!path || !path.startsWith('docs/') || path.includes('..')) {
    return res.status(400).json({ error: 'Invalid path' });
  }

  const octokit = new Octokit({ auth: req.session.githubToken });
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: 'AnyChart',
      repo: 'docs.anychart.com',
      path,
      ref: 'develop'
    });
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    res.json({ path, content });
  } catch (err) {
    if (err.status === 404) return res.status(404).json({ error: 'File not found' });
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Submit edit (fork → branch → commit → PR)
router.post('/suggest', requireAuth, async (req, res) => {
  const { path, content, description } = req.body;

  // Validate inputs
  if (!path || !content || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!path.startsWith('docs/') || path.includes('..')) {
    return res.status(400).json({ error: 'Invalid path' });
  }
  if (description.length < 5 || description.length > 200) {
    return res.status(400).json({ error: 'Description must be 5-200 characters' });
  }

  try {
    const result = await submitEdit(req.session.githubToken, { path, content, description });
    res.json(result);
  } catch (err) {
    if (err.status === 401) {
      req.session.destroy(() => {});
      return res.status(401).json({ error: 'Token expired, please log in again' });
    }
    res.status(500).json({ error: 'Failed to create PR', details: err.message });
  }
});

export default router;
```

---

## Frontend Changes

### EditThisPage Component (`src/theme/EditThisPage/index.tsx`)

Keep the current behavior: extract file path, redirect to `/edit?path=...`.
No changes needed — the editor page handles auth.

### Editor Page (`static/edit/index.html`)

Modify the existing editor page:

1. **On load:** call `GET /auth/user`
   - If `authenticated: false` → show login prompt with "Log in with GitHub" button
   - If `authenticated: true` → show editor (current behavior)

2. **Login button:** redirects to `/auth/github?returnTo=/edit?path=...`
   - After OAuth, user lands back on the editor page with session active

3. **Remove author fields** — name/email come from GitHub profile automatically

4. **Show user info** — display avatar + username in the header ("Editing as @username")

5. **Handle 401 from API** — if token expired mid-session, redirect to login

### UI States

```
State 1: Not logged in
┌─────────────────────────────────────────┐
│  Suggest Changes                        │
│                                         │
│  To suggest changes to this document,   │
│  please log in with your GitHub account │
│                                         │
│  [  Log in with GitHub  ]               │
│                                         │
└─────────────────────────────────────────┘

State 2: Logged in, editing
┌─────────────────────────────────────────┐
│  Suggest Changes          @user ▼       │
│                                         │
│  File: docs/basic-charts/line-chart.md  │
│  ┌─────────────────────────────────┐    │
│  │  [WYSIWYG editor]               │    │
│  │                                  │    │
│  └─────────────────────────────────┘    │
│  Description: [________________]        │
│                                         │
│  [Cancel]              [Submit]         │
└─────────────────────────────────────────┘

State 3: Success
┌─────────────────────────────────────────┐
│  Your changes have been submitted!      │
│  View your pull request: PR #123        │
└─────────────────────────────────────────┘
```

---

## Environment Variables

### New variables needed

| Variable | Required | Example | Purpose |
|----------|----------|---------|---------|
| `GITHUB_CLIENT_ID` | Yes | `Ov23liXXXX` | OAuth App client ID |
| `GITHUB_CLIENT_SECRET` | Yes | `abcdef123456` | OAuth App client secret |
| `SESSION_SECRET` | Yes | `random-64-char-string` | express-session encryption |
| `GITHUB_CALLBACK_URL` | No | `https://docs.anychart.com/auth/callback` | OAuth callback (default: /auth/callback) |

### Variables removed

| Variable | Reason |
|----------|--------|
| `GITHUB_TOKEN` | No longer needed — user's OAuth token used instead |
| `GITHUB_OWNER` | Hardcoded to `AnyChart` (it's always the same) |
| `GITHUB_REPO` | Hardcoded to `docs.anychart.com` |
| `GITHUB_BASE_BRANCH` | Hardcoded to `develop` |
| `DOCS_ROOT` | No longer reading from disk — using GitHub API |

### Updated `.env.example`

```env
# GitHub OAuth App (register at https://github.com/settings/developers)
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret

# Session secret (generate: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
SESSION_SECRET=your_session_secret

# Optional
# PORT=3001
# NODE_ENV=production
# GITHUB_CALLBACK_URL=https://docs.anychart.com/auth/callback
```

---

## npm Workspace Setup

### Root `package.json` changes

```json
{
  "workspaces": ["server"],
  "scripts": {
    "dev": "concurrently \"docusaurus start\" \"node --watch server/index.mjs\"",
    "build": "npm run prepare-samples && docusaurus build",
    "serve": "node server/index.mjs",
    "start": "npm run build && npm run serve"
  }
}
```

### Server `package.json` dependencies

```json
{
  "dependencies": {
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "@octokit/rest": "^21.1.1",
    "cors": "^2.8.5"
  }
}
```

Removed: `dotenv` (loaded from root), `octokit` (replaced by `@octokit/rest` — lighter).

---

## Implementation Steps

### Phase 1: Server Consolidation

1. Set up npm workspaces (root `package.json` + workspace config)
2. Restructure `server/` into routes/middleware/lib
3. Add static file serving (express.static for build/)
4. Add SPA fallback (index.html for client-side routes)
5. Move `.env` to project root, update .gitignore
6. Verify: `npm run build && npm run serve` works end-to-end

### Phase 2: GitHub OAuth

7. Register GitHub OAuth App (manual step — GitHub settings)
8. Implement auth routes (/auth/github, /auth/callback, /auth/logout, /auth/user)
9. Add express-session with httpOnly cookies
10. Add requireAuth middleware
11. Verify: login flow works, session persists across requests

### Phase 3: User-Authenticated PR Flow

12. Implement lib/github.mjs (ensureFork, createBranch, commitFile, createPR)
13. Rewrite /api/content to use GitHub API + user's token (not local filesystem)
14. Rewrite /api/suggest to use fork→branch→commit→PR flow with user's token
15. Remove old bot-token code, remove GITHUB_TOKEN from .env
16. Verify: PR appears on GitHub as the logged-in user

### Phase 4: Frontend Updates

17. Update editor page: add auth check on load
18. Add "Log in with GitHub" prompt for unauthenticated users
19. Show user avatar/name in editor header
20. Remove manual author name/email fields
21. Handle 401 responses (redirect to login)
22. Verify: full flow works end-to-end

### Phase 5: Cleanup & Polish

23. Update .env.example with new variables
24. Remove old bot-token references from SERVER_ARCHITECTURE.md
25. Update EDIT_FLOW_RESEARCH.md with final architecture
26. Test error scenarios (revoked token, fork timeout, file conflict)
27. Add rate limiting per GitHub user (optional — GitHub's own rate limits may suffice)

---

## What Does NOT Change

- **Docusaurus config** — no changes to docusaurus.config.ts
- **docs/ directory** — content stays as-is
- **EditThisPage component** — still extracts path and redirects to /edit
- **Toast UI Editor** — same editor library
- **nginx config** — same proxy_pass to port 3001
- **PM2 config** — same ecosystem.config.cjs

---

## Security Considerations

- **OAuth tokens stored server-side only** — httpOnly cookie holds session ID, never the token
- **State parameter** validates OAuth callbacks (CSRF protection)
- **`public_repo` scope** — minimal access, public repos only
- **Path validation** — `docs/` prefix required, no `..` traversal
- **Session expiry** — 30-day max age, auto-cleared
- **Token revocation handling** — 401 from GitHub → clear session, prompt re-login
- **No client secrets exposed** — CLIENT_SECRET stays server-side

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Fork creation is slow (~2-5s) | Show spinner, poll until ready |
| User revokes OAuth access | Handle 401, prompt re-login |
| GitHub API rate limit (5000/hr authenticated) | Unlikely for docs edits, but show error if hit |
| Two users edit same file simultaneously | GitHub handles merge conflicts on PR |
| Session store lost on server restart (in-memory) | Users just re-login, token still valid |

### Future Improvements (not in scope now)

- Persistent session store (Redis or SQLite) for multi-server or restart resilience
- Preview deployment for each PR (GitHub Actions)
- Slack/email notifications for new PRs
- CODEOWNERS auto-assign reviewers
- Edit history per user (dashboard)
