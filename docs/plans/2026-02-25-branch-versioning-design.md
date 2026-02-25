# Documentation Versioning — Architecture Design (v2)

**Date:** 2026-02-25
**Status:** Draft — pending approval
**OCD:** OCD-001
**Supersedes:** v1 (multi-branch deployment) — replaced after design review

---

## Problem Statement

When AnyChart develops features (tracked as DVF-XXXX Jira tickets), documentation changes need to be written, previewed, and reviewed before release. The historical system used synchronized branches + a Clojure-based staging server (`docs.anychart.stg`). That workflow is largely abandoned. We need a modern replacement.

## Design Evolution

**v1 (rejected):** Deploy N separate branch versions at `docs.anychart.com/DVF-XXXX/`. Problems: each branch is a full ~100MB build, HTML has baked-in `baseUrl` so you can't mix pages across versions, complexity scales with branch count.

**v2 (current):** Two-tier model — production + staging. One staging branch aggregates all in-progress DVF changes. Diff highlighting shows what changed vs production. Much simpler.

## Architecture: Three-Layer Model

| Layer | URL | Branch | Access | Purpose |
|-------|-----|--------|--------|---------|
| **Production** | `docs.anychart.com/` | `v8` (or `main`) | Public | Current major version |
| **Staging** | `docs.anychart.stg` | `develop` (or `staging`) | Auth-gated (GitHub OAuth, AnyChart org/whitelist) | Release preparation — aggregated DVF changes with diff highlighting |
| **Version archives** | `docs.anychart.com/v7/`, `/v8/`, etc. | Tagged snapshots | Public | Major release archives only (not patches/hotfixes) |

### Version Archives

Only **major releases** get archived (v7, v8, v9 — not 8.14.1 vs 8.14.0). When a new major version launches:

1. Snapshot current production docs as `/vN/` archive (one-time build with `baseUrl: '/vN/'`)
2. Deploy new major version to root `/`
3. Add version switcher link (e.g., "Looking for v7 docs?")

This already works in production — `docs.anychart.com/v7/` serves the frozen v7 documentation today. The pattern is proven.

### Versioning Roadmap

| Version | Strategy |
|---------|----------|
| **v7** | Frozen archive at `/v7/` (already live) |
| **v8** | Current production at `/`. Will become frozen archive at `/v8/` when v9 launches |
| **v9+** | New era — per-minor-version switching (9.0.0, 9.1.0, 9.5.0, etc.) with a version dropdown |

v9 is the clean break. Since the Docusaurus setup will be mature by then, v9 can use proper versioning from day one — either Docusaurus built-in (`docs:version`) or the multi-build approach, decided closer to the v9 launch. v7 and v8 remain simple frozen snapshots with no minor-version switching.

### Flow

```
DVF-5000 docs branch (timeline chart)     ─┐
DVF-5001 docs branch (license overhaul)    ─┤── merged into → staging branch
DVF-5002 docs branch (custom drawing fix)  ─┘
                                                    ↓
                                           GitHub Actions builds
                                                    ↓
                                           Deployed to docs.anychart.stg
                                                    ↓
                                           Team reviews with diff highlighting
                                           "This paragraph is new (DVF-5000)"
                                           "This section changed (DVF-5001)"
                                                    ↓
                                           Approved → merge staging → production
                                                    ↓
                                           Deployed to docs.anychart.com
```

### Key Properties

1. **Two deployments, not N** — production and staging, that's it
2. **Staging is the release preparation environment** — all DVF work lands here
3. **Diff highlighting** — staging visually shows what changed vs production and which ticket introduced each change
4. **Auth-gated staging** — GitHub OAuth, restricted to AnyChart org or whitelist
5. **Edit flow is branch-aware** — "Suggest Change" on staging targets the staging branch; editor shows which branch you're editing
6. **Same `baseUrl: '/'` for both** — no path prefix tricks, staging is a separate domain
7. **Extendable to api.anychart.com** / `api.anychart.stg` later

## Cross-Repo Automation

When someone pushes a `DVF-*` branch to **AnyChart/AnyChart** (the library repo), automatically create a matching branch in **docs.anychart.com**:

```
Push DVF-5000 to AnyChart/AnyChart
  → GitHub Actions in AnyChart repo triggers
  → Creates DVF-5000 branch in docs.anychart.com (from develop)
  → Docs writers start editing DVF-5000 docs branch
  → When ready, DVF-5000 merged into staging branch
  → Staging rebuilds automatically
```

This uses a cross-repo GitHub Actions workflow with a PAT or GitHub App token.

## Diff Highlighting System

The core feature of staging — showing what changed vs production.

### Approach: Build-Time Diff Annotation

1. At build time (GitHub Actions), the workflow checks out both the staging branch and the production branch
2. A script diffs the markdown source files between the two branches
3. Changed sections are annotated with metadata: which lines changed, which DVF ticket (from git blame/log)
4. The Docusaurus build includes a custom component that renders these annotations as visual highlights

### Visual Design (conceptual)

```
┌─────────────────────────────────────────────────┐
│ ⚠ STAGING — Release preparation                │
│ 3 tickets included: DVF-5000, DVF-5001, DVF-5002│
│ 12 pages changed, 3 pages new                   │
└─────────────────────────────────────────────────┘

## Timeline Chart                          ← page content

The Timeline chart is a new chart type     │ NEW (DVF-5000)
that displays events along a time axis.    │
                                           │

To create a timeline chart, use the        │ CHANGED (DVF-5000)
`anychart.timeline()` constructor:         │
```

### Implementation Options (to be decided)

| Option | How | Complexity |
|--------|-----|-----------|
| **A: Remark plugin** | Custom remark plugin injects diff markers into MDX at build time | Medium |
| **B: Wrapper component** | Build-time script generates a JSON diff manifest; React component highlights at render time | Medium |
| **C: CSS-only overlay** | Generate a separate CSS file that highlights changed sections by line range | Low but fragile |
| **D: Git-powered sidebar** | No inline highlighting; instead, a sidebar panel lists all changed files/sections with links | Low |

Recommended: **Option B** — most flexible, cleanest separation of concerns.

## GitHub Actions Workflows

**2 workflows (not 3 — simplified from v1):**

| Workflow | Trigger | Target |
|----------|---------|--------|
| `deploy-production.yml` | push to `v8`/`main` | `docs.anychart.com` |
| `deploy-staging.yml` | push to `develop`/`staging` | `docs.anychart.stg` |

Both do the same thing: `npm ci → npm run build → rsync to VPS`. The staging workflow additionally runs the diff annotation step.

Optional:
| `create-docs-branch.yml` | In AnyChart/AnyChart repo, on push to `DVF-*` | Creates matching branch in docs repo |

## Code Changes Required

### 1. `docusaurus.config.ts` — `ANYCHART_VERSION` from env (already exists)

```ts
const ANYCHART_VERSION = process.env.ANYCHART_VERSION || '8.14.1';
```

No `BASE_URL` change needed — both production and staging use `baseUrl: '/'`.

### 2. Staging detection via `customFields`

```ts
customFields: {
  isStaging: process.env.IS_STAGING === 'true',
  branchVersion: ANYCHART_VERSION,
},
```

### 3. Staging banner component

When `isStaging` is true, render a top banner showing:
- "STAGING — Release preparation"
- List of included DVF tickets
- Count of changed/new pages

### 4. Auth middleware for staging

The existing Express server already has GitHub OAuth. For staging:
- Check if authenticated user is in AnyChart GitHub org (or whitelist)
- If not, show login prompt
- Production site has no auth

### 5. Edit flow branch awareness

- On staging, "Suggest Change" targets the staging branch
- Editor shows "You are editing the staging branch"
- On production, "Suggest Change" targets `develop` (current behavior)

### 6. Diff annotation build step

A Node.js script that:
1. Runs `git diff production-branch..staging-branch -- docs/`
2. Parses the diff to identify changed files and line ranges
3. Uses `git log` to attribute changes to DVF tickets
4. Outputs a `diff-manifest.json` consumed by the staging banner and highlight components

## Security

- GitHub OAuth gates staging access (AnyChart org or whitelist)
- Production has no auth changes
- SSH deployment keys for GitHub Actions (Ed25519, per-environment)
- GitHub Environments: `production` (requires approval), `staging` (auto-deploy)

## Open Questions

1. **Staging server** — is `104.236.66.244` still available? Does it need new setup or can we reuse it?
2. **Staging branch strategy** — use `develop` as staging, or create a dedicated `staging` branch?
3. **CDN version on staging** — should staging use the release-candidate CDN build, or latest stable?
4. **Diff granularity** — highlight at page level (simpler) or paragraph/line level (richer)?
5. **VPS SSH access** — credentials needed for GitHub Actions deployment secrets

## Extension to api.anychart.com

Same two-tier model:
- `api.anychart.com` — production
- `api.anychart.stg` — staging with diff highlighting
- Separate GitHub Actions workflows in the API reference repo
- Same OAuth gating

---

*Pending user approval before implementation.*
