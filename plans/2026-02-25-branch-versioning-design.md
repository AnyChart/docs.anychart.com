# Documentation Versioning — Architecture Design (v3)

**Date:** 2026-02-25
**Status:** Approved — implementing Docker containers
**OCD:** OCD-001 → OCD-002
**Evolution:** v1 (multi-branch) → v2 (two-tier) → v3 (Docker containerized)

---

## Problem Statement

When AnyChart develops features (tracked as DVF-XXXX Jira tickets), documentation changes need to be written, previewed, and reviewed before release. The historical system used synchronized branches + a Clojure-based staging server (`docs.anychart.stg`). That workflow is largely abandoned. We need a modern replacement.

## Architecture: One Dockerfile, Many Containers

**Core principle:** The docs app is a single codebase. Behavior changes via environment variables, not different codebases. Any branch can be built into a container.

```
One Dockerfile → builds any branch into a container

Production container:  branch=v8,       IS_STAGING=false  → docs.anychart.com
Staging container:     branch=develop,   IS_STAGING=true   → docs.anychart.stg
DVF-5001 container:    branch=DVF-5001,  IS_STAGING=true   → localhost:3001
DVF-5002 container:    branch=DVF-5002,  IS_STAGING=true   → localhost:3002
```

### Three-Layer Model

| Layer | URL | Branch | Access | Purpose |
|-------|-----|--------|--------|---------|
| **Production** | `docs.anychart.com/` | `v8` (or `main`) | Public | Current major version |
| **Staging** | `docs.anychart.stg` | `develop` (or `staging`) | Auth-gated (hosts file + GitHub OAuth) | Release preparation with diff highlighting |
| **Version archives** | `docs.anychart.com/v7/`, `/v8/`, etc. | Tagged snapshots | Public | Major release archives only |

### Versioning Roadmap

| Version | Strategy |
|---------|----------|
| **v7** | Frozen archive at `/v7/` (already live) |
| **v8** | Current production at `/`. Will become frozen archive at `/v8/` when v9 launches |
| **v9+** | New era — per-minor-version switching (9.0.0, 9.1.0, 9.5.0, etc.) with a version dropdown |

## Docker Architecture

### Dockerfile (Multi-Stage Build)

```
Stage 1 — "builder":
  FROM node:20-alpine
  COPY package*.json → npm ci
  COPY source code
  ARG ANYCHART_VERSION, IS_STAGING
  npm run build → produces /app/build/

Stage 2 — "runtime":
  FROM nginx:alpine
  COPY --from=builder /app/build/ → /usr/share/nginx/html/
  COPY nginx.conf
  EXPOSE 80
```

Two stages: Node builds the static site, nginx serves it. Final image is tiny (~50-100MB) with no Node.js runtime, no node_modules, no source code — just static files + nginx.

### docker-compose Setup

```yaml
# docker-compose.yml — runs 3 containers simultaneously
services:
  production:
    build:
      args:
        ANYCHART_VERSION: "8.14.1"
        IS_STAGING: "false"
    ports: ["8080:80"]

  staging:
    build:
      args:
        ANYCHART_VERSION: "8.14.1"
        IS_STAGING: "true"
    ports: ["8081:80"]

  preview:
    build:
      args:
        ANYCHART_VERSION: "DVF-5001"
        IS_STAGING: "true"
    ports: ["8082:80"]
```

Run with `docker compose up` → three sites on ports 8080, 8081, 8082.

### Environment Variables (Build-Time)

| Variable | Production | Staging | DVF Preview |
|----------|-----------|---------|-------------|
| `ANYCHART_VERSION` | `8.14.1` | `8.14.1` | `DVF-5001` |
| `IS_STAGING` | `false` | `true` | `true` |
| `SITE_URL` | `https://docs.anychart.com` | `https://docs.anychart.stg` | (localhost) |

### What Changes Per Environment

The same app, but:

| Feature | Production | Staging / DVF Preview |
|---------|-----------|----------------------|
| Read documentation | Everyone | Auth-gated |
| Search | Everyone | Auth-gated users |
| Suggest changes (edit) | Logged-in users | Team members |
| Diff highlights | Hidden | Visible |
| Admin panel | Hidden | Visible |
| Staging banner | Hidden | Visible |

Features are gated by `IS_STAGING` env var at build time and by auth at runtime.

## Release Flow

```
1) DVF-5000 done → docs merged to develop
   DVF-5001 done → docs merged to develop
   (more features in progress...)

2) Staging (built from develop) shows:
   - All current docs + diff highlights for what changed
   - Team reviews, continues writing for remaining features

3) All features done → develop complete
   → Merge develop → v8/main
   → Production container rebuilds

4) Production = staging content (minus staging-only UI)
```

## Cross-Repo Automation

When someone pushes a `DVF-*` branch to **AnyChart/AnyChart** (the library repo):

```
Push DVF-5000 to AnyChart/AnyChart
  → GitHub Actions creates DVF-5000 branch in docs.anychart.com (from develop)
  → Docs writers edit DVF-5000 docs branch
  → Optionally spin up a DVF-5000 preview container
  → When ready, merge DVF-5000 into develop
  → Staging container rebuilds automatically
```

## Diff Highlighting System (Future)

Build-time diff annotation:

1. Script diffs markdown source between staging branch and production branch
2. Changed sections annotated with DVF ticket attribution (via git blame)
3. Outputs `diff-manifest.json`
4. React component renders inline highlights on staging

Implementation approach: **Wrapper component** — build-time script generates JSON manifest, React component highlights at render time.

## GitHub Actions Workflows

| Workflow | Trigger | Action |
|----------|---------|--------|
| `deploy-production.yml` | push to `v8`/`main` | Build Docker image, deploy to production server |
| `deploy-staging.yml` | push to `develop` | Build Docker image, deploy to staging server |
| `create-docs-branch.yml` | In AnyChart/AnyChart, push to `DVF-*` | Creates matching branch in docs repo |

Workflows build Docker images and deploy them — no raw rsync. The container IS the deployment artifact.

## Security

### Network Level
- `docs.anychart.stg` accessible only via hosts file (IP: 104.236.66.244)
- No public DNS for staging domain
- DVF preview containers run on staging server, same network restriction

### Application Level
- GitHub OAuth gates staging features (AnyChart org / whitelist)
- Production has no auth on static pages
- Edit flow requires GitHub login on both environments

### CI/CD Level
- GitHub Actions contained to `gogin-AI-refactor` branch during development
- GitHub Environments: `production` (requires approval), `staging` (auto-deploy)
- Docker images built in CI, pushed to registry, deployed via SSH

## Open Questions

1. **Staging server (`104.236.66.244`)** — still available? Can we install Docker there?
2. **Docker registry** — GitHub Container Registry (ghcr.io) or Docker Hub?
3. **Staging branch strategy** — use `develop` as staging, or dedicated `staging` branch?
4. **CDN version on staging** — release-candidate CDN build, or latest stable?
5. **Diff granularity** — page level (simpler) or paragraph/line level (richer)?

## Extension to api.anychart.com

Same pattern:
- `api.anychart.com` — production container
- `api.anychart.stg` — staging container
- Same Dockerfile approach, different codebase
- Same OAuth gating

---

*v3 approved. Docker implementation in progress (OCD-002).*
