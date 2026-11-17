# Phase 04 Plan: `framework/` Core JS Bug Fixes & CSS Light-Mode Parity

> **Status**: COMPLETED (`2026-11-17`)  
> **Bugs Addressed**: `BUG-10`, `BUG-11`, `BUG-12`, `BUG-13`

## 1. Strict Scope Lock
- **Allowed Files**:
  - `framework/css/tokens.css`
  - `framework/css/tailix.css`
  - `framework/css/tailix.min.css`
  - `framework/js/tailix.js`
  - `framework/js/tailix.min.js`
- **Forbidden Out-of-Scope**: `Sandbox/*`, `design-tokens/*`, `validation/*`, `server.js`, `framework/examples/*`.

## 2. Exact Implementation Tasks (Executed)
1. **Fix `BUG-10` (`framework/js/tailix.js`) — Dropdown Click-Outside Early Return**:
   - Checked `[data-tx-dropdown]` and `[data-tx-dropdown-trigger]` at the start of the global click handler so clicking `[data-tx-theme-toggle]`, `[data-tx-sidebar-toggle]`, `[data-tx-modal-target]`, `[data-tx-tab]`, `[data-tx-toast]`, or a `.tx-dropdown-item` / `[data-tx-dropdown-close]` item closes any open dropdown before early-returning.
2. **Fix `BUG-11` (`framework/js/tailix.js`) — Modal `Tab` Focus Trap**:
   - Added `getFocusableElements()` and `trapModalFocus(e)` so `Tab` and `Shift+Tab` cycle strictly inside the active `.tx-modal` dialog.
3. **Fix `BUG-12` (`framework/js/tailix.js` & `tailix.css`) — Table Controller Refactor**:
   - Unified `initDeclarativeTable` directly onto `_internals.filterAndSortRows` (adding numeric unit sorting parity such as `4ms`, `12ms`, `84ms`, `146ms` and removing duplicate sort/filter logic).
   - Added `buildPageWindow(current, total)` (also exposed on `_internals`) rendering `.tx-page-ellipsis` (`...`) when `totalPages > 7`.
   - Removed inline `emptyTd.style.textAlign` / `emptyTd.style.padding` and styled empty states cleanly with `.tx-table-empty`.
4. **Harden `tailix.js` Defensive Selectors (`004_ERROR_HANDLING_SPEC.md`)**:
   - Wrapped `new RegExp(rule.pattern)` in `validateValue`, `document.querySelector(sel)` in `sidebar.setCollapsed` / `sidebar.toggle` and `data-tx-modal-target`, and replaced attribute-interpolated selector in `Form.prototype.clearFieldError` with safe `.tx-field-error-msg` iteration comparing `getAttribute('data-tx-for') === name`.
5. **Fix `BUG-13` (`framework/css/tokens.css` & `tailix.css`) — Light Theme Parity, Flat UI & Zero-Radius Option**:
   - Added `--text-on-accent`, `--modal-backdrop-bg` (`rgba(8, 11, 17, 0.72)` Dark / `rgba(15, 23, 42, 0.42)` Light), `--focus-outline-color`, `--selection-bg`, and `--selection-text` across both Dark & Light themes, plus `--tx-on-primary`, `--tx-on-danger`, `--tx-modal-backdrop`, and `--font-weight-bold: 500`.
   - Replaced all `4×` hardcoded `#FFFFFF` in `tailix.css` with `--tx-on-primary` / `--tx-on-danger`, replaced hardcoded modal backdrop with `var(--tx-modal-backdrop)`, removed `backdrop-filter: blur(8px)` from `.tx-topbar`, and softened `.tx-sidebar-group-title` to `var(--font-weight-medium)`.
   - Added `--radius: 0rem;`, `--radius-preset: 0rem;`, and `html[data-radius="sharp"|"flat"|"0"]` flat geometry rules in `tokens.css`.
6. **Rebuild Minified Bundles**: Rebuilt `framework/css/tailix.min.css` (`34,670` bytes) and `framework/js/tailix.min.js` (`26,483` bytes).

## 3. Verification Proof
- `node --check` passed on both `framework/js/tailix.js` and `framework/js/tailix.min.js`.
- Node `vm` unit tests passed on BOTH `tailix.js` and `tailix.min.js` (`validateValue` bad regex guard, `filterAndSortRows` numeric latency sort asc/desc, `buildPageWindow`, `escapeHtml`).
- Static CSS check: `0` hardcoded hexes/blur/`--font-weight-bold` remaining in `tailix.css`.
- Headless Chromium Playwright check on `http://localhost:3000/framework/examples/static.html`:
  - `0` console errors / `0` warnings; Light & Dark screenshots inspected (`phase04-light-modal.png`, `phase04-dark-desktop.png`).
  - Verified dropdown closes on `#ex-theme-toggle` click, Light modal backdrop renders `rgba(15, 23, 42, 0.42)`, `Tab` wraps `Deploy Now` → `Close` and `Shift+Tab` wraps back inside `.tx-modal`, Latency column sorts `["4ms","12ms","84ms"]`, `.tx-table-empty` renders with `style === null`, `Tailix.sidebar.toggle('[invalid-selector') === false`, `clearFieldError('user[email]')` succeeds safely, `data-radius="sharp"` sets card border-radius to `0px`.
