# 005: Actual Implementation Status Ledger

> **Updated Baseline**: `2026-11-17` (Post-Phase 07 Execution — All 7 Phases Complete)  
> **Rule**: Records ONLY what is factually verified working, partially working/broken, or unimplemented in actual source code. Updated after every completed phase.

---

## 1. Actually Working Right Now

| Feature | Location | Verified Behavior |
|---|---|---|
| Express Static Preview Server | `server.js:1–28` | Serves workspace root on port `3000`, redirects `/` → `/Sandbox/index.html`, falls back to `Sandbox/pages/404.html` |
| `Tailix` CSS Core Tokens, Light Parity & Flat Mode | `framework/css/tokens.css` | Dark/Light token parity (`--text-on-accent`, `--modal-backdrop-bg`, `--focus-outline-color`, `--selection-*`, `--font-weight-bold: 500`), `36` `--tx-*` aliases, `html[data-radius="sharp\|flat\|0"]` `0rem` square geometry |
| `Tailix` CSS Complete Component Suite (`tailix.css`) | `framework/css/tailix.css`, `tailix.min.css` | Zero hexes/blur/bold; shells, cards, buttons, forms, tables, modals, toasts, tabs, dropdowns, mobile offcanvas sidebar + backdrop (`<= 768px`), breadcrumbs, log badges, icons (`.tx-icon-*`), spinners, progress meters, accordions, tooltips, input addons/password reveal, code blocks, API method badges, radio cards, dismissible chips, range slider, utilities |
| `Tailix` JS Declarative, Accessible & Mobile-Aware Engine | `framework/js/tailix.js`, `tailix.min.js` | `Tailix.bus`, `icon`/`icons` (`28` built-in SVGs + `[data-tx-icon]` hydration), `toast`, `modal` (`Tab` focus trap), `theme`, `sidebar` (mobile offcanvas drawer + backdrop + Escape/resize/outside close + safe selector guard), `Form` (safe regex & `clearFieldError`), `Table` (numeric sort & `...` pagination), `[data-tx-accordion]`, `.tx-password-toggle`, `[data-tx-copy]` (active-tab aware), `[data-tx-chip-close]`, `.tx-radio-card` sync |
| Standalone Packaging, PWA & `.vib-*` Compatibility Bridge | `framework/package.json`, `VERSION`, `LICENSE`, `framework/pwa/*`, `framework/css/vib-compat.css` | Zero-dependency `tailix-ui@2.2.0` package metadata, active offline-first Service Worker (`sw.js`) & `manifest.json` (`192`/`512`/`maskable`/`apple-touch-icon` PNGs + `icon.svg`), and `.vib-*` zero-CDN token bridge (`0` hexes, `0` shadows) |
| Standalone A-Z Component Hub & Live PHP/Python Starters | `framework/examples/static.html`, `sw.js`, `app.php`, `app.py`, `php-snippet.md`, `python-snippet.md` | Full A-Z Hub (`static.html`) with PWA install prompt, offline indicator, `Sharp 0px` toggle, Phase 05 extended components, `.vib-*` bridge demo, plus runnable `app.php` & `app.py` |
| Unified Sandbox Token SSOT & Light-Mode CSS | `Sandbox/assets/css/foundation/*`, `vibtools-theme.css`, `vibtools-sandbox.css`, `design-tokens/*` | Single `vibtools-theme.css` SSOT (`0` duplicate `:root` overrides, `0` hardcoded hexes in `vibtools-sandbox.css` & `sandbox-only.css`), full Dark/Light contrast on Cards, Forms & Navigation playgrounds, `design-tokens/` synced to `v2.2.0`, Tailwind `fontSize`/`vib-full`/`topbarBg`/`stateInfo*` mapped cleanly |
| Smooth Compact Typography & Flat Geometry | `_typography.css`, `_radius.css`, `tailwind-config.js`, Sandbox CSS/HTML/JS | Unified `"Segoe UI"` stack (`0` `Inter`), `font-weight <= 500` (`0` `font-semibold`), `0` non-`none` `box-shadow` in Sandbox CSS, `--radius: 0rem` + `html[data-radius="sharp\|flat\|0"]` flat override verified (`0px` computed) |
| Dynamic Shell Pages (`2` pages) | `Sandbox/pages/_template.html`, `Sandbox/pages/plugins.html`, `shell-manager.js` | Runtime Topbar/Sidebar injection, `#vib-theme-toggle` Dark/Light persistence, `#vib-sidebar-toggle` collapse, `27` nav links |
| Unified Sandbox Shell Navigation & Theme Persistence (`28` pages) | `Sandbox/js/sandbox-nav.js`, `Sandbox/js/framework/shell-manager.js`, `28` top-level HTMLs | Immediate `localStorage['vib-theme']` Light/Dark boot & cross-page persistence, `#vib-theme-toggle` injected across all `28` pages, `#vib-sidebar-toggle` collapse state, unified `27`-link canonical sidebar across all sidebar pages |
| Hardened Sandbox JS Controllers & Overlays | `table-controller.js`, `toast-manager.js`, `modal-manager.js`, `form-controller.js`, `event-bus.js` | Fail-fast `{ container }` constructor guards, `try/catch` action/confirm handlers, unknown toast type `'info'` fallback, rapid-reopen modal scroll lock guard, field validation & table sort/filter/pagination |
| Automated Unit Tests (`node:test`), Validation & Checksums | `tests/tailix.test.mjs`, `validation/sandbox_static_check.py`, `no_growth_check.py`, `CHECKSUMS.sha256` | `16/16` passing `node:test` unit assertions across `tailix.js` & `tailix.min.js`, static validator scanning all `28` HTMLs + `34` partial snippets + Sandbox CSS/JS, and full cryptographic `CHECKSUMS.sha256` verification |
| Settings Page & Interactions (`Sandbox`) | `Sandbox/pages/settings.html`, `forms/settings-components.js`, `forms/settings-page.js` | Clean HTML structure, all 7 visible settings sections + header/plan/sidebar rendered, Search filter, Copy/Mask/Rotate/Revoke/Generate API Key modal, Add/Remove Webhook, Reset Settings confirmation modal via `VibToast`/`VibModal` |
| Inline SVG Icon Strokes & Topbar Icon Sizing | `index.html`, `404.html`, `500.html`, `toast-manager.js`, `modal-manager.js`, `settings-components.js`, 12 topbar HTMLs | `26×` `stroke-width="var(--icon-stroke)"` (`1.5px` computed), `0` mojibake/BOM errors, token-sized `w-[var(--icon-lg)] h-[var(--icon-lg)]` brand icons |

---

## 2. Partially Working / Broken Right Now

| Feature | Location | Exact Failure |
|---|---|---|
| Sandbox Collapsed Sidebar CSS Width | `Sandbox/css/sandbox-only.css:10` | Pre-existing `width: var(--space-12, 3rem)` evaluates to `24px` (`--space-12: 24px` in `_spacing.css`), clipping `33px`-wide collapsed `.vib-sidebar-link` icons |

---

## 3. Not Implemented / Pending

| Missing Feature | Target Phase |
|---|---|
| None — All 7 Planned Phases (`BUG-01`..`BUG-17`) Implemented & Verified | Complete (`7/7`) |
