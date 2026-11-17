# CHANGELOG v1.5.0 — Server Health & Metrics Monitoring Page

## Baseline

- Source baseline: `VibTools_WEB_UI_v1.4.8.zip`
- Target delivery: `VibTools_WEB_UI_v1.5.0.zip`
- Scope lock: Server Health & Metrics Monitoring Page only

## Added

- Added `Sandbox/pages/monitoring.html` as a dedicated compact Monitoring dashboard.
- Added CPU, memory, disk, Docker disk, Block I/O and Network I/O metric cards.
- Added compact linear meter tracks and inline SVG area/line charts.
- Added inline SVG Docker disk usage donut chart with center metric and legend.
- Added right-aligned UTC server time pill and lightweight runtime updater.
- Added Monitoring under the MAIN sidebar group.

## Updated

- Added chart and meter tokens to CSS, Tailwind config and JSON token contracts.
- Synchronized visible/runtime/static version strings to `v1.5.0`.
- Updated validation and forensic documentation for the v1.5.0 scope.

## Guardrails

- No sidebar width, topbar height, existing page workflow, global table/form/card/docs/log modal architecture, typography, spacing scale, radius system, or external dependency was changed.
