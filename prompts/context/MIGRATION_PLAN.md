# docs.anychart.com Migration Plan: Move to Docusaurus

> **Decision date:** 2026-02-18
> **Status:** PROPOSAL — awaiting approval
> **Branch:** `gogin-AI-refactor`

---

## 1. Why Docusaurus (and Why Not the Others)

### The Decision

**Docusaurus 3.x** is the recommended framework for migrating docs.anychart.com.

### Comparison Matrix

| Requirement | Docusaurus 3.9 | VitePress 1.6 | Astro Starlight 0.37 |
|---|---|---|---|
| **Doc versioning** | Native, first-class | Community plugin only | Community plugin (early stage) |
| **Maturity** | v3.9.2, stable | v1.6.4, stable (v2 alpha) | v0.37.6, **pre-1.0** |
| **Backed by** | Meta (Facebook) | Vue.js core team | Astro team |
| **Plugin ecosystem** | 75+ plugins | ~30 plugins | ~30 plugins |
| **Custom markdown** | Remark/rehype (MDX v3) | markdown-it | Remark/rehype |
| **Components in MD** | React (MDX) | Vue (SFC) | Any framework (MDX) |
| **Search** | Algolia + local plugins | MiniSearch + Algolia | Pagefind (built-in) |
| **Build 300+ pages** | 1-5 min (Rspack: 2-4x faster) | 1-3 min | 30-90 sec |
| **Template vars** | Plugin available | .env + Vue globals | .env + Astro env |
| **Sidebar auto-gen** | Yes, native | Plugin needed | Yes, native |

### Why NOT VitePress
- **No native versioning** — depends on community plugins for a critical feature
- **Smaller ecosystem** — fewer ready-made solutions for edge cases
- **Vue lock-in** — requires Vue knowledge for all customization
- **v2 is alpha** — building on v1 knowing major breaking changes are coming

### Why NOT Astro Starlight
- **Pre-1.0** — breaking changes between minor versions are expected
- **No native versioning** — community plugin is "early development"
- **Smaller community** — fewer people have solved similar migration problems
- **Risk** — betting on a framework that hasn't reached 1.0 for a production docs site

### Why Docusaurus Wins
1. **Native versioning** — battle-tested, used by React, Jest, Babel, and hundreds of major OSS projects
2. **Largest ecosystem** — 75+ plugins, when you hit a problem there's likely a solution
3. **MDX global components** — custom directives can be implemented as globally-registered React components (no imports per file)
4. **`docusaurus-plugin-includes`** — drop-in solution for `{{branch-name}}` template variables
5. **`{:index}` maps directly to `sidebar_position`** — Docusaurus frontmatter
6. **Meta-backed** — active maintenance, stable API, clear migration paths between versions
7. **Rspack support** — opt-in 2-4x faster builds if needed
8. **Algolia DocSearch** — free for OSS, with new AI-powered search in v3.9

---

## 2. Current State Analysis

### What We Have Now
- **330+ markdown files** across 13 content sections
- **700+ HTML sample files** in `samples/`
- **Custom build system**: `checker.sh`, `release-version.sh`, `binary_hash_codes.sh`
- **Config**: `config.toml` with version numbers
- **Branches**: `v8` (production), `develop` (working), `RC-x.x.x` (release candidates)
- **No local preview** — can't see docs locally before pushing
- **No search** — handled externally by the production site

### Custom Directives (5,535+ instances)

| Directive | Count | Files | Description |
|---|---|---|---|
| `{sample}NAME{sample}` | 1,595 | 378 | Embeds interactive chart sample |
| `{sample :height H}NAME{sample}` | ~100 | varies | Sample with custom height |
| `{sample :width W :height H}NAME{sample}` | ~10 | varies | Sample with custom dimensions |
| `{api:namespace.Class#method}text{api}` | 2,640 | 376 | Link to API reference |
| `{:index N}` | 330 | 330 | Page ordering (always line 1) |
| `{{branch-name}}` | 274 | 79 | CDN version template variable |
| `{pg:location}text{pg}` | 6 | 5 | Playground gallery link |

### Sample HTML Structure
Each sample in `samples/` is a standalone HTML file:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="ac:name" content="Sample Name"/>
    <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
</head>
<body>
<div id="container"></div>
<script>
anychart.onDocumentReady(function () {
    var chart = anychart.line([10, 12, 18, 11, 9]);
    chart.container("container");
    chart.draw();
});
</script>
</body>
</html>
```

---

## 3. Target Architecture

### Directory Structure
```
docs.anychart.com/
├── docusaurus.config.js          # Main config (versions, plugins, theme)
├── sidebars.js                   # Sidebar configuration (auto-generated)
├── package.json
├── config.toml                   # KEEP — version numbers for release scripts
├── checker.sh                    # KEEP — still needed for release flow
├── release-version.sh            # KEEP — still needed for release flow
├── binary_hash_codes.sh          # KEEP — still needed for release flow
│
├── docs/                         # Migrated markdown content
│   ├── quick-start/
│   │   ├── _category_.json       # replaces group.cfg
│   │   ├── index.md              # Quick_Start/Quick_Start.md
│   │   ├── modules.md
│   │   └── downloading.md
│   ├── basic-charts/
│   │   ├── _category_.json
│   │   ├── overview.md
│   │   ├── line-chart.md
│   │   ├── bar-chart.md
│   │   └── ...
│   ├── stock-charts/
│   ├── gantt-chart/
│   ├── maps/
│   ├── appearance-settings/
│   ├── axes-and-grids/
│   ├── common-settings/
│   ├── working-with-data/
│   ├── graphics/
│   ├── chart-editor/
│   ├── 3d-plot/
│   └── pert-chart/
│
├── samples/                      # KEEP AS-IS — HTML sample files unchanged
│
├── src/
│   ├── components/
│   │   ├── ChartSample.tsx       # Renders {sample} as live iframe
│   │   └── ApiLink.tsx           # Renders {api:...} as link to api.anychart.com
│   ├── remark/
│   │   ├── sample-plugin.js      # Transforms {sample}...{sample} → <ChartSample>
│   │   ├── api-link-plugin.js    # Transforms {api:...}...{api} → <ApiLink>
│   │   └── pg-link-plugin.js     # Transforms {pg:...}...{pg} → playground link
│   └── theme/
│       └── MDXComponents.js      # Global component registration
│
├── static/                       # Static assets (if any)
│
├── scripts/
│   └── migrate.js                # One-time migration script
│
└── prompts/                      # KEEP — session logs, context
```

### How Custom Directives Map

#### `{:index N}` → Docusaurus frontmatter
**Before:**
```markdown
{:index 3}
# Line Chart
```
**After:**
```markdown
---
sidebar_position: 3
---
# Line Chart
```

#### `{sample}NAME{sample}` → Global MDX component
**Before:**
```markdown
{sample}BCT_Line_Chart_01{sample}
{sample :height 700}PERT_Basic_Sample{sample}
```
**After (Option A — keep old syntax, transform via remark plugin):**
```markdown
{sample}BCT_Line_Chart_01{sample}
{sample :height 700}PERT_Basic_Sample{sample}
```
A remark plugin silently converts these to `<ChartSample>` components at build time. **Content files don't change.**

**After (Option B — use MDX components directly):**
```mdx
<ChartSample name="BCT_Line_Chart_01" />
<ChartSample name="PERT_Basic_Sample" height={700} />
```

**Recommendation: Option A** — write a remark plugin so existing syntax stays. This minimizes migration effort (1,595 instances untouched) and keeps content authoring familiar.

#### `{api:class.Name}text{api}` → Remark plugin or MDX component
Same approach — remark plugin preserves existing syntax, transforms to `<ApiLink>` at build time. **2,640 instances stay untouched.**

#### `{{branch-name}}` → `docusaurus-plugin-includes`
```js
// docusaurus.config.js
plugins: [
  ['docusaurus-plugin-includes', {
    replacements: [
      { key: '{{branch-name}}', value: process.env.BRANCH_NAME || '8.14.1' },
    ],
  }],
],
```
Or a custom remark plugin that reads from `config.toml` directly.

#### `group.cfg` → `_category_.json`
**Before** (`Basic_Charts/group.cfg`):
```
{:index 3}
```
**After** (`docs/basic-charts/_category_.json`):
```json
{
  "label": "Basic Charts",
  "position": 3
}
```

---

## 4. The ChartSample Component

This is the most important custom piece. It needs to render AnyChart samples inline in the docs.

### Approach: iframe-based rendering
```tsx
// src/components/ChartSample.tsx
import React from 'react';

interface ChartSampleProps {
  name: string;
  width?: number;
  height?: number;
}

export default function ChartSample({ name, width, height = 400 }: ChartSampleProps) {
  // In dev/preview: point to local samples/ directory or playground.anychart.stg
  // In production: point to playground.anychart.com
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://playground.anychart.com/docs'
    : '/samples';

  const src = `${baseUrl}/${name}`;

  return (
    <div className="chart-sample-container">
      <iframe
        src={src}
        width={width || '100%'}
        height={height}
        style={{ border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '4px' }}
        loading="lazy"
        title={name}
      />
      <div className="chart-sample-actions">
        <a href={`https://playground.anychart.com/docs/${name}`} target="_blank" rel="noopener">
          Open in Playground
        </a>
      </div>
    </div>
  );
}
```

### Why iframe?
- **Sample HTML files stay unchanged** — no rewrite of 700+ files
- **Isolation** — AnyChart JS doesn't pollute the docs page
- **Lazy loading** — pages with 10+ samples don't slow down
- **Playground link** — users can open/edit in the AnyChart playground

---

## 5. Release Flow Compatibility

### Current Release Flow (simplified for docs)
1. Work on `develop` branch — all files have `{{branch-name}}`
2. Create `RC-x.x.x` from develop
3. Before release: `release-version.sh` replaces `{{branch-name}}` → `8.14.1`
4. Merge to `v8`, push, tag
5. After release: `checker.sh -a` restores `{{branch-name}}` in develop

### How It Works With Docusaurus

**Option A: Keep the existing release flow entirely**
- Docusaurus builds from whatever is in the `docs/` folder
- `release-version.sh` and `checker.sh` still work on `.md` and `.html` files
- The scripts don't care that there's a `docusaurus.config.js` — they just do text replacement
- `{{branch-name}}` in markdown gets handled by BOTH:
  - `docusaurus-plugin-includes` for local dev preview (replaces at build time)
  - `release-version.sh` for the production release (replaces in files)
- **This means zero changes to the release flow**

**Option B: Simplify over time**
- Move version management into `docusaurus.config.js`
- Use environment variables instead of text replacement in files
- Gradually phase out `release-version.sh`
- **This is a future optimization, not required for initial migration**

### Recommendation: Option A first, Option B later
The migration is already a big change. Don't also change the release flow. Get Docusaurus working with the existing scripts, then simplify later.

---

## 6. Migration Script

A one-time Node.js script that transforms the existing content:

### What it does:
1. **For each `.md` file:**
   - Extract `{:index N}` from line 1 → convert to `sidebar_position: N` in YAML frontmatter
   - Extract optional `{:index N :title "text"}` → also add `title:` to frontmatter
   - Rename file: `Line_Chart.md` → `line-chart.md` (kebab-case, Docusaurus convention)
   - Move to `docs/` subdirectory matching current location

2. **For each `group.cfg`:**
   - Read `{:index N}`
   - Create `_category_.json` with `position: N` and `label` derived from directory name

3. **For sample references in markdown:**
   - Leave `{sample}...{sample}` syntax as-is (remark plugin handles it)
   - Leave `{api:...}...{api}` syntax as-is (remark plugin handles it)
   - Leave `{{branch-name}}` as-is (plugin handles it)

4. **Copy `samples/` as-is** — no changes to HTML sample files

### What it does NOT do:
- Does not modify sample HTML files
- Does not change the release scripts
- Does not alter config.toml
- Does not touch git history

---

## 7. Implementation Phases

### Phase 1: Scaffold & Prove (1-2 days)
- [ ] Initialize Docusaurus 3.x project in a new directory
- [ ] Configure basic theme, sidebar auto-generation
- [ ] Write the `ChartSample` component (iframe-based)
- [ ] Write the `ApiLink` component
- [ ] Write remark plugins for `{sample}` and `{api:}` directives
- [ ] Set up `docusaurus-plugin-includes` for `{{branch-name}}`
- [ ] Manually migrate 3-5 docs to prove everything works
- [ ] Verify: local dev server shows docs with working samples

### Phase 2: Migration Script (1 day)
- [ ] Write `scripts/migrate.js`
- [ ] Run migration on full content set
- [ ] Verify: all 330+ docs render correctly
- [ ] Verify: sidebar matches current navigation structure
- [ ] Fix any edge cases

### Phase 3: Styling & Polish (1-2 days)
- [ ] Customize Docusaurus theme to match AnyChart branding
- [ ] Configure search (Algolia or local)
- [ ] Set up redirects (from `config.toml` redirect list)
- [ ] Configure versioning (if needed for v7 → v8)
- [ ] Test release flow: `checker.sh` and `release-version.sh` still work on new file structure

### Phase 4: Validation (1 day)
- [ ] Check all sample embeds load correctly
- [ ] Check all API links resolve
- [ ] Check all internal links work
- [ ] Run a test build for production
- [ ] Compare old vs new navigation structure

### Phase 5: Deployment (when ready)
- [ ] Set up deployment pipeline (GitHub Pages / Netlify / Vercel)
- [ ] Configure production domain
- [ ] Set up CI/CD for preview deployments on branches
- [ ] Switch production traffic

---

## 8. What Content Authors Get After Migration

### Before (current pain)
1. Open a `.md` file in any text editor
2. Make changes, hope the custom syntax is correct
3. `git commit && git push`
4. Wait for deployment
5. Check if it looks right on staging
6. If not — repeat

### After (with Docusaurus)
1. `npm start` — local dev server starts in seconds
2. Open `http://localhost:3000` — see the full docs site locally
3. Edit any `.md` file — **hot reload**, changes appear instantly in browser
4. See live chart samples embedded right in the page
5. Custom syntax (`{sample}`, `{api}`) works in preview
6. When happy: `git commit && git push`
7. Optional: PR preview deployments on Netlify/Vercel (automatic)

**The key win: instant local preview with hot reload.** No more blind editing.

---

## 9. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Remark plugins don't handle all edge cases | Medium | Medium | Test against all 378 files early in Phase 2 |
| Sample iframes load slowly (10+ per page) | Medium | Low | Lazy loading, intersection observer |
| Release scripts break on new file structure | Low | High | Test in Phase 3; scripts work on `.md`/`.html` regardless |
| Build time too slow (300+ pages) | Low | Low | Enable Rspack; Docusaurus handles this scale well |
| Team unfamiliar with React/MDX | Medium | Medium | Remark plugins mean authors keep writing same syntax |
| Some directive edge cases missed | Medium | Medium | Migration script generates a report of unparseable lines |

---

## 10. Decision Summary

| Aspect | Choice | Reasoning |
|---|---|---|
| **Framework** | Docusaurus 3.x | Native versioning, largest ecosystem, Meta-backed |
| **Custom syntax** | Remark plugins (keep existing syntax) | Zero rewrite of 5,500+ directive instances |
| **Samples** | iframe from existing HTML files | Zero rewrite of 700+ sample files |
| **Template vars** | `docusaurus-plugin-includes` | Drop-in `{{branch-name}}` support |
| **Release flow** | Keep existing scripts unchanged | Minimize blast radius of migration |
| **File naming** | kebab-case in `docs/` dir | Docusaurus convention, clean URLs |
| **Sidebar** | Auto-generated from file structure | `_category_.json` replaces `group.cfg` |
