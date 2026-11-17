# CHANGELOG v1.4.8 — Real-time Deployment & Build Logs Modal

## Scope

Only the Sandbox Web app **Real-time Deployment & Build Logs Modal** scope was added/updated over the v1.4.7 baseline.

## Added

- `Sandbox/pages/logs-modal.html` dedicated demo page for deployment/build logs.
- Modal backdrop and centered log dialog styles.
- Terminal viewport with scrollable mono log rows.
- Severity badges for `info`, `debug`, `warning`, and `success`.
- Debug/warning row highlight treatments.
- Compact modal action controls: `Copy Logs`, `AI Diagnostics`, `Close`.
- Log tools: search input, severity filter, and pin-to-bottom toggle.
- JS helpers for modal open/close, Esc close, log filtering, line count refresh, and copy-to-clipboard.

## Updated

- Synchronized visible/runtime/static version strings to `v1.4.8`.
- Added log modal tokens in CSS, Tailwind config, and JSON token package.
- Updated validation and forensic documentation for the v1.4.8 scope.

## Not changed

- No sidebar width change.
- No topbar height change.
- No global table/card/form/docs redesign.
- No existing route removal or existing workflow change.
- No external dependency change.
