# Phase 03 Plan: Unified Shell, Theme Toggle Parity, Defensive JS Guards & Validation Repair

> **Status**: COMPLETED (`2026-11-17`)  
> **Bugs Addressed**: `BUG-08`, `BUG-09`

## 1. Strict Scope Lock
- **Allowed Files**:
  - `Sandbox/js/sandbox-nav.js`, `Sandbox/js/framework/shell-manager.js`, `Sandbox/js/framework/table-controller.js`, `Sandbox/js/components/toast-manager.js`, `Sandbox/js/components/modal-manager.js`
  - Topbar/Sidebar/Theme init wiring across Sandbox HTMLs + CSS link self-containment decision for sub-fragments
  - `validation/CHECKSUMS.sha256`, `validation/no_growth_check.py`, `validation/sandbox_static_check.py`
  - `CHANGELOG_v2_1_2.md` (filename/header clarity note without rewriting history)
- **Forbidden Out-of-Scope**: `framework/*`, `Sandbox/assets/css/foundation/*`, `server.js`, `package.json`.

## 2. Exact Implementation Tasks (Executed)
1. **Unify Theme Toggle & Sidebar Navigation Across All 28 Top-Level Sandbox Pages (`Sandbox/js/sandbox-nav.js`, `Sandbox/js/framework/shell-manager.js`)**:
   - Applied `localStorage['vib-theme']` on immediate script load and during `init()` in `sandbox-nav.js`, injected `#vib-theme-toggle` + `#vib-sidebar-toggle` on static topbars, guarded double-binding via `dataset.vibThemeBound` / `dataset.vibSidebarBound`, wrapped labels inside `<span class="vib-sidebar-label">`, assigned `id="vib-sidebar"`, persisted collapsed state (`localStorage['vib-sidebar-collapsed']`), and backfilled `Users`, `Billing`, `Settings`, `Plugins`, `404 Error`, `500 Error` so every sidebar page displays all `27` canonical links.
   - **Sub-Fragment HTML Decision (`Sandbox/pages/{cards,forms,Navigation}/*.html`)**: Source audit confirmed none of the `34` sub-fragments are fetched or executed standalone; `card-playground.js`, `form-playground.js`, and `navigation-playground.js` link them purely as `<a class="vib-component-source" href="...">Source snippet</a>` references. Kept all `34` files as clean partial snippets and validated them directly inside `validation/sandbox_static_check.py`.
2. **Harden JS Defensive Guards (`table-controller.js`, `toast-manager.js`, `modal-manager.js`)**:
   - Added fail-fast constructor guards (`!opts` and invalid `{ container }`), normalized array & positive `pageSize` options, guarded `setData()`, and wrapped `onAction(...)` in `try/catch`.
   - Hardened `toast-manager.js` (`document.body` guard, unknown `type` -> `'info'` fallback, finite `duration`, `Error` message extraction) and `modal-manager.js` (`document.body` / options / null `modal` guards, `onConfirm` catch, `!this.activeModal` scroll restore guard).
3. **Repair & Upgrade `validation/` Scripts & Changelog Clarity**:
   - Updated `CHANGELOG_v2_1_2.md` title/archive clarity header pointing to `CHANGELOG_v2_2_0.md` without modifying historical entries.
   - Extended `validation/no_growth_check.py` (CSS hex/shadow/weight/`Segoe UI` bounds) and `validation/sandbox_static_check.py` (`28` HTMLs + `34` partial snippets + Light/Dark tokens + JS markers); regenerated `validation/CHECKSUMS.sha256` (`205` actual files).

## 3. Verification Proof
- `node --check` passed on all `5` modified JS files (`0` errors).
- `python3 validation/no_growth_check.py` (`PASS`), `python3 validation/sandbox_static_check.py` (`PASS`), `sha256sum -c validation/CHECKSUMS.sha256 --quiet` (`SHA256 PASS`).
- Chromium Playwright runtime checks (`plugins.html`, `cards.html`, `404.html`, `500.html`): `0` console errors; `TableController` / `VibToast` / `VibModal` guards verified; all `27` sidebar links and `#vib-theme-toggle` verified.
- Noted pre-existing out-of-scope CSS artifact: `Sandbox/css/sandbox-only.css:10` sets `width: var(--space-12, 3rem)` (`24px` via `_spacing.css`), clipping `33px` `.vib-sidebar-link` icons when collapsed.
