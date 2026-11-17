# Phase 05 Plan: `framework/` Mobile Drawer, Built-in Icons & Complete Component Suite

> **Status**: COMPLETED (`2026-11-17`)  
> **Bugs Addressed**: `BUG-14`, `BUG-15` (Verified via Node unit tests + Headless Chromium Desktop Dark/Light & Mobile 375x812)

## 1. Strict Scope Lock
- **Allowed Files**:
  - `framework/css/tokens.css` (only if additional semantic tokens needed cleanly)
  - `framework/css/tailix.css`, `framework/css/tailix.min.css`
  - `framework/js/tailix.js`, `framework/js/tailix.min.js`
- **Forbidden Out-of-Scope**: `Sandbox/*`, `design-tokens/*`, `validation/*`, `server.js`, `framework/examples/*`.

## 2. Exact Implementation Tasks
1. **Fix `BUG-14` (`tailix.css:1296–1312` & `tailix.js`) — Mobile Offcanvas Drawer (`<= 768px`)**:
   - On `@media (max-width: 768px)`, convert `.tx-sidebar` into a slide-in offcanvas drawer (`position: fixed`, hidden offscreen by default on mobile unless `[data-mobile-open="true"]`) with `.tx-sidebar-backdrop` and Escape/click-outside dismissal in `tailix.js`.
   - Preserve desktop collapsible rail (`width: var(--width-sidebar-collapsed)`) cleanly above `768px`.
2. **Add Built-In Zero-Dependency SVG Icon System (`Tailix.icon` / `[data-tx-icon]`)**:
   - Bundle compact 16px outline SVG icon registry (`home`, `dashboard`, `users`, `settings`, `search`, `menu`, `sun`, `moon`, `plus`, `check`, `x`, `alert`, `info`, `chevron-down`, `copy`, `upload`, `eye`, `terminal`, etc.) consuming the unused `--icon-xs..2xl` & `--icon-stroke` tokens from `tokens.css:200–206`.
3. **Add Missing Core Compact Components (Closing the 44 Unused Tokens & `.vib-*` Gap)**:
   - `.tx-breadcrumb-item`, `.tx-breadcrumb-sep` (completing `.tx-breadcrumb` at `L1132`)
   - `.tx-spinner` (+ size variants, reusing `@keyframes tx-spin`) & `.tx-progress` / `.tx-progress-fill`
   - `.tx-accordion` / `[data-tx-accordion]` collapsible sections
   - `.tx-tooltip` / `[data-tx-tooltip]` pure-CSS/accessible tooltip
   - `.tx-input-group` (prefix/suffix icon, `.tx-password-toggle` reveal button)
   - `.tx-code-block`, `.tx-code-tabs`, `[data-tx-copy]` copy-to-clipboard button with automatic toast/badge feedback
   - `.tx-method` (`GET`/`POST`/`PUT`/`DELETE` API badges) & `.tx-log-badge-*` (consuming unused `--log-info/warning/success-*` tokens from `tokens.css:129–134`)
   - `.tx-radio-card`, `.tx-chip` (+ dismissible), `.tx-slider` (styled range input)
4. **Rebuild `tailix.min.css` & `tailix.min.js`**.

## 3. Verification Criteria
- At `375×812` mobile viewport, sidebar does NOT push `<main>` offscreen on initial load; clicking `[data-tx-sidebar-toggle]` opens drawer with backdrop and closes on backdrop/Escape.
- Every newly added component renders in both Dark & Light themes with zero shadows and crisp compact proportions.
