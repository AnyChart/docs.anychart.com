# Community Doc Editing — Architecture Research

> **Date:** 2026-02-19
> **Status:** Research complete, awaiting decision
> **Constraints:** VPS hosting, Kinde auth (added later), lightweight rich editor, ~421 doc pages

---

## TL;DR — Recommended Architecture

**Custom lightweight editor at `/edit`** with a Node.js backend on the VPS that creates GitHub PRs via a bot token. No contributor auth required initially — Kinde added later. Rich markdown editor using **Milkdown** (WYSIWYG) or **Toast UI Editor** (dual-mode). Admins review PRs in GitHub.

This gives you: zero friction for contributors (no GitHub account needed), full GitHub review workflow for admins, and a clean upgrade path to Kinde auth.

---

## 1. Your Constraints (from discussion)

| Constraint | Value |
|---|---|
| Hosting | VPS — can run any backend |
| Auth (now) | None — anyone can submit |
| Auth (later) | Kinde — tie in after core flow works |
| Editor | Lightweight rich text, existing library |
| Review | GitHub PRs preferred (used in old version) |
| Framework | Svelte acceptable, or no framework if slim enough |
| Scale | ~421 markdown pages, 41 categories |

---

## 2. Approaches Evaluated

### 2a. Decap CMS / Sveltia CMS (git-based headless CMS)

A single-page app deployed at `/admin/` that reads/writes files via GitHub API.

| Aspect | Details |
|---|---|
| WYSIWYG | Partial (widget-based, not true rich text) |
| Auth | GitHub OAuth required (needs OAuth proxy) |
| Review | Editorial workflow creates branches + PRs |
| Server needed | OAuth proxy only |
| Implementation | 1-2 days |
| Maintenance | Medium — `config.yml` must match directory structure |

**Why not ideal for us:** Requires all contributors to have GitHub accounts. Decap is effectively unmaintained (Sveltia CMS is the successor but still in beta). config.yml must define every collection — 41 categories is verbose. Custom `{sample}`, `{api:}` directives won't render in the CMS preview.

### 2b. TinaCMS

Git-backed visual editing. Self-hosted requires MongoDB + auth + API server, or use Tina Cloud ($29+/mo).

**Why not:** Too much infrastructure for our use case. Docusaurus integration (Tinasaurus) is sparsely maintained. Poor story for anonymous/community contributions. Custom preprocessor directives won't work in the visual editor.

### 2c. GitHub's Built-in Editor (github.dev)

Changing `editUrl` to `github.dev` gives contributors a full VS Code in the browser with automatic fork+PR.

**Why not sufficient alone:** Requires GitHub account. No custom branding or guided experience. Contributors see raw repo structure, not a focused editor. No path to Kinde auth.

### 2d. SaaS options (Dhub, Holocron, Spinal)

Hosted services that add WYSIWYG editing to Docusaurus.

**Why not:** Vendor lock-in. Recurring costs ($16-50/mo). Limited control. Custom directives render as code blocks. Unclear longevity.

### 2e. Custom Lightweight Editor (RECOMMENDED)

Build a focused editing experience at `/edit` backed by a small Node.js API on the VPS.

| Aspect | Details |
|---|---|
| WYSIWYG | Yes — Milkdown or Toast UI Editor |
| Auth | None initially, Kinde later |
| Review | GitHub PRs via bot token |
| Server needed | Yes — small Express/Fastify API on VPS |
| Implementation | 3-5 days |
| Maintenance | Very low — no database, no CMS schema |

**Why this wins:** Contributors don't need GitHub accounts. Zero auth friction now. Clean Kinde upgrade path. Full control over UX. Bot token handles all GitHub operations server-side. Admins use familiar GitHub PR review.

---

## 3. Recommended Architecture (Detail)

### Overview

```
User clicks "Suggest Changes" on any doc page
          |
          v
   /edit?path=docs/basic-charts/line-chart.md
          |
          v
  +-----------------------+
  | Rich Markdown Editor  |  (Milkdown / Toast UI)
  | - loads current .md   |
  | - WYSIWYG editing     |
  | - optional: preview   |
  +-----------------------+
          |
    "Submit for Review"
          |
          v
  +-----------------------+
  | Backend API (Node.js) |
  | POST /api/suggest     |
  | - receives edited md  |
  | - creates GitHub PR   |
  |   via bot token       |
  +-----------------------+
          |
          v
  GitHub PR on AnyChart/docs.anychart.com
  (admins review, approve/reject, merge)
```

### 3.1 Frontend — The Editor Page

**Route:** `/edit` (or `/app` as you originally suggested)

**Query params:**
- `path` — relative path to the .md file (e.g., `docs/basic-charts/line-chart.md`)

**Flow:**
1. Page loads, fetches raw .md content from the backend (which reads it from GitHub API or local filesystem on VPS)
2. Editor initializes with the content
3. User edits in WYSIWYG mode
4. User fills in name/email (optional now, required with Kinde later) and a short description of the change
5. User clicks "Submit for Review"
6. Frontend sends `{ path, content, description, author }` to `POST /api/suggest`
7. Shows confirmation: "Your suggestion has been submitted for review"

**Build options:**
- **Option A — Svelte SPA:** Small Svelte app (Vite-built), served at `/edit`. Familiar to you. ~5-10KB bundle + editor library.
- **Option B — Vanilla JS:** No framework. Load editor from CDN, wire up with fetch(). Even slimmer. ~200 lines of HTML/JS.
- **Option C — Docusaurus page:** Create a React page within Docusaurus itself at `/edit`. Pro: same build pipeline. Con: heavier, React dependency for a simple form.

**Recommendation:** Option A (Svelte) or Option B (Vanilla) — both are fine. Svelte gives you component structure for when you add Kinde auth. Vanilla is faster to prototype.

### 3.2 Backend — Node.js API

**Runs on:** Same VPS as the Docusaurus static build (behind Nginx or similar).

**Endpoints:**

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/content` | GET | Fetch current .md file content. Params: `?path=docs/...` |
| `/api/suggest` | POST | Submit an edit. Body: `{ path, content, description, author? }` |

**`GET /api/content`** implementation:
- Read from local filesystem (the VPS has the repo checked out) — fastest
- OR fetch from GitHub API `GET /repos/AnyChart/docs.anychart.com/contents/{path}` — always up-to-date
- Recommendation: local filesystem with a git pull cron, falling back to GitHub API

**`POST /api/suggest`** implementation:
- Uses [Octokit](https://github.com/octokit/octokit.js) with a GitHub bot token (Personal Access Token or GitHub App installation token)
- Creates a branch: `community/edit-{timestamp}-{slug}`
- Commits the edited file to the branch
- Opens a PR from that branch to `develop` (or your main branch)
- PR title: `Docs: {description}` (from user input)
- PR body: contributor name/email (if provided), diff summary
- Returns the PR URL to the frontend

**Bot token approach — why this is key:**
- A single bot token (stored as env var on VPS) creates all PRs
- Contributors never interact with GitHub directly
- No OAuth dance, no GitHub accounts required
- When Kinde is added, contributor identity goes into the PR metadata
- The bot token needs only `repo` scope (or finer: `contents` + `pull_requests`)

**Rate limiting / spam protection (even without auth):**
- Rate limit by IP: max 5 submissions per hour
- Require a minimum diff (reject if nothing changed)
- Optional: simple honeypot field or CAPTCHA
- Later: Kinde auth eliminates spam concern

### 3.3 The "Suggest Changes" Button

Add a button to every doc page. Docusaurus already has `editUrl` which generates "Edit this page" links. Options:

**Option A — Keep both buttons:**
- "Edit on GitHub" → current `editUrl` behavior (for devs who prefer GitHub)
- "Suggest Changes" → your new `/edit?path=...` route (for everyone else)

**Option B — Replace the edit button:**
- Swizzle the `EditThisPage` component
- Point it to `/edit?path=...` instead of GitHub

**Recommendation:** Option A — keep both. The GitHub link is useful for power users and costs nothing.

### 3.4 Review Workflow

PRs created by the bot land in the normal GitHub PR list. Admins can:
- See the diff (what changed in the .md file)
- Comment, request changes, or approve
- Merge → triggers rebuild/redeploy
- Close without merging → reject

**Enhancements (can add later):**
- GitHub Actions to auto-build preview of the PR (Docusaurus preview deployments)
- Label PRs as `community-edit` for filtering
- Notify admins via Slack/email when new PRs arrive
- Auto-assign reviewers via CODEOWNERS

### 3.5 Auth Upgrade Path (Kinde)

When ready to add Kinde:

1. Add Kinde SDK to the editor frontend
2. Before showing the editor, check auth state
3. If not logged in → redirect to Kinde login → redirect back
4. Authenticated user's name/email auto-populated in submission
5. Backend validates the Kinde JWT on `POST /api/suggest`
6. PR metadata includes verified contributor identity

This is a clean addition — the core flow doesn't change, you just gate access.

---

## 4. Editor Library Comparison

| Library | Size | Type | Markdown output | Framework | Notes |
|---|---|---|---|---|---|
| **Milkdown** | ~150KB | WYSIWYG (ProseMirror) | Clean markdown | Agnostic (Svelte, React, Vue, vanilla) | Purpose-built for markdown WYSIWYG. Plugin system. Active. |
| **Toast UI Editor** | ~200KB | Dual (WYSIWYG + markdown) | Clean markdown | Agnostic (wrappers for React, Vue) | Mature, well-documented. Users can switch between modes. |
| **ByteMD** | ~150KB | Markdown + preview split | Raw markdown | Svelte-native | Built by ByteDance. Svelte-first. Plugin system. |
| **TipTap** | ~200KB | WYSIWYG (ProseMirror) | Needs markdown extension | Agnostic | Very popular but more general-purpose. Markdown is an add-on, not native. |
| **CodeMirror 6** | ~150KB | Code editor | Raw markdown | Agnostic | Best-in-class code editor. No WYSIWYG — just syntax-highlighted markdown. |

### Recommendation: **Milkdown** or **Toast UI Editor**

- **Milkdown** if you want pure WYSIWYG markdown editing (users never see raw markdown unless they want to). Has Svelte bindings. Lightweight. Modern.
- **Toast UI Editor** if you want dual-mode (toggle between WYSIWYG and raw markdown). More mature. Larger community. Better documentation.

Both output clean markdown that round-trips perfectly with your existing .md files.

**Note on AnyChart custom directives:** `{sample}`, `{api:}`, `{pg:}` syntax will appear as literal text in the editor. This is fine — contributors editing content will rarely touch these directives. For a v2, you could add custom editor plugins to render them as special blocks.

---

## 5. Implementation Estimate

| Phase | Scope | Time |
|---|---|---|
| 1 — MVP | Editor page + backend API + "Suggest Changes" button. No auth. | 3-4 days |
| 2 — Polish | Rate limiting, honeypot spam protection, PR labels, success/error UX | 1-2 days |
| 3 — Kinde Auth | Add Kinde login gate, JWT validation on backend | 1-2 days |
| 4 — Admin Enhancements | Preview deployments, Slack notifications, auto-assign reviewers | 1-2 days |

**Phase 1 deliverables:**
- `/edit` page with rich markdown editor (Milkdown or Toast UI)
- `POST /api/suggest` endpoint creating GitHub PRs
- `GET /api/content` endpoint fetching .md content
- "Suggest Changes" button on every doc page
- Basic validation (non-empty diff, path exists)

---

## 6. File Structure (Proposed)

```
docs.anychart.com/
  app/                        # Editor SPA (Svelte or vanilla)
    src/
      App.svelte              # Main editor component
      lib/
        editor.js             # Editor initialization (Milkdown/Toast UI)
    index.html                # Entry point
    vite.config.js            # Build config
  server/                     # Backend API
    index.js                  # Express/Fastify server
    routes/
      content.js              # GET /api/content
      suggest.js              # POST /api/suggest
    lib/
      github.js               # Octokit wrapper for PR creation
  static/
    edit/                     # Built editor SPA output (served by Docusaurus)
      index.html
      assets/
```

**Alternative (simpler):** If going vanilla JS, the entire editor can be a single `static/edit/index.html` file (~300 lines) + the backend API.

---

## 7. What Other Doc Sites Do

Every major documentation project (MDN, React, Rust, Kubernetes, Vue, Angular, Svelte) uses the **GitHub fork+PR workflow** with an "Edit this page" link. None use a CMS for community contributions.

**MDN** previously tried a wiki-style inline editor and abandoned it in favor of GitHub PRs for quality control.

Our approach adds a layer on top of this proven pattern — making it more accessible by removing the GitHub account requirement and providing a nicer editor experience. The underlying mechanism (PRs on the repo) is the same battle-tested flow.

---

## 8. Decision Points

Before implementation, decide:

1. **Editor library:** Milkdown (WYSIWYG-only) vs Toast UI (dual-mode) vs ByteMD (Svelte-native split view)?
2. **Frontend approach:** Svelte SPA vs Vanilla JS?
3. **Both buttons or replace?** Keep "Edit on GitHub" alongside "Suggest Changes", or replace it?
4. **Bot token:** Create a dedicated GitHub bot account, or use an existing admin's PAT?
5. **PR target branch:** `develop` or a dedicated `community-edits` branch?
