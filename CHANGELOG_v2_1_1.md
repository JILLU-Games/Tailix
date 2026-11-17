# CHANGELOG v2.2.0 — Single Token Foundation Verification Fix

Scope: verification and correction of the v2.1.0 Single Token Foundation Engine only.

## Updated
- Expanded remaining legacy `--vib-*` aliases to resolve from foundation semantic/component tokens.
- Softened `--text-primary` from high-glare `#F8FAFC` to `#E6EDF3` to preserve the v2.0.1/v2.1.x low-glare dark UI contract.
- Updated Tailwind CDN runtime config and official handoff config so core `vib.*` aliases now use CSS variable-backed tokens instead of fixed hex values where supported.
- Added component bridge tokens for active/hover/disabled, state, docs, method badge, upload, chart, log, settings and file badge variables.
- Synced visible runtime version badges and project docs to `v2.2.0`.

## Preserved
- No page layout, route workflow, sidebar width, topbar height, module count, backend/API behavior or playground interaction was redesigned.
- Zero-shadow flat UI remains enforced.
