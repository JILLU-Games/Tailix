# VibTools Web UI — Official v2.2.0 Baseline

This package is the **v2.2.0 official freeze baseline** with the official freeze documents fully rewritten to match the implemented Sandbox runtime.

## Current status

| Area | Status |
|---|---|
| Sandbox runtime (28 pages + 34 fragments) | v2.2.0 (100% Verified) |
| Standalone `framework/` (`tailix-ui@2.2.0` + PWA + `.vib-*` bridge) | v2.2.0 (100% Verified) |
| 8-Module Token Foundation Engine (`Segoe UI`, `<= 500`, `0` shadow) | v2.2.0 |
| Automated Unit Tests (`tests/tailix.test.mjs`) | 16/16 Passing |
| Official freeze documents (`docs/`, `project/`, `notes/`) | Fully synced to v2.2.0 |
| Validation & SHA-256 Checksums (`validation/CHECKSUMS.sha256`) | 100% Passing |

## Important note

This package preserves the compact v2.2.0 design baseline across both the 28-page `Sandbox/` lab and the standalone zero-Node `framework/` (`tailix.min.css` + `tailix.min.js`).

## Key runtime sources

- `DESIGN_SYSTEM.md` & `DESIGN_SYSTEM_GUIDE.md`
- `framework/css/tokens.css`, `framework/css/tailix.css`, `framework/css/tailix.min.css`, `framework/css/vib-compat.css`
- `framework/js/tailix.js`, `framework/js/tailix.min.js`
- `framework/pwa/manifest.json`, `framework/pwa/sw.js`
- `framework/examples/static.html`, `framework/examples/app.php`, `framework/examples/app.py`
- `Sandbox/assets/css/foundation/` & `Sandbox/assets/css/vibtools-theme.css`
- `Sandbox/css/vibtools-sandbox.css`
- `Sandbox/js/tailwind-config.js` & `Sandbox/js/sandbox-nav.js`

## Running the App

```bash
npm run dev
# Or: node server.js
# Access Sandbox at http://0.0.0.0:3000/Sandbox/index.html
# Access Standalone Framework Hub at http://0.0.0.0:3000/framework/examples/static.html
```

## Validation & Unit Testing

Run:

```bash
npm test
python3 validation/no_growth_check.py
python3 validation/sandbox_static_check.py
sha256sum -c validation/CHECKSUMS.sha256
npm run lint
```
