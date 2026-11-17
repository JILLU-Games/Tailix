# Project Log: Phase 04 — `framework/` Core JS Bug Fixes & CSS Light-Mode Parity

- **Date**: `2026-11-17T14:15:30-08:00`
- **Phase**: `Phase 04` (`BUG-10`, `BUG-11`, `BUG-12`, `BUG-13`)
- **Scope Lock**: Strictly applied within `framework/css/{tokens,tailix,tailix.min}.css` and `framework/js/{tailix,tailix.min}.js`.

## Summary of Implemented Changes
1. **Dropdown Click-Outside & Menu-Item Close (`framework/js/tailix.js`)**:
   - Checked `[data-tx-dropdown]` / `[data-tx-dropdown-trigger]` prior to early returns on theme, sidebar, toast, modal, and tab controls, closing open menus automatically when clicking outside or selecting a `.tx-dropdown-item`.
2. **Modal Keyboard Accessibility (`framework/js/tailix.js`)**:
   - Added `getFocusableElements()` and `trapModalFocus(e)` on global `keydown` so `Tab` and `Shift+Tab` cycle strictly inside active `.tx-modal` dialogs.
3. **Table Controller Consolidation & Defensive Selector Guards (`framework/js/tailix.js`, `tailix.css`)**:
   - Routed `initDeclarativeTable` through `_internals.filterAndSortRows` (enabling numeric sorting parity such as `4ms` < `12ms` < `84ms` and removing duplicated sort code), added `buildPageWindow()` with `.tx-page-ellipsis` (`...`) when `totalPages > 7`, and replaced inline empty-row styles with `.tx-table-empty`.
   - Added safe `try/catch` guards around `new RegExp(rule.pattern)` and `document.querySelector(selector)` (`sidebar` & `data-tx-modal-target`), plus attribute-safe iteration in `Form.prototype.clearFieldError`.
4. **Light Theme Parity, Flat Geometry & Minified Bundles (`tokens.css`, `tailix.css`, `tailix.min.{css,js}`)**:
   - Added Light/Dark `--text-on-accent`, `--modal-backdrop-bg`, `--focus-outline-color`, `--selection-bg/text`, `--tx-on-primary`, `--tx-on-danger`, `--tx-modal-backdrop`, capped `--font-weight-bold: 500`, and added `html[data-radius="sharp|flat|0"]` `0rem` mode.
   - Removed all `4×` `#FFFFFF` hardcodes, removed `backdrop-filter: blur(8px)` from `.tx-topbar`, softened `.tx-sidebar-group-title` weight to `500`, and rebuilt `tailix.min.css` (`34,670` B) & `tailix.min.js` (`26,483` B).

## Verification Proof
- `node --check` + Node unit tests passed on both `tailix.js` and `tailix.min.js`.
- Static CSS scan confirmed `0` hardcoded hexes, `0` blur, `0` `--font-weight-bold` in `tailix.css`.
- Headless Chromium Playwright runtime check on `framework/examples/static.html` passed with `0` console/warning messages across Light & Dark captures and all interactive journeys.
- Out-of-scope files (`Sandbox/*`, `design-tokens/*`, `validation/*`, `server.js`, `package.json`, `framework/examples/*`) verified completely untouched.
