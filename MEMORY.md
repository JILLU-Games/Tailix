# VibTools Web UI Project Memory

## Project snapshot

This repository is the frozen baseline for a static, design-system-driven web UI sandbox named VibTools Web UI, currently aligned to version 2.2.0. The project is not a full application backend; it is primarily a compact front-end reference and validation sandbox for visual UI patterns, token consistency, and component behavior. As of Phase 3, the codebase has undergone a comprehensive audit enforcing zero un-tokenized pixel sizes and strict variable hygiene.

The project documents explicitly state that the runtime and the official freeze documents are intended to remain aligned, with documentation being updated to match the implemented runtime rather than redesigning the app.

---

## 1) Tech Stack & Dependencies

### Core technologies

- HTML5
- CSS3
- JavaScript (vanilla ES5/ES6-compatible patterns)
- Tailwind CSS via CDN
- CSS custom properties / design token variables

### Front-end framework and runtime model

- No heavy front-end framework (React/Vue/Angular); pure static HTML5/Tailwind CDN.
- Configured with `package.json`, `server.js` (Express static server running on port 3000, 0.0.0.0), and root `index.html` entry redirect.
- The app behaves as a static sandbox/running prototype served directly in the browser via Node/Express on port 3000.

### Styling system

- Tailwind CDN is loaded in the browser via `https://cdn.tailwindcss.com`.
- Custom configuration is provided in `Sandbox/js/tailwind-config.js`.
- Token foundation styles are defined in:
  - `Sandbox/assets/css/foundation/_colors.css`
  - `Sandbox/assets/css/foundation/_typography.css`
  - `Sandbox/assets/css/foundation/_spacing.css`
  - `Sandbox/assets/css/foundation/_radius.css`
  - `Sandbox/assets/css/foundation/_shadows.css`
  - `Sandbox/assets/css/foundation/_icons.css`
  - `Sandbox/assets/css/foundation/_breakpoints.css`
  - `Sandbox/assets/css/foundation/_motion.css`
- Theme alias layers are defined in:
  - `Sandbox/assets/css/vibtools-theme.css`
  - `Sandbox/css/vibtools-sandbox.css`
  - `Sandbox/css/sandbox-only.css`

### Data layer / backend

- No application database is present.
- No API server, ORM, authentication service, or database schema is defined in this repository.
- This is a visual design and UI validation project rather than a transactional app.

### Validation tooling

- Automated Node.js unit test suite (`npm test`):
  - `tests/tailix.test.mjs` (`16` tests verifying both `framework/js/tailix.js` and `framework/js/tailix.min.js`)
- Python validation scripts:
  - `validation/no_growth_check.py` (compact caps, `Segoe UI`, `font-weight <= 500`, zero shadows/hexes)
  - `validation/sandbox_static_check.py` (8 foundation modules, Light parity, 28 pages + 34 fragments)
- Cryptographic checksum manifest:
  - `validation/CHECKSUMS.sha256` (`sha256sum -c validation/CHECKSUMS.sha256`)
- Node syntax validation commands:
  - `npm run lint` (`server.js`, `Sandbox/js/sandbox-nav.js`, `Sandbox/js/tailwind-config.js`)
  - `node --check framework/js/tailix.js && node --check framework/js/tailix.min.js`

---

## 2) Project Architecture & Folder Structure

### Root-level organization

- `framework/` — standalone zero-Node, zero-CDN CSS & JS framework (`package.json`, `VERSION`, `LICENSE`, `css/tokens.css`, `css/tailix.css`, `css/tailix.min.css`, `css/vib-compat.css`, `js/tailix.js`, `js/tailix.min.js`, `pwa/` manifest + offline Service Worker + icons, `examples/` for Static HTML, runnable PHP `app.php`, and runnable Python `app.py`) completed across Phases 04–06.
- `tests/` — automated `node:test` unit suite (`tests/tailix.test.mjs`) completed in Phase 07.
- `README.md` — project overview and freeze baseline notes
- `MANIFEST.md` — package manifest and scope lock summary
- `AI_INSTRUCTIONS.md` — general AI working rules for this repository
- `AGENTS.md` — required workflow rules for AI agents
- `DESIGN_SYSTEM.md` & `DESIGN_SYSTEM_GUIDE.md` — central enterprise-grade design system guidelines
- `CHANGELOG_*.md` — historical release documentation and `CHANGELOG_v2_2_0.md`
- `notes/` — development-time planning, forensic audit (`001`–`005`), and Phase 01–07 session logs
- `project/` — permanent deep architectural anatomy (functions, files, modules, logic, setup, logs)
- `docs/` — official user guidelines, developer guides, and frozen architecture standards
- `components/` — component contract docs and sample markup
- `design-tokens/` — token files and Tailwind mirroring metadata
- `Sandbox/` — the active UI runtime and visual sandbox (`28` pages + `34` partial snippets)
- `preview/` — alternate preview assets / notes
- `validation/` — validation scripts and `CHECKSUMS.sha256`
- `forensic-audit/` — historical mismatch/audit records
- `references/` — source snapshot references

### Runtime application structure

- `Sandbox/index.html` — main entry page and overview dashboard
- `Sandbox/pages/` — page-specific HTML examples for forms, docs, auth, cards, tables, monitoring, etc.
- `Sandbox/js/` — global scripts such as Tailwind config and navigation controller
- `Sandbox/css/` — sandbox CSS layers for design system styling
- `Sandbox/assets/css/` — foundations and theme tokens
- `Sandbox/assets/` — asset folders and branding resources

### Documentation and design system structure

- `docs/` contains numbered design and validation documents covering:
  - scope lock
  - design sheet
  - source extraction notes
  - mismatch audits
  - size guardrails
  - section patterns
  - accessibility and motion
  - Tailwind CDN implementation guide
  - final lock summaries
- `components/compact-components.html` and `components/component-contracts-tailwind-cdn.md` describe reusable UI contracts
- `design-tokens/*.json` and `*.css` capture the token system used by the runtime

---

## 3) Key Business Logic, Features, and Active Modules

This repository is a UI design validation and showcase project, not a traditional business app with user accounts or transactional logic.

### Main active modules

- Overview / landing page
- Home page
- Projects page
- Contact page
- Docs layout page
- Dashboard shell
- Monitoring page
- Upload files page
- Settings & API Keys Management page (`settings.html`)
- Typography and colors token page
- Login / Register / Profile pages
- Forms library and form states
- Tables and data panels
- Cards and navigation patterns
- Logs modal / UI state overlays
- System Error Pages (404 / 500)
- Global Notification System (Toasts and Modals)
- User & Team Management Module (`users.html`)
- Billing & Analytics Usage Module (`billing.html`)
- Plugin Directory & Marketplace Module (`plugins.html`)

### Feature intent

The primary purpose is to present a compact and consistent visual system for:

- brand UI validation
- token-driven styling
- component exploration
- static reference pages for product design patterns
- documentation alignment with implemented UI runtime

### Business logic present in runtime code

The code is largely front-end interaction logic rather than domain business logic:

- Sidebar grouping and active-state highlighting in `Sandbox/js/sandbox-nav.js`
- Table filtering, search, sorting, and row selection behavior in `Sandbox/js/sandbox-nav.js`
- Log modal row search/filter logic in the same script
- Real-time search and filter logic for sandbox overview cards in `Sandbox/index.html`
- Tailwind alias configuration mapping design tokens to CSS variables
- Global Toast Notifications (`toast-manager.js`) and Dynamic Modals (`modal-manager.js`)
- No real user workflow engine, persistence, or business transaction processing

---

## 4) Coding Conventions and Rules Used in This Project

### Naming conventions

- HTML and CSS classes are strongly prefixed with `vib-` for custom sandbox styling and UI components.
- Example patterns include `vib-shell`, `vib-topbar`, `vib-card`, `vib-sidebar`, `vib-badge`, `vib-table`, `vib-log-row`.
- The codebase favors explicit, component-oriented class names over generic utility-only naming.

### Styling approach

- Styling is driven by CSS variables and token layers rather than direct hard-coded colors.
- An 8-Module Token Foundation Engine is used to keep the UI visually aligned and theme-consistent.
- Legacy variable aliases are intentionally bridged to foundation variables to maintain freeze stability.
- All 8 foundation module version headers are aligned to v2.2.0. Phase 3 audit confirmed zero duplicate variable declarations and zero un-tokenized hardcodes across the entire Sandbox codebase.
- **Phase 4 — Framework Architecture Step 1 (2026-09-10):** A modular JS framework layer has been established under `Sandbox/js/framework/`. Includes `event-bus.js` (pub/sub singleton) and `shell-manager.js` (dynamic layout shell injector). Pages opt in via `data-vib-shell` on `<body>`. A master template `Sandbox/pages/_template.html` serves as the scaffold for all future feature pages.
- **Phase 4 — Framework Architecture Step 2 (2026-09-10):** Implemented `table-controller.js` and `form-controller.js` as reusable framework engines that consume the v2.2.0 foundation tokens to power all upcoming features. Integrated CSS state classes for errors and loading without hardcoded hexes. Demonstrated integration within `_template.html`.
- **Phase 4 — Framework Architecture Step 3 (2026-09-10):** Finalised framework architecture polish. Wired all 4 variants (`success`, `danger`, `warning`, `info`) in `toast-manager.js` to strictly consume `--state-*` foundation tokens. Added accessibility attributes (`role="dialog"`, `aria-modal`) to `modal-manager.js`. **Framework Architecture Phase is 100% COMPLETE.**
- **Deep Forensic UI Audit (2026-09-10):** Executed a master codebase audit to remove all oversized fonts, bloated layout spacing, and giant headers across all Sandbox pages. All pages strictly align with the compact baseline (body text = 13px, header max = 16px/18px, compact card gaps).

### JavaScript conventions

- Files use an IIFE wrapper (`(function () { ... })();`) to keep scope isolated.
- `'use strict';` is used in the main runtime script.
- Vanilla DOM APIs are preferred over frameworks.
- The code is written for static browser execution and compatibility with a minimal runtime environment.

### Architecture constraints

- Do not redesign the app or replace the static runtime with a framework unless explicitly requested.
- Preserve existing established UI structure, naming patterns, and token system.
- Treat this as a frozen baseline project with documentation synchronized to runtime.

### Quality and validation expectations

- Validate changes with the repo’s existing static checks and syntax checks when applicable.
- Keep UI changes consistent with the frozen visual design system.
- Do not introduce dependency churn or architecture drift without explicit approval.

---

## 5) Current Working Mental Model for AI Agents

This project should be treated as:

- a static front-end design sandbox,
- a token-driven UI system,
- a documentation-locked release baseline,
- a visual validation package for compact web UI patterns.

The safest default is to preserve the runtime, respect the design token architecture, keep docs aligned with implementation, and make only the smallest valid change needed for the user’s request.

---

## 6) Memory Maintenance Rule

This file exists as the canonical memory dump for the project. Future work should update it whenever the project changes materially in scope, runtime behavior, architecture, dependencies, or feature set.
