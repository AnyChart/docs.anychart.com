# Branch-Based Documentation Versioning — Architecture Design

**Date:** 2026-02-25
**Status:** Draft — pending approval
**OCD:** OCD-001

---

## Problem Statement

When AnyChart develops a feature (tracked as a DVF-XXXX Jira ticket), documentation for that feature needs to be written and previewed before the release. The historical system used synchronized branches across repos + a Clojure-based staging server. That workflow is largely abandoned. We need a modern replacement using Docusaurus + GitHub Actions + the existing VPS.

## Requirements

1. **Branch-specific docs**: Push to a `DVF-*` branch in the docs repo → that branch's docs are built and deployed
2. **URL scheme**: Main docs at `/Quick_Start`, branch at `/DVF-5000/Quick_Start`
3. **CDN coupling**: Branch docs use the matching CDN library build (`cdn.anychart.com/releases/DVF-5000/...`)
4. **Full site per branch**: Complete navigable docs, not just changed pages
5. **Subtle version indicator**: Available but not prominent
6. **Manual cleanup**: Branch versions persist until explicitly removed
7. **Zero production impact**: Main docs completely untouched by branch operations
8. **Extendable to api.anychart.com**: Same pattern should work for API reference later

## Chosen Approach: Multi-Deployment with Different `baseUrl`

Each branch is an independent Docusaurus build with modified `baseUrl` and `ANYCHART_VERSION` environment variables. Builds are deployed to isolated subdirectories on the VPS. Nginx routes requests by path prefix.

### Why This Over Alternatives

| Alternative | Why rejected |
|-------------|-------------|
| Docusaurus built-in versioning | `routeBasePath: '/'` has known bugs (#4967, #9688); single `ANYCHART_VERSION` for all versions means samples/CDN links are wrong |
| Multi-instance plugin | Requires config changes per branch; single preprocessor pass; conflicts with docs-only mode |
| Spectro Cloud branch-orchestrator | Fragile shell scripts; same single-build limitations; designed for permanent semver, not transient branches |

## Architecture

### Build Flow

```
Developer pushes to DVF-5000 branch
       ↓
GitHub Actions triggers (deploy-branch.yml)
       ↓
npm ci → ANYCHART_VERSION=DVF-5000 BASE_URL=/DVF-5000/ npm run build
       ↓
rsync build/ → VPS:/var/www/docs/DVF-5000/ (atomic swap)
       ↓
Update manifest.json on VPS
       ↓
Available at docs.anychart.com/DVF-5000/Quick_Start
```

### VPS Directory Structure

```
/var/www/docs/
├── root/                   # Production site (baseUrl: '/')
│   ├── index.html
│   ├── Quick_Start/
│   ├── assets/
│   ├── samples/
│   └── ...
├── DVF-5000/               # Branch version (baseUrl: '/DVF-5000/')
│   ├── index.html
│   ├── Quick_Start/
│   ├── assets/
│   ├── samples/
│   └── ...
├── manifest.json           # Tracks deployed branches
└── manifest.json.lock      # flock concurrency lock
```

### Nginx Routing

```nginx
# Branch versions — prefix match, higher priority than /
location ^~ /DVF- {
    root /var/www/docs;
    try_files $uri $uri/index.html =404;
}

# Manifest endpoint
location = /manifest.json {
    alias /var/www/docs/manifest.json;
    add_header Content-Type application/json;
    add_header Cache-Control "no-cache";
}

# Production site at /
location / {
    root /var/www/docs/root;
    try_files $uri $uri/index.html $uri.html /index.html;
}
```

### GitHub Actions Workflows

**3 separate workflow files:**

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `deploy-branch.yml` | push to `DVF-*` | Build + deploy branch version |
| `deploy-production.yml` | push to main/develop | Build + deploy root site |
| `cleanup-branch.yml` | manual dispatch + optional schedule | Remove branch version |

### Manifest Schema

```json
{
  "versions": {
    "DVF-5000": {
      "deployed_at": "2026-02-25T14:30:00Z",
      "commit": "abc123",
      "url": "/DVF-5000/"
    }
  },
  "production": {
    "branch": "develop",
    "deployed_at": "2026-02-25T12:00:00Z",
    "commit": "def456"
  }
}
```

## Code Changes Required

### 1. `docusaurus.config.ts` — Make `baseUrl` configurable

```ts
const BASE_URL = process.env.BASE_URL || '/';
// ...
baseUrl: BASE_URL,
```

### 2. Preprocessor — Prefix sample paths with `BASE_URL`

Current (line ~48):
```ts
const src = `/samples/${cleanName}.html`;
```

Updated:
```ts
const src = `${BASE_URL}samples/${cleanName}.html`;
```

### 3. Add `customFields` for branch detection

```ts
customFields: {
  branchVersion: ANYCHART_VERSION,
  isMainBuild: BASE_URL === '/',
},
```

### 4. Version indicator component

When `isMainBuild` is false, show a subtle top banner:
> "Preview: DVF-5000 documentation. [View stable docs →](https://docs.anychart.com/)"

### 5. `editUrl` per branch

```ts
editUrl: `https://github.com/AnyChart/docs.anychart.com/edit/${process.env.GITHUB_REF_NAME || 'develop'}/`,
```

## Security

- Dedicated Ed25519 SSH key for deployments
- Key stored as GitHub secret (`DEPLOY_SSH_KEY`)
- Known hosts verified (`DEPLOY_SSH_KNOWN_HOSTS`)
- Restricted shell on VPS allowing only rsync + specific commands
- Branch deploy validates `DVF-` prefix before any file operations
- Production and branch workflows use separate GitHub Environments (production requires approval)

## Disk & Performance

- Each branch build: ~50-100MB (full site with samples)
- 5 concurrent branches: ~500MB — trivial for a VPS
- Build time per branch: 2-5 minutes
- Only the pushed branch rebuilds — no impact on other branches or production

## Open Questions (for implementation)

1. **VPS access details** — SSH host, user, path needed for GitHub Actions secrets
2. **Branch naming convention** — strict `DVF-NNNN` or allow `DVF-NNNN-description`?
3. **CDN build timing** — is the CDN branch build guaranteed to exist when docs build deploys?
4. **Express server involvement** — should branch versions go through Express, or nginx only?
5. **Concurrent branch limit** — any practical limit on how many branch versions to support?

## Extension to api.anychart.com

Same pattern applies:
- Build API reference with `BASE_URL=/DVF-5000/` and matching `ANYCHART_VERSION`
- Deploy to parallel directory on api.anychart.com VPS
- Reuse nginx config pattern and manifest approach
- Separate GitHub Actions workflows in the api repo

---

*Pending user approval before implementation.*
