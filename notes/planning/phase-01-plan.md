# Phase 01 Plan: Sandbox Broken Page, Encoding & SVG Icon Repair

> **Status**: **COMPLETED** (`2026-11-17`)  
> **Bugs Addressed**: `BUG-01`, `BUG-02`, `BUG-03`, `BUG-04`

## 1. Strict Scope Lock
- **Allowed Files**:
  - `Sandbox/pages/settings.html`
  - `Sandbox/pages/forms/settings-components.js`
  - `Sandbox/pages/forms/settings-page.js`
  - `Sandbox/index.html`, `Sandbox/pages/{404,500}.html`, `Sandbox/js/components/toast-manager.js`, `Sandbox/js/components/modal-manager.js` (SVG `stroke-[var(--icon-stroke)]` fix)
  - `Sandbox/pages/{cards,dashboard-shell,forms,login,navigation,profile,register,upload,about,contact,docs-layout,home,projects,typography-colors,_template}.html` (mojibake, UTF-8 BOM, and `width="28" height="28"` topbar icon fix only)
- **Forbidden Out-of-Scope**: `framework/*`, `Sandbox/css/*`, `Sandbox/assets/css/*`, `design-tokens/*`, `validation/*`, `server.js`, `package.json`.

## 2. Exact Implementation Tasks
1. **Restore `Sandbox/pages/settings.html`**:
   - Stripped pasted tool header (`L1–2`: `format: <line_number>...`) and footer (`L100–101`).
   - Added `../js/components/toast-manager.js` & `../js/components/modal-manager.js`.
   - Restored clean `<main class="vib-main">` structure + replaced `width="28" height="28"` with `class="w-[var(--icon-lg)] h-[var(--icon-lg)]"`.
2. **Complete `Sandbox/pages/forms/settings-components.js` & `settings-page.js`**:
   - Populated all `6` empty modules (`settings-header`, `settings-plan`, `settings-sidebar`, `settings-general`, `settings-appearance`, `settings-integrations`) + fixed `.vib-settings-card` wrapper inside `settings-security`.
   - Replaced undefined `onclick="showToast(...)"` (`2×`) with `VibToast` / `VibModal` delegated handlers (Copy, Mask toggle, Rotate, Revoke modal, Generate New API Key modal, Webhook add/remove, Reset settings modal, Search filter, Sidebar nav active state).
   - Fixed mojibake (`vib_sk_test_•...`, `vib_live_•...`, `vib_test_•...`), replaced hardcoded `rgb(...)` / `hover:text-red-400` fallbacks with CSS foundation tokens, and aligned non-link table/label tokens to `--vib-text`.
3. **Fix Broken `stroke-[var(--icon-stroke)]` (`26×`)**:
   - Replaced `stroke-[var(--icon-stroke)]` attribute class with valid `stroke-width="var(--icon-stroke)"` across `Sandbox/index.html` (`8×`), `404.html` (`3×`), `500.html` (`4×`), `toast-manager.js` (`5×`), `modal-manager.js` (`1×`), and `settings-components.js` (`5×`).
4. **Fix `width="28" height="28"` (`12×`), UTF-8 Mojibake (`9×` HTML lines) & BOM (`3×`)**:
   - Replaced `width="28" height="28"` on topbar logos with `class="w-[var(--icon-lg)] h-[var(--icon-lg)]"` across all `12` HTML files.
   - Fixed `â€”` mojibake in `8` HTML titles + `â€¢` password placeholder in `register.html:83`, and stripped `\ufeff` BOM from `404.html`, `500.html`, `_template.html`.

## 3. Verification Proof (`2026-11-17`)
- `npm run lint` + `node --check` on all modified JS modules passed (`0` syntax errors).
- Static re-audit across all `Sandbox/**/*.html` & `Sandbox/**/*.js`: `0` issues (`stroke-[var(--icon-stroke)]`: `0`, `width="28"`: `0`, mojibake: `0`, BOM: `0`, `showToast(`: `0`, empty `settings-components.js` HTML: `0`).
- Playwright Chromium verification on `settings.html`, `index.html`, `404.html`, and `500.html`: `0` JS console errors, `getComputedStyle(svg).strokeWidth === "1.5px"`, all interactive toast/modal/webhook/API-key flows verified live.

