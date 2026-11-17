# Framework CSS Directory Manifest

## Overview
- **Location**: `/framework/css`
- **Purpose**: Zero-CDN CSS tokens, component classes (`.tx-*`), and production bundle (`tailix.min.css`).

## Inventory
| Item | Type | Purpose / Description | Status |
|---|---|---|---|
| `README.md` | File | Usage instructions for single-file and modular CSS loading + theming. | Active |
| `MANIFEST.md` | File | Inventory of standalone CSS artifacts. | Active |
| `tokens.css` | File | Dark & Light theme custom properties extracted from v2.2.0 8-module foundation. | Active (Phase 05) |
| `tailix.css` | File | Unminified standalone CSS framework (layout, cards, forms, tables, overlays, extended components, utilities). | Active (Phase 05) |
| `tailix.min.css` | File | Self-contained production CSS bundle (inlines `tokens.css` + `tailix.css`). | Active (Phase 05) |
| `vib-compat.css` | File | Optional legacy `.vib-*` class compatibility bridge mapped onto Tailix tokens (`0` hexes, `0` shadows). | Active (Phase 06) |
