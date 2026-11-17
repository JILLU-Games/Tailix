# VibTools Web UI Manifest — v2.2.0

Package: `VibTools_WEB_UI_v2.2.0`

Baseline: `VibTools_WEB_UI_v2.2.0.zip`

## Manifest status

This manifest describes the current official v2.2.0 baseline after full freeze-document synchronization.

## Included major groups

- `server.js`, `package.json`, `index.html` Express server & static entry configuration for AI Studio port 3000.
- `framework/` Standalone Zero-Node, Zero-CDN Bootstrap-style CSS/JS framework (`package.json`, `VERSION`, `LICENSE`, `css/tokens.css`, `css/tailix.css`, `css/tailix.min.css`, `css/vib-compat.css`, `js/tailix.js`, `js/tailix.min.js`, `pwa/` manifest + Service Worker + icons, `examples/` for Static HTML, runnable PHP `app.php`, and runnable Python `app.py`).
- `tests/` Automated Node.js (`node:test`) unit test suite (`tests/tailix.test.mjs`).
- `Sandbox/` runtime UI sandbox (28 top-level pages + 34 modular playground fragments).
- `Sandbox/assets/css/foundation/` 8-Module Token Foundation Engine.
- `DESIGN_SYSTEM.md` & `DESIGN_SYSTEM_GUIDE.md` Central developer & AI design system guidelines.
- `notes/` Development-time planning, notes, and task execution session logs (`Phases 01–07` completed).
- `project/` Permanent Git-tracked deep anatomical knowledge base (architecture, modules, functions, pages, setup, logs).
- `docs/` Official user guidelines, developer guidelines, and frozen architecture standards.
- `components/` official component contract docs and samples.
- `design-tokens/` token records and Tailwind CDN mirrors.
- `ai-handoff/` AI/developer handoff.
- `validation/` validation scripts (`no_growth_check.py`, `sandbox_static_check.py`), freeze validation guide, and `CHECKSUMS.sha256`.
- `forensic-audit/` historical and current audit records.
- `CHANGELOG_*` historical release logs and current v2.2.0 changelog.

## Scope of latest sync

Completed all 7 Phases (`Phase 01`–`Phase 07`, `v2.2.0`): Sandbox broken page/SVG/encoding repair (`BUG-01..04`), unified `"Segoe UI"` typography (`<= 500`), flat geometry (`--radius: 0rem` + `data-radius="sharp"`), zero shadows & Light-mode CSS (`BUG-05..07`), unified 28-page Shell/Theme/Sidebar parity & defensive JS guards (`BUG-08..09`), standalone `framework/` core JS/CSS Light parity (`BUG-10..13`), mobile offcanvas drawer + 28-icon registry + extended components (`BUG-14..15`), standalone packaging + PWA + `.vib-*` bridge + live PHP/Python apps (`BUG-16`), and automated `node:test` unit suite + Playwright verification + `CHECKSUMS.sha256` & docs sync (`BUG-17`).
