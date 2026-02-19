# PROMPT_LOG.md

## Prompt Log

| # | Timestamp | Prompt Summary |
|---|-----------|----------------|
| 1 | 2026-02-18 | Research Docusaurus as documentation framework for migration: versioning, custom plugins, live code, search, build/deploy, MDX, sidebar, env variables, plugin ecosystem, maintenance status |
| 2 | 2026-02-19 | Clean up repo: remove old duplicate source dirs, make repository primarily Docusaurus-based |
| 3 | 2026-02-19 | Implement plan: Flatten repository — commit docusaurus/, remove old content dirs, git mv docusaurus/* to root, update path references, verify build |
| 4 | 2026-02-19 | Fix broken image URLs — remove escaped underscores in static.anychart.com image references |
| 5 | 2026-02-19 | Add Playground button to chart samples — preserve original interlinking with playground.anychart.com demos |
| 6 | 2026-02-19 | Fix navbar CSS on smaller screens — grey text on blue background barely visible |
| 7 | 2026-02-19 | Fix links in supported-charts-types page and all other pages with markdown links inside HTML tables |
| 8 | 2026-02-19 | Introduce night/dark mode — stage 1: dark theme CSS, toggle button; stage 2: adjust chart samples if needed |
| 9 | 2026-02-19 | Make code blocks syntax-highlighted — add language auto-detection since migrated docs use bare ``` without language identifiers |
| 10 | 2026-02-19 | Research community-driven documentation editing approaches for Docusaurus 3.x: Decap CMS, TinaCMS, GitHub API custom solution, Prose.io, lightweight custom editor, Docusaurus plugins. Comprehensive comparison with pros/cons and recommendation. |
| 11 | 2026-02-19 | Research ALL available search solutions for Docusaurus 3.x: built-in/official, Algolia DocSearch, local/client-side plugins, Typesense, Meilisearch, Orama, Pagefind, FlexSearch. Comprehensive comparison with architecture, compatibility, cost, performance, and recommendation for VPS-hosted ~421 page site. |
| 12 | 2026-02-19 | Install and set up @easyops-cn/docusaurus-search-local |
| 13 | 2026-02-19 | Tweak search bar UX — make it more centered on page and bigger |
