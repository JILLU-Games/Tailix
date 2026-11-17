# Phase 06 Plan: `framework/` Packaging, PWA Support, `.vib-*` Bridge & PHP/Python Apps

> **Status**: COMPLETED (`2026-11-17`)  
> **Bugs Addressed**: `BUG-16` (Verified via Python/Node syntax & manifest checks + Headless Chromium PWA/Service Worker/Bridge/Hub verification)

## 1. Strict Scope Lock
- **Allowed Files**:
  - `framework/package.json`, `framework/VERSION`, `framework/LICENSE`
  - `framework/css/vib-compat.css` (optional `.vib-*` → `--tx-*` migration bridge)
  - `framework/pwa/manifest.json`, `framework/pwa/sw.js` (+ PWA `<link rel="manifest">` / service worker registration in `framework/examples/static.html` & `Sandbox/` if requested)
  - `framework/examples/*` (`static.html` A-Z Component Hub upgrade + runnable `php-demo.php` / `python-demo.py` templates + updated `php-snippet.md` / `python-snippet.md`)
- **Forbidden Out-of-Scope**: Breaking changes to `framework/css/tokens.css`, `framework/js/tailix.js` public signatures, `Sandbox/` internal features, or `server.js` core routing.

## 2. Exact Implementation Tasks
1. **Standalone Framework Packaging**:
   - Create `framework/package.json` (`zero dependencies`, exports CSS/JS/tokens paths cleanly), `framework/VERSION` (`2.2.0` or release tag), and `framework/LICENSE` (MIT).
2. **Progressive Web App (PWA) Support**:
   - Create clean PWA Web Manifest (`manifest.json`), offline-first cache Service Worker (`sw.js` caching `tailix.min.css` & `tailix.min.js`), SVG/PNG app icons, and lightweight optional install prompt helper in `framework/examples/static.html`.
3. **Optional `.vib-*` Compatibility Bridge**:
   - Create `framework/css/vib-compat.css` mapping core legacy `.vib-*` class names (`vib-card`, `vib-btn*`, `vib-input`, `vib-sidebar*`, `vib-topbar`, `vib-table*`, `vib-badge`) onto `tokens.css` + `tailix.css` rules so existing Sandbox/legacy HTML pages can run without Tailwind CDN.
4. **Upgrade `framework/examples/`**:
   - Expand `framework/examples/static.html` into a complete zero-CDN A-Z showcase covering all Phase 05 components (icons, accordion, tooltip, spinner, progress, code copy, breadcrumbs, chips, radio cards, slider, mobile drawer, Light/Dark & sharp-radius switch).
   - Provide live runnable starter files (`framework/examples/app.php` + `framework/examples/app.py` Flask minimal server) alongside markdown snippets.

## 3. Verification Criteria
- Opening `framework/examples/static.html` works with zero external CDN requests, passes PWA manifest & SW registration checks cleanly, and exercises every `.tx-*` component interactively.
- `php -l framework/examples/app.php` (if PHP installed) and `python3 -m py_compile framework/examples/app.py` pass syntax checks cleanly.
