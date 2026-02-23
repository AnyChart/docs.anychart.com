# UI/UX Rehaul — AnyChart Documentation

## Goal

Transform docs.anychart.com from a functional documentation site into a polished, adaptive, industry-standard web application. The site must feel as refined as Stripe Docs, React Docs, or Tailwind Docs — clean, fast, accessible, and a pleasure to use on any device.

---

## Scope

**Every user-facing surface** of the site, including:

1. **Main documentation** — navbar, sidebar, content area, footer, TOC, breadcrumbs
2. **Edit page** — `/edit?path=...` (CodeMirror editor, forms, header)
3. **Chart samples** — iframe containers, action bars
4. **Search** — input, dropdown, results
5. **Login/OAuth flow** — login prompt, authenticated state indicators
6. **Error states** — 404, loading, empty states

**Three target form factors:**
- **Mobile** (320px–767px) — phones, portrait tablets
- **Tablet** (768px–1023px) — landscape tablets, small laptops
- **Desktop** (1024px+) — laptops, monitors

---

## How to Execute This Task

### Required Tools & Skills

Use **every available tool** to analyze, decide, and implement:

| Tool / Skill | Purpose |
|---|---|
| **superpowers:brainstorming** | Explore design directions before touching code — compare layout options, color palettes, spacing systems |
| **superpowers:writing-plans** | Write a step-by-step implementation plan for each UI area |
| **superpowers:executing-plans** | Execute the plan in batches with checkpoints |
| **superpowers:test-driven-development** | Write visual regression tests (Playwright) before/after each change |
| **superpowers:systematic-debugging** | Debug layout issues, rendering glitches, cross-browser inconsistencies |
| **superpowers:requesting-code-review** | Request review after each major UI area is complete |
| **superpowers:dispatching-parallel-agents** | Parallelize independent tasks (e.g., mobile nav + footer + dark mode fixes simultaneously) |
| **superpowers:subagent-driven-development** | Delegate focused subtasks (e.g., "audit all color contrast ratios", "optimize all images") |
| **superpowers:verification-before-completion** | Run Lighthouse, axe, and Playwright before claiming any area is done |
| **Explore agents** | Research how top doc sites (Stripe, React, MDN, Tailwind) solve specific UX problems |
| **Web search** | Look up latest CSS techniques, responsive patterns, accessibility standards |
| **WebFetch** | Pull specific design system documentation (Infima, Docusaurus theme API) |
| **Context7 MCP** | Look up Docusaurus 3.x theming API, swizzle points, CSS variable system |

### Execution Process

```
1. Brainstorm (superpowers:brainstorming)
   ↓ Explore design options, user flows, responsive strategies
2. Plan (superpowers:writing-plans)
   ↓ Write detailed per-area plan with acceptance criteria
3. Test Setup (superpowers:test-driven-development)
   ↓ Write Playwright baseline screenshots/tests
4. Implement (superpowers:executing-plans)
   ↓ Execute in batches, parallel where possible
5. Verify (superpowers:verification-before-completion)
   ↓ Lighthouse audit, axe a11y scan, visual regression
6. Review (superpowers:requesting-code-review)
   ↓ Code review against plan and standards
7. Repeat for next UI area
```

---

## Current State (Audit Summary)

### What works
- Dark/light/system theme toggle (3-button pill, consistent across pages)
- CodeMirror 6 editor with syntax highlighting and preprocessing pipeline
- Full GitHub OAuth flow for community edits
- 421 migrated docs with preserved SEO URLs
- Local search with centered dropdown
- Chart sample iframes with playground links

### What needs improvement

#### Responsive Design
- **Only 2 breakpoints** (996px and 640px) — no tablet breakpoint
- **Edit page fixed 500px editor** — doesn't adapt to viewport height
- **No touch-optimized interactions** — tap targets may be too small on mobile
- **Sidebar doesn't gracefully transition** between mobile hamburger and desktop fixed
- **Search input widths hardcoded** — doesn't flow naturally on mid-size screens
- **Code blocks may overflow** horizontally on mobile without scroll indicators

#### Typography & Readability
- **Base font 15px** — below the 16px web standard minimum
- **H2 is uppercase** — ALL CAPS reduces readability for technical content
- **Heading sizes are compressed** — H1 (22px), H2 (17px), H3 (17px) — H2 and H3 are identical
- **Sidebar font 13px** — potentially too small for comfortable reading
- **No responsive type scale** — font sizes don't adapt to viewport

#### Visual Design
- **Minimal spacing system** — no consistent spacing scale (4px/8px/16px/24px/32px)
- **Chart sample containers** look dated compared to modern card designs
- **Footer is plain** — no visual hierarchy or brand polish
- **Tables lack visual refinement** — especially on mobile where they may overflow
- **No subtle animations or micro-interactions** — site feels static
- **Loading states are basic** — simple spinner, no skeleton screens

#### Accessibility
- **No skip-to-content link** — keyboard users must tab through entire nav
- **No prefers-reduced-motion** handling — animations play regardless
- **Focus indicators inconsistent** — some elements lack visible focus rings
- **Status messages lack aria-live** — screen readers may miss updates
- **Theme toggle buttons need better keyboard focus styling**
- **Touch targets not verified** against 48px WCAG 2.2 recommendation

#### Performance
- **No image optimization** — no srcset, no WebP/AVIF
- **CodeMirror loaded from CDN** — not bundled, no preload hints
- **No font-display strategy** — Open Sans may cause FOIT/FOUT
- **No content-visibility optimizations** for long doc pages

---

## Design Principles

These principles guide every decision:

1. **Content first** — UI exists to serve the documentation, not the other way around
2. **Progressive disclosure** — show what's needed, hide complexity until asked
3. **Consistent spacing** — use a 4px/8px grid system religiously
4. **Readable typography** — 16px+ body, proper heading hierarchy, adequate contrast
5. **Responsive by default** — every component works on every screen size
6. **Accessible always** — WCAG 2.2 AA minimum, keyboard + screen reader tested
7. **Fast always** — LCP < 2.5s, INP < 200ms, CLS < 0.1
8. **Brand identity preserved** — AnyChart blue (#2485d0) remains the anchor color

---

## Implementation Areas

### Area 1: Typography & Spacing System

**Goal:** Establish a consistent, readable type scale and spacing system.

**Tasks:**
- Increase base font to 16px
- Define heading scale: H1 (28px), H2 (22px), H3 (18px), H4 (16px bold)
- Remove uppercase from H2 (or make it optional)
- Define spacing scale: 4/8/12/16/24/32/48/64px
- Apply spacing scale to all margins, paddings, gaps
- Ensure line-height 1.5-1.6 for body text
- Add responsive type scale (slightly smaller on mobile)
- Test with real doc content at each size

**Acceptance criteria:**
- [ ] All text passes WCAG 2.2 AA contrast (4.5:1 normal, 3:1 large)
- [ ] No text smaller than 13px anywhere on the site
- [ ] Body text is 16px on desktop, 15px on mobile
- [ ] Consistent spacing visible across all pages

---

### Area 2: Responsive Layout (Mobile → Tablet → Desktop)

**Goal:** Three-tier responsive layout that feels native on each device.

**Tasks:**
- Add tablet breakpoint (768px–1023px)
- Sidebar: collapsed by default on mobile+tablet, slide-out on gesture/tap
- TOC: hidden on mobile, collapsible on tablet, sticky on desktop
- Content area: full width on mobile, constrained on desktop (max-width ~820px)
- Edit page: editor height = `calc(100vh - header - form)` instead of fixed 500px
- Code blocks: horizontal scroll with visible scrollbar on mobile
- Tables: horizontal scroll wrapper on mobile with scroll shadow indicators
- Footer: single-column on mobile, multi-column on desktop
- Navigation: breadcrumbs collapse to "..." on mobile

**Acceptance criteria:**
- [ ] No horizontal scroll on any page at any breakpoint
- [ ] All interactive elements have 44px+ tap targets on mobile
- [ ] Sidebar transitions smoothly between states
- [ ] Editor is usable on mobile (though not the primary use case)

---

### Area 3: Navigation & Wayfinding

**Goal:** Users always know where they are and how to get where they need to go.

**Tasks:**
- Add skip-to-content link (visually hidden, visible on focus)
- Improve breadcrumb styling (smaller, muted, with clear separators)
- Sticky navbar on scroll (or auto-hide on scroll down, show on scroll up)
- Improve sidebar active state visibility
- Add previous/next page navigation at bottom of doc pages
- Search: improve empty state, add keyboard shortcuts hint (Ctrl+K)
- Mobile: bottom navigation bar or floating action button for key actions

**Acceptance criteria:**
- [ ] Skip-to-content link works and is visible on keyboard focus
- [ ] Breadcrumbs visible on all doc pages
- [ ] Previous/next navigation works on all pages
- [ ] Search can be triggered via Ctrl+K / Cmd+K

---

### Area 4: Dark Mode Polish

**Goal:** Dark mode that's not an afterthought — as polished as light mode.

**Tasks:**
- Audit all color tokens for adequate contrast in dark mode
- Fix chart sample containers in dark mode (iframe backgrounds, borders)
- Ensure code block syntax highlighting is optimized for dark backgrounds
- Dark mode for edit page status messages, form elements
- Smooth transition animation when toggling themes (0.2s on background-color)
- Ensure images/diagrams work in dark mode (add subtle backgrounds if needed)
- Test all states (loading, error, empty, authenticated, anonymous) in dark mode

**Acceptance criteria:**
- [ ] Every element passes WCAG 2.2 AA contrast in dark mode
- [ ] No jarring white flashes when navigating between pages
- [ ] Chart samples look intentional in dark mode (not broken)
- [ ] Theme toggle animation is smooth

---

### Area 5: Component Polish & Micro-interactions

**Goal:** Every component feels intentional, modern, and responsive.

**Tasks:**
- Code blocks: add copy button, improve border radius and shadows
- Tables: add hover row highlighting, horizontal scroll indicators on mobile
- Chart sample containers: modern card design with subtle shadows
- Buttons: consistent sizing, visible focus rings, hover transitions
- Forms (edit page): improve input styling, add character count indicator
- Loading states: skeleton screens instead of spinners where appropriate
- Status messages: slide-in animation, auto-dismiss for success
- Links: subtle hover underline animation
- Scrollbar styling (thin, branded) where appropriate

**Acceptance criteria:**
- [ ] Code blocks have copy button that works
- [ ] All interactive elements have visible focus indicators
- [ ] Hover states are consistent across all buttons and links
- [ ] Loading states don't cause layout shifts (CLS < 0.1)

---

### Area 6: Accessibility Hardening

**Goal:** WCAG 2.2 AA compliance across the entire site.

**Tasks:**
- Add skip-to-content link
- Add aria-live regions for dynamic content (search results, edit page status)
- Add prefers-reduced-motion media queries (disable animations)
- Verify all images have alt text
- Verify all form inputs have labels
- Verify all buttons have accessible names
- Test with keyboard-only navigation (no mouse)
- Test with screen reader (NVDA or VoiceOver)
- Verify touch targets are 44px+ on mobile
- Add focus-visible styles (visible ring only on keyboard focus, not click)
- Ensure heading hierarchy is correct on every page (no skipped levels)

**Acceptance criteria:**
- [ ] axe-core reports 0 violations
- [ ] Lighthouse accessibility score > 95
- [ ] Keyboard-only navigation works for all critical flows
- [ ] Screen reader can navigate all pages

---

### Area 7: Performance Optimization

**Goal:** Core Web Vitals pass on all pages.

**Tasks:**
- Add `font-display: swap` to Google Fonts import
- Add `<link rel="preconnect">` for CDN domains (esm.sh, cdn.anychart.com)
- Lazy-load chart sample iframes only when scrolled into view
- Add `content-visibility: auto` for long doc pages
- Optimize any raster images to WebP/AVIF
- Add preload hints for critical CSS
- Measure with Lighthouse and PageSpeed Insights
- Fix any CLS issues from dynamic content loading

**Acceptance criteria:**
- [ ] LCP < 2.5s on mobile (3G throttled)
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Lighthouse performance score > 90

---

## Verification Checklist (Run After All Areas Complete)

```
□ Lighthouse audit (Performance > 90, Accessibility > 95, Best Practices > 95)
□ axe-core accessibility scan (0 violations)
□ Manual keyboard navigation test (all flows)
□ Screen reader test (at least 3 representative pages)
□ Mobile device test (real phone, not just DevTools)
□ Tablet device test (real tablet or accurate emulation)
□ Dark mode full walkthrough (every page type)
□ Light mode full walkthrough
□ System theme toggle test (change OS preference)
□ Cross-browser: Chrome, Firefox, Safari, Edge
□ Edit page end-to-end test (login → edit → submit)
□ Search functionality test on all breakpoints
□ No horizontal scroll on any page/breakpoint
□ All chart samples render correctly
□ PageSpeed Insights > 90 on representative pages
□ Visual regression tests pass
```

---

## Reference Sites

Study these for inspiration on specific patterns:

| Site | What to Study |
|------|---------------|
| [Stripe Docs](https://docs.stripe.com) | Overall polish, sidebar design, code blocks, mobile layout |
| [React Docs](https://react.dev) | Interactive examples, clean typography, dark mode |
| [Tailwind Docs](https://tailwindcss.com/docs) | Search UX, sidebar organization, code examples |
| [MDN Web Docs](https://developer.mozilla.org) | Accessibility, breadcrumbs, responsive tables |
| [Vercel Docs](https://vercel.com/docs) | Progressive disclosure, clean navigation |
| [Next.js Docs](https://nextjs.org/docs) | Sidebar with sections, dark mode, mobile nav |

---

## Non-Goals

- **No redesign of the AnyChart brand** — blue (#2485d0) stays, Open Sans stays
- **No new features** — this is purely a UI/UX polish pass
- **No content changes** — the 421 docs stay exactly as they are
- **No backend changes** — server routes, preprocessing, OAuth are complete
- **No framework swap** — Docusaurus 3.x is the platform, we work within it
