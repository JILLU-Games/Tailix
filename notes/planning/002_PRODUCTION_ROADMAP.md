# 002: A-Z Production-Ready Roadmap (7 Scope-Locked Phases)

> **Objective**: Convert both the `Sandbox/` visual lab and the zero-Node, zero-CDN `framework/` (**Tailix**) into a cleanly verified, Light/Dark consistent, compact Bootstrap-style UI framework with PWA readiness, zero broken pages, zero hardcode/style drift, and full automated verification.

---

## Roadmap Overview

| Phase | Title | Bugs Resolved | Primary Outcome | Risk Control |
|---|---|---|---|---|
| **Phase 01** | Sandbox Broken Page, Encoding & SVG Icon Repair | `BUG-01` – `BUG-04` | Restore `settings.html`, complete `settings-components.js`, fix `showToast`, strip mojibake/BOM, fix `26×` `stroke-[var(--icon-stroke)]` & `12×` `width="28"` | Only HTML markup, `settings-components.js`, and SVG class attributes touched; layout preserved |
| **Phase 02** | Unified Design Tokens, Typography, Flat Geometry & Light-Mode CSS | `BUG-05` – `BUG-07` | Sync `Segoe UI` stack, support `--radius: 0rem` compact mode, remove `box-shadow`, normalize `46` bold weights (`<=500`), remove triple `:root` override & `75` dark-only playground hexes, unify Tailwind configs | CSS/token values only; zero JS behavior changes |
| **Phase 03** | Unified Shell, Theme Toggle Parity, Defensive JS Guards & Validation Repair | `BUG-08` – `BUG-09` | Give all `28` Sandbox pages consistent Dark/Light theme toggle + 27-link nav; add `TableController`/`ToastManager` guards; fix `validation/*` checks & `CHANGELOG_v2_1_2` header | JS shell & validator scripts only; CSS foundation frozen |
| **Phase 04** | `framework/` Core JS Bug Fixes & CSS Light-Mode Parity | `BUG-10` – `BUG-13` | Fix dropdown early-return, modal `Tab` trap, table sort/ellipsis/inline-style; fix `tokens.css` Light selection/focus & remove `#FFFFFF`/`rgba`/blur/`600` weight in `tailix.css`; add `--tx-radius-scale: 0` preset | `framework/css/` & `framework/js/` only; zero Sandbox edits |
| **Phase 05** | `framework/` Mobile Drawer, Built-in Icons & Complete Component Suite | `BUG-14` – `BUG-15` | Slide-over mobile drawer (`<=768px`), `Tailix.icons` SVG registry, Tooltip, Accordion, Spinner, Progress, Breadcrumb items, Code Tabs+Copy, Log severity badges, API method tags, Input prefix/password-eye, Radio cards, Chips, Slider | Additive `.tx-*` modules + mobile CSS only; preserves Phase 04 API |
| **Phase 06** | `framework/` Packaging, PWA Support, `.vib-*` Bridge & PHP/Python Apps | `BUG-16` | Add `manifest.json` + `sw.js` PWA install/offline support, `framework/package.json`/`VERSION`/`LICENSE`, `.vib-*` compatibility layer, runnable PHP & Python demo apps, updated A-Z `static.html` hub | Packaging, PWA assets, and examples only; core `tokens.css` locked |
| **Phase 07** | Automated Unit + Playwright Verification, Checksums & Docs Sync | `BUG-17` | `node:test` suite for `Tailix` JS, Playwright visual/Light-Dark/mobile/dropdown/modal suite, refresh `validation/CHECKSUMS.sha256`, update `DESIGN_SYSTEM.md`, `docs/`, `project/`, and release changelog | Verification, docs & CI scripts only; fixes only if test fails |

---

## Execution Rules
1. Every phase executes **only after explicit user approval**.
2. Before modifying files in Phase $N$, re-read `/notes/planning/phase-0N-plan.md`.
3. After completing Phase $N$:
   - Audit implemented patch strictly against Scope Lock.
   - Rebuild minified `tailix.min.css` / `tailix.min.js` whenever `framework/` files change.
   - Update `003_PHASE_UPDATE_TRACKER.md`, `005_ACTUAL_IMPLEMENTATION_STATUS.md`, `notes/sessions/session-*.md`, and `docs/` / `project/` per `AGENTS.md`.
   - Give the user a clear summary + short approval prompt for Phase $N+1$.
