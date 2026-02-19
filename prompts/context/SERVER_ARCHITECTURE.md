# Server Architecture Plan — VPS Deployment

> Status: **PLANNED** (not yet implemented)
> Created: 2026-02-19

---

## Problem

The Docusaurus static site and the Express edit server currently exist as two disconnected pieces in the same repo — separate `package.json` files, separate `node_modules`, no defined contract for how they run together in production. Deploying requires manual wiring: build the site, serve it somehow, start the API on a different port, and figure out routing between them.

## Target Architecture

```
Internet
  │
  ▼
nginx (port 443)
  ├── SSL termination
  ├── gzip / brotli compression
  ├── static asset caching (Cache-Control headers)
  └── proxy_pass → localhost:3001
        │
        ▼
Express (port 3001, internal only)
  ├── GET  /api/content?path=...   → read markdown from docs/
  ├── POST /api/suggest            → create GitHub PR
  ├── GET  /edit                   → static editor page (from build/)
  └── GET  /*                      → Docusaurus static build (from build/)
```

**Single process. Single port. nginx in front.**

---

## Changes Required

### 1. npm Workspaces

Link root and `server/` so one `npm install` covers both.

**Root `package.json`** — add:
```json
{
  "workspaces": ["server"]
}
```

After this, `npm install` at the root installs everything (both Docusaurus deps and server deps). No more separate `cd server && npm install`.

`server/node_modules/` will be removed — dependencies get hoisted to root `node_modules/`.

### 2. Express Serves the Static Build

In `server/index.mjs`, add static file serving for production:

```js
import { join } from 'node:path';
import express from 'express';

const BUILD_DIR = join(import.meta.dirname, '..', 'build');

// API routes first (they take priority)
app.get('/api/content', ...);
app.post('/api/suggest', ...);

// Static files from Docusaurus build
app.use(express.static(BUILD_DIR));

// SPA fallback — serve index.html for client-side routes
app.use((req, res) => {
  res.sendFile(join(BUILD_DIR, 'index.html'));
});
```

This means Express is the **only thing that needs to run** in production. It serves both the site and the API.

### 3. Unified Scripts in Root `package.json`

```json
{
  "scripts": {
    "dev": "concurrently \"docusaurus start\" \"node --watch server/index.mjs\"",
    "build": "docusaurus build",
    "serve": "node server/index.mjs",
    "start": "npm run build && npm run serve"
  }
}
```

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development — Docusaurus hot-reload + API server |
| `npm run build` | Build static site to `build/` |
| `npm run serve` | Start Express (serves `build/` + API) |
| `npm start` | Full production start (build + serve) |

Note: `concurrently` is a dev dependency for running both dev servers in parallel. Alternatively, PM2 can manage both in dev mode.

### 4. PM2 Process Management

Create `ecosystem.config.cjs` at the project root:

```js
module.exports = {
  apps: [{
    name: 'anychart-docs',
    script: 'server/index.mjs',
    cwd: __dirname,
    instances: 1,
    autorestart: true,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
};
```

Server management:
```bash
pm2 start ecosystem.config.cjs      # start
pm2 restart anychart-docs            # restart after deploy
pm2 logs anychart-docs               # view logs
pm2 save                             # persist across reboots
```

### 5. nginx Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name docs.anychart.com;

    ssl_certificate     /etc/ssl/certs/anychart.com.crt;
    ssl_certificate_key /etc/ssl/private/anychart.com.key;

    # Security headers
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    # Cache static assets aggressively
    location /assets/ {
        proxy_pass http://127.0.0.1:3001;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache images and fonts
    location ~* \.(ico|png|jpg|jpeg|gif|svg|woff2?|ttf|eot)$ {
        proxy_pass http://127.0.0.1:3001;
        expires 30d;
        add_header Cache-Control "public";
    }

    # Everything else → Express
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# HTTP → HTTPS redirect
server {
    listen 80;
    server_name docs.anychart.com;
    return 301 https://$host$request_uri;
}
```

### 6. Environment Variables

The `.env` file stays in `server/` (already gitignored). For production on VPS, env vars can alternatively be set in the PM2 ecosystem file or as system environment variables.

Required vars:
| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | `3001` | Express listen port |
| `GITHUB_TOKEN` | Yes | — | PAT with repo scope |
| `GITHUB_OWNER` | No | `AnyChart` | GitHub org/user |
| `GITHUB_REPO` | No | `docs.anychart.com` | Repository name |
| `GITHUB_BASE_BRANCH` | No | `gogin-AI-refactor` | PR base branch (change to `develop` or `main` for production) |
| `DOCS_ROOT` | No | `../` (relative to server/) | Path to project root |

### 7. .env Location Change

With workspaces, `dotenv` should load from the **project root** instead of `server/`. Move the `.env` file to the root (it's already gitignored there) and update the dotenv config path in `server/index.mjs`:

```js
import 'dotenv/config';  // loads from cwd, which is root when run via npm scripts
```

Or explicitly:
```js
import dotenv from 'dotenv';
dotenv.config({ path: new URL('../.env', import.meta.url) });
```

---

## Deployment Workflow

```bash
# On VPS — first time:
git clone https://github.com/AnyChart/docs.anychart.com.git
cd docs.anychart.com
git checkout gogin-AI-refactor
npm install                   # installs everything (workspaces)
cp .env.example .env          # configure GitHub token etc.
npm run build                 # build Docusaurus
pm2 start ecosystem.config.cjs
pm2 save

# On VPS — subsequent deploys:
git pull
npm install                   # in case deps changed
npm run build                 # rebuild static site
pm2 restart anychart-docs
```

This can be scripted into a single `deploy.sh` or triggered by a webhook / CI pipeline.

---

## What Does NOT Change

- **`docs/` directory** — stays as-is, still the source of truth for markdown
- **`static/edit/index.html`** — stays as standalone page, Docusaurus copies it to `build/edit/`
- **`src/theme/EditThisPage/`** — stays as-is
- **`server/index.mjs` API logic** — rate limiting, GitHub PR flow, content reading all stay the same
- **`scripts/prepare-samples.mjs`** — still copies samples at build time
- **Docusaurus config** — no changes needed

---

## File Structure After Implementation

```
docs.anychart.com/
  package.json              ← workspaces: ["server"], unified scripts
  ecosystem.config.cjs      ← PM2 config
  .env                      ← moved here from server/ (gitignored)
  .env.example              ← template for setup reference
  docusaurus.config.ts
  docs/                     ← 421 markdown pages
  server/
    package.json            ← dependencies only (scripts removed)
    index.mjs               ← API routes + static file serving
  src/
    components/
    css/
    theme/
      EditThisPage/
  static/
    edit/index.html
  build/                    ← generated (gitignored)
```

---

## Not Needed

- **Docker** — single Node process on VPS, PM2 handles restarts. Docker adds complexity without benefit here.
- **Separate repos** — server reads from `docs/`, tightly coupled by design.
- **API gateway / load balancer** — single server, single process, nginx is sufficient.
- **Database** — rate limiting is in-memory. For production hardening, could add Redis later if abuse becomes an issue, but not required initially.
