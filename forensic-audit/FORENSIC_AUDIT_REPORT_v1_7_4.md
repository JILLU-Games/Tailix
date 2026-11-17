# Forensic Audit Report — v1.7.4 Compact Typography & Restrained Color Hierarchy

## Baseline

- Frozen source: `VibTools_WEB_UI_v1.7.3_ZERO_SHADOW_FLAT_UI_REPLACE_READY`.
- Target release: `v1.7.4`.
- Scope lock: only `upload.html`, `docs-layout.html`, `settings.html`, shared token/CSS records, version badges, validation records and official freeze documentation.

## Findings

1. `upload.html`, `docs-layout.html`, and `settings.html` retained the flat zero-shadow contract but the typography layer remained too visually loud for a restrained compact dashboard.
2. Main titles used the inherited `22px–24px` `.vib-h1` rule, which overpowered surrounding navigation and cards.
3. Several descriptive copy blocks used high-brightness content colors, reducing hierarchy between headings, descriptions and metadata.
4. HTTP method badges and upload file-type badges used vivid semantic colors that drew more attention than the primary content.

## Fix Verification

- Page titles are constrained to `18px`.
- Section titles are constrained to `14px`.
- Card/file/settings row titles are constrained to `13px`.
- Descriptive/body/helper text on the scoped pages is muted to `#8B949E` at `12px`.
- HTTP method badges now use restrained 12% color fills and muted border intensity.
- Upload file badges now use neutral dark fill and border-driven distinction.
- v1.7.3 zero-shadow global guard remains active.

## Scope Guard Result

PASS: no layout, routing, shell, sidebar, sticky settings behavior, upload queue markup, docs playground structure, auth surface, JavaScript workflow or component semantic changes were introduced.
