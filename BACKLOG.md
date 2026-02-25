# Content Cleanup Backlog

> Audited 2026-02-25. All issues below are from the legacy site migration — content was migrated as-is.

---

## 1. "Coming Soon" Placeholders [HIGH]

Visible to users. Looks unfinished.

| File | Occurrences |
|------|-------------|
| `docs/dashboards/standalones.md` | 7 sections |
| `docs/basic-charts/combining-series.md` | 3 sections |
| `docs/beta/resource-chart.md` | 2 sections |
| `docs/working-with-data/table-data-model.md` | 2 sections |
| `docs/stock-charts/technical-indicators/custom-indicators.md` | 1 section |
| `docs/stock-charts/technical-indicators/mathematical-description.md` | 1 section |
| `docs/common-settings/ui-controls/gantt-toolbar.md` | entire page |

---

## 2. Stub Pages [HIGH]

Under 6 lines of content. Essentially empty.

| File | Lines | Notes |
|------|-------|-------|
| `docs/common-settings/ui-controls/gantt-toolbar.md` | 2 | Just "Coming soon" |
| `docs/maps/drill-down-maps/breadcrumbs.md` | 3 | One paragraph, no sample |
| `docs/maps/maps-list.md` | 4 | Minimal |
| `docs/common-settings/accessibility/section-508.md` | 5 | Minimal |
| `docs/common-settings/accessibility/standard-en-301-549.md` | 5 | Minimal |
| `docs/common-settings/accessibility/web-content-accessibility-guidelines.md` | 5 | Minimal |

---

## 3. Category Landing Pages [MEDIUM]

39 of 41 categories use Docusaurus `generated-index` — auto-generated link list with no real content. 28 `overview.md` files exist but aren't wired up as category pages.

**Action A:** Switch `_category_.json` from `generated-index` to `type: doc` for the 28 categories that already have an overview.md.

**Action B:** Create overview pages for the 12 categories missing them entirely:

| Directory | Child pages |
|-----------|-------------|
| `docs/appearance-settings/` | 7 |
| `docs/axes-and-grids/` | 10 |
| `docs/maps/` | 25 |
| `docs/gauges/` | 4 |
| `docs/dashboards/` | 3 |
| `docs/common-settings/ui-controls/` | 5 |
| `docs/basic-charts/marimekko-chart/` | 3 |
| `docs/basic-charts/stacked/percent/` | 16 |
| `docs/basic-charts/stacked/value/` | 16 |
| `docs/maps/seat-maps/` | 3 |
| `docs/beta/` | 1 |
| `docs/drilldown/` | 1 |

---

## 4. Thin Pages [LOW]

~44 pages with 6-14 lines of content. Could use more substance but aren't broken.

**Not included:** ~80 variant pages (vertical/polar/radar/stacked/error/3d/percent) — intentionally brief, cross-reference parent chart type. Correct pattern.

---

## 5. Content Sections by Size

| Section | Pages | Completeness |
|---------|-------|-------------|
| basic-charts | 143 | Most complete — many variant pages by design |
| stock-charts | 98 | Good coverage, some thin indicator pages |
| common-settings | 43 | Solid, a few stubs |
| maps | 33 | Several thin pages, missing category overview |
| gantt-chart | 30 | Decent, some thin |
| working-with-data | 18 | Good |
| graphics | 15 | Adequate |
| axes-and-grids | 10 | Missing category overview |
| appearance-settings | 7 | Missing category overview |
| quick-start | 5 | Complete |
| pert-chart | 5 | Complete |
| gauges | 4 | Missing category overview |
| dashboards | 3 | Has "Coming soon" stubs |
| chart-editor | 3 | Adequate |
| 3d-plot | 2 | Thin overview |
| drilldown | 1 | Missing category overview |
| beta | 1 | "Coming soon" stub |

---

## What's NOT a Problem

- **All 1607 samples** — intact, zero broken or empty
- **All `slug:` frontmatter** — present on every page, URLs preserved
- **`{sample}`, `{api:}`, `{pg:}` directives** — 4241 occurrences in 393 files, all handled by preprocessor at build time
- **Build** — clean, zero errors
