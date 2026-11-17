# Phase 02 Plan: Unified Design Tokens, Typography, Flat Geometry & Light-Mode CSS

> **Status**: COMPLETED (`2026-11-17T14:00:00-08:00`)  
> **Bugs Addressed**: `BUG-05`, `BUG-06`, `BUG-07`

## 1. Strict Scope Lock
- **Allowed Files**:
  - `Sandbox/assets/css/foundation/_typography.css`, `_radius.css`, `_colors.css`
  - `Sandbox/assets/css/vibtools-theme.css`
  - `Sandbox/css/vibtools-sandbox.css`, `Sandbox/css/sandbox-only.css`
  - `Sandbox/js/tailwind-config.js`, `design-tokens/*`
  - `font-semibold` & arbitrary bracket cleanup in `Sandbox/js/framework/table-controller.js` + Sandbox HTML/JS (excluding `sandbox-nav.js` and `shell-manager.js`)
- **Forbidden Out-of-Scope**: `framework/*`, `Sandbox/js/sandbox-nav.js`, `Sandbox/js/framework/shell-manager.js`, `validation/*`, `server.js`, `package.json`.

## 2. Exact Implementation Tasks (Completed)
1. **Font Stack & Weight Alignment**:
   - Updated `_typography.css`, `tailwind-config.js`, `design-tokens/vibtools.compact.tokens.json`, `design-tokens/vibtools.compact.tokens.css`, and `vibtools.tailwind-cdn.config.js` to use `"Segoe UI", "Segoe UI Web", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif`.
   - Normalized `--font-weight-bold` to `500`, normalized all `600/650/700/750/800` weights in `vibtools-sandbox.css` & `vibtools.compact.tokens.css` to `500`, and replaced all `21×` `font-semibold` classes across `table-controller.js`, `billing.html`, `plugins.html`, `tables.html`, and `users.html` with `font-medium`.
2. **Zero-Shadow & Radius Alignment**:
   - Replaced `box-shadow: 0 0 0 2px var(--state-danger-border);` in `Sandbox/css/sandbox-only.css` with `outline: 1px solid var(--state-danger-border); box-shadow: none;`, replaced `4×` `shadow-[var(--shadow-overlay)]` utilities with `shadow-none`, and verified `0` non-`none` box-shadows in `vibtools-sandbox.css` / `sandbox-only.css`.
   - Added `--radius: 0rem;`, `--radius-preset: 0rem;`, and `html[data-radius="sharp|flat|0"]` flat overrides in `_radius.css`; tokenized pixel radii in `vibtools-sandbox.css`; added `'vib-full': 'var(--vib-radius-full)'` to `tailwind-config.js`.
3. **Eliminate Triple `:root` Redundancy & 75 Dark-Only Hexes in `vibtools-sandbox.css`**:
   - Consolidated `vibtools-sandbox.css` (`2,869` → `2,153` lines) onto `vibtools-theme.css` SSOT, keeping only the `sandbox_static_check.py`-required alias bridge, and replaced all hardcoded hexes & dark-only `rgba(...)` values with Dark/Light-reactive foundation tokens.
4. **Synchronize `design-tokens/` & Reduce Tailwind Arbitrary Sprawl**:
   - Aligned `design-tokens/vibtools.tailwind-cdn.config.js` and `design-tokens/vibtools.compact.tokens.css` to `v2.2.0` + added `fontSize` tokens (`vib-2xs`–`vib-xl`) and `topbarBg` / `stateInfo*` / `vib-full` to `tailwind-config.js`.
   - Reduced Sandbox arbitrary bracket utilities from `593` → `194` (`188` structural sizing/motion brackets in Phase-02 files + `6` in out-of-scope `shell-manager.js`).

## 3. Verification Proof
- Static check (`Sandbox/css/vibtools-sandbox.css` & `sandbox-only.css`): `hexes: []`, `non-none shadows: []`, `weights >= 600: []`, `font-semibold: []`, `Inter: []`.
- `python3 validation/sandbox_static_check.py`: `PASS: v2.2.0 8-module token foundation baseline verified`.
- `node --check` on all 8 edited JS files: `0` errors.
- Chromium Playwright verification (`cards.html`, `forms.html`, `navigation.html`, `settings.html`, `plugins.html`): `0` console errors; `"Segoe UI"` computed; `headingWeight: "500"`; `data-radius="sharp"` yields `borderRadius: "0px"`; Light mode settles cleanly (`bg: rgb(246, 248, 250)`, `cardBg: rgb(255, 255, 255)`, `inputBg: rgb(255, 255, 255)`).
