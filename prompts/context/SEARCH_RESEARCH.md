# Documentation Search — Architecture Research

> **Date:** 2026-02-19
> **Status:** Research complete, awaiting decision
> **Constraints:** Free only (no paid services), VPS hosting, ~421 doc pages, Docusaurus 3.x

---

## TL;DR

**Recommended: `@easyops-cn/docusaurus-search-local`** — the most popular local search plugin for Docusaurus. Zero cost, zero infrastructure, zero external dependencies. Install one npm package, add 5 lines to config, done. The search index builds with the site and runs entirely in the browser.

---

## 1. Does Docusaurus Have Built-in Search?

**No.** Docusaurus ships no search engine. The theme includes an Algolia DocSearch component, but you must provide credentials. Without configuration, there is no search bar at all.

Official docs list four paths: Algolia DocSearch, Typesense, community local plugins, or build your own.

---

## 2. Free Options Evaluated

### 2a. Algolia DocSearch — Free Program

Algolia runs a free DocSearch program for open-source/technical documentation.

| Aspect | Details |
|---|---|
| Architecture | SaaS — Algolia crawls your site weekly, hosts the index, serves queries |
| Cost | Free (must display "Search by Algolia" branding) |
| Limits | 5M records, 50M searches/month — more than enough |
| Search quality | Excellent — industry standard. Typo tolerance, ranking, autocomplete |
| Setup | Easy — apply, get approved, add credentials to config |
| Bundle impact | ~30-40KB (UI component, no index download) |

**Eligibility:** Site must be public, must be developer/technical docs, must show Algolia branding. AnyChart docs would qualify.

**Pros:** Best search quality available. Zero infrastructure. New DocSearch v4 even has "Ask AI".

**Cons:** External dependency (your search relies on Algolia being up). Must display branding. Application process (usually 1-10 days). Only works for public sites. Algolia can revoke access.

### 2b. @easyops-cn/docusaurus-search-local (RECOMMENDED)

The most popular local search plugin. 50K+ weekly npm downloads, 792 GitHub stars.

| Aspect | Details |
|---|---|
| Architecture | Client-side — lunr.js index built at `npm run build`, downloaded by browser |
| Cost | Free forever (MIT license) |
| Search quality | Good — fuzzy matching, configurable. Not Algolia-level but solid |
| Setup | Easy — `npm install` + 5 lines in config |
| Bundle impact | ~300-800KB index (gzipped) for 421 pages + ~30KB UI |
| Maintenance | Zero — builds with the site |
| D3 compat | Full Docusaurus 3.x support, latest release Feb 2026 |

**Features:** Fuzzy search, result highlighting on target pages, keyboard shortcut (Ctrl+K), configurable result limits, hashed index for caching, multi-language support. Recently added Ask AI integration.

**How it works:**
1. At build time, the plugin crawls all built HTML pages
2. Creates a lunr.js search index (serialized JSON)
3. Browser downloads the index on first search
4. All search queries run client-side — no server calls

**Setup:**
```bash
npm install @easyops-cn/docusaurus-search-local
```
```ts
// docusaurus.config.ts
themes: [
  ['@easyops-cn/docusaurus-search-local', {
    hashed: true,
    indexDocs: true,
    indexBlog: false,
    indexPages: false,
    language: ['en'],
    searchResultLimits: 8,
    highlightSearchTermsOnTargetPage: true,
  }],
],
```

**Pros:** Completely self-contained. No accounts, no API keys, no branding. Works offline, behind firewalls, anywhere. Actively maintained.

**Cons:** Index must be downloaded by each visitor (~300-800KB, cached after first load). Doesn't work in dev mode (build only). Search quality is good but not Algolia-level for edge cases.

### 2c. @cmfcmf/docusaurus-search-local

Second most popular local plugin. 21K weekly npm downloads, 493 GitHub stars.

| Aspect | Details |
|---|---|
| Architecture | Same as above — lunr.js, client-side |
| Cost | Free (MIT) |
| D3 compat | Full Docusaurus 3.x support |
| Unique feature | Fine-grained BM25 relevance tuning (b, k1 parameters), field boosting |

**How it differs:** More knobs for relevance tuning. Uses Algolia's open-source `autocomplete` UI library (local, no server). Supports 21 languages. Slightly fewer downloads but solid alternative.

**Pros:** Better relevance tuning. Nice autocomplete UI.

**Cons:** Smaller community. Same fundamental limitations as lunr.js-based search.

### 2d. Orama (plugin-docusaurus-v3)

Embedded JavaScript search engine (formerly called Lyra).

| Aspect | Details |
|---|---|
| Architecture | Client-side — index built at build time, loaded in browser |
| Cost | Free (Apache 2.0, local mode). Cloud free tier also available |
| D3 compat | Confirmed — `@orama/plugin-docusaurus-v3` (requires core >= 3.2.0) |
| Setup | Easy — npm install + add to plugins |
| Library size | <2KB core, but index can be 1-5MB for 421 pages |
| Unique feature | Supports vector/hybrid search, RAG pipeline |

**Pros:** Modern architecture. Tiny core library. Active development.

**Cons:** Larger index than lunr.js-based solutions. Less proven for Docusaurus (newer, smaller community). V3 plugin has fewer real-world deployments.

### 2e. Typesense (self-hosted)

Open-source server-side search engine.

| Aspect | Details |
|---|---|
| Architecture | Server-side — run Typesense on VPS, scrape site with DocSearch scraper |
| Cost | Free (self-hosted, GPLv3) |
| D3 compat | Confirmed — `docusaurus-theme-search-typesense` |
| Search quality | Excellent — close to Algolia |
| Setup | Medium-Hard — install server, configure scraper, schedule cron |
| RAM | ~50-100MB for 421 pages |

**Pros:** Excellent search quality. No client index download. No branding. Full control.

**Cons:** Must run and maintain a server process + Docker scraper on cron. Significantly more operational complexity than local plugins.

---

## 3. Options Eliminated

| Option | Why eliminated |
|---|---|
| **Meilisearch** | No maintained Docusaurus plugin (Tauri's tools archived). Would require building custom integration from scratch. |
| **Pagefind** | No Docusaurus plugin. Great tech, wrong ecosystem — rejected by Docusaurus team (issue #10290). |
| **FlexSearch** | No Docusaurus plugin at all. |
| **DocuScout** | Free tier only 50 pages. 421 pages needs $299/month plan. |
| **TinaCMS Search** | Part of Tina ecosystem (already eliminated for editing). |
| **Dhub/Holocron** | SaaS, paid tiers for search features. |

---

## 4. What Popular Docusaurus Sites Use

| Site | Search |
|---|---|
| docusaurus.io | Algolia DocSearch |
| React Native | Algolia DocSearch |
| Redux | Algolia DocSearch |
| Jest | Algolia DocSearch |
| pnpm | Algolia DocSearch |
| Babel | Algolia DocSearch |
| Electron | Algolia DocSearch |
| Ionic | Algolia DocSearch |

Virtually every major Docusaurus site uses Algolia's free DocSearch program.

---

## 5. Comparison Matrix

| | @easyops-cn local | @cmfcmf local | Algolia Free | Typesense (self-hosted) | Orama local |
|---|---|---|---|---|---|
| **Cost** | Free | Free | Free | Free | Free |
| **Setup** | Easy (5 min) | Easy (5 min) | Easy (after approval) | Medium-Hard (hours) | Easy (5 min) |
| **Search quality** | Good | Good | Excellent | Excellent | Good |
| **Fuzzy/typo** | Yes | Yes | Yes | Yes | Yes |
| **Autocomplete** | Yes | Yes | Yes | Yes | Yes |
| **Index download** | 300-800KB | 300-800KB | None | None | 1-5MB |
| **Server needed** | No | No | No (SaaS) | Yes | No |
| **Maintenance** | Zero | Zero | Zero | Medium | Zero |
| **Branding** | None | None | Required | None | None |
| **Works offline** | Yes | Yes | No | No | Yes |
| **Dev mode** | No | No | Yes | Yes | No |
| **Community** | Large (50K/wk) | Medium (21K/wk) | Massive | Small | Growing |
| **D3 confirmed** | Yes | Yes | Yes | Yes | Yes |

---

## 6. Recommendation

### Go with: **@easyops-cn/docusaurus-search-local**

For a 421-page site with zero budget and VPS hosting, this is the sweet spot:

1. **Fastest to implement** — one `npm install`, five config lines, done
2. **Zero ongoing cost or maintenance** — no servers, no APIs, no accounts
3. **Good enough search** — fuzzy matching, highlighting, keyboard shortcuts
4. **No external dependencies** — search works even if your VPS is the only thing running
5. **Most battle-tested** — 50K weekly downloads, used by hundreds of Docusaurus sites
6. **No branding requirements**

The ~300-800KB index download is a non-issue for a documentation site (visitors expect to load content, and the index caches after first load).

### Upgrade path if needed later

If search quality feedback suggests you need better:
1. **Easy upgrade:** Apply for Algolia DocSearch free program (show branding, get best-in-class search)
2. **Self-hosted upgrade:** Run Typesense on VPS (no cost, excellent quality, more operational work)

Both are drop-in replacements — they swap the search theme component, no content changes needed.

---

## 7. Decision Points

1. **Which local plugin?** @easyops-cn (recommended, larger community) vs @cmfcmf (better relevance tuning)?
2. **Algolia as backup?** Apply to DocSearch program now as a parallel track? Takes 1-10 days, zero effort.
3. **Search scope:** Index only docs, or also any future blog/pages?
