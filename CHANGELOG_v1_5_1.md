# CHANGELOG v1.5.1 — Docs Typography, Text Size & Color Contrast Sync

## Baseline

- Source baseline: `VibTools_WEB_UI_v1.5.0.zip`
- Target delivery: `VibTools_WEB_UI_v1.5.1.zip`
- Scope lock: `Docs Typography, Text Size & Color Contrast Sync` only.

## Updated

- Added documentation-specific typography tokens to CSS and JSON token contracts.
- Added docs contrast tokens: `--vib-doc-text-primary`, `--vib-doc-text-muted`, and `--vib-doc-text-heading`.
- Reduced the docs hero title to `20px` via `.vib-doc-hero .vib-h1` without changing the global page title token.
- Reduced docs body H2 from the oversized v1.5.0 visual treatment to `15px / 1.4`.
- Reduced docs body H3 to `13px / 1.4`.
- Set docs paragraphs and list text to `13px / 1.5` with `#E6EDF3` reading contrast.
- Set docs sidebar category labels to `10px / 700 / uppercase / 0.06em`.
- Set docs sidebar and TOC links to `12px` with compact `26px` sidebar rows.
- Set docs code blocks to `12px / 1.45` monospace.
- Synchronized visible/runtime/static app version to `v1.5.1`.

## Not Changed

- No docs grid structure change.
- No route addition, removal or rename.
- No global app shell width change.
- No sidebar width change.
- No topbar height change.
- No non-docs page layout redesign.
- No table/card/form/log modal/monitoring behavior change.
- No dependency addition.
