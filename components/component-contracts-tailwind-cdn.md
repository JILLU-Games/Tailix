# VibTools Tailwind CDN Component Contracts — v2.2.0

## Global contract

All components inherit from the v2.2.0 Single Token Foundation Engine. Existing class names and page/module structures are preserved.

## Typography contracts

| Component text | Size | Weight | Color token |
|---|---:|---:|---|
| Page title | `16px`–`20px` cap | `500` max | `--text-primary` |
| Section/card title | `13px`–`14px` | `500` max | `--text-content` / `--text-primary` |
| Body/description | `12px`–`13px` | `400` | `--text-secondary` |
| Helper/microcopy | `11px`–`12px` | `400` | `--text-muted` / `--text-secondary` |
| Button text | `12px` | `500` max | `--text-primary` |
| Badge text | `11px`–`12px` | `400`/`500` max | `--text-secondary` |

## Base components

| Class / family | Contract |
|---|---|
| `.vib-card`, `.ui-card` | Flat surface, 1px border, no shadow, token-backed surface and radius. |
| `.vib-input`, `.ui-input` | Compact height, regular-weight text, low-glare field surface and muted border. |
| `.vib-btn`, `.ui-btn` | Compact height, max medium weight, no elevation. |
| `.vib-badge`, `.ui-badge` | Compact pill/chip, subtle fill, muted text. |
| `.vib-app-page` | Standard top-aligned dashboard/page wrapper. |
| Auth pages | Login/Register keep centered auth structure only. |

## Playground contracts

| Page | Required modules |
|---|---|
| `forms.html` | 15 form primitive modules from `Sandbox/pages/forms/`. |
| `cards.html` | 11 card primitive modules from `Sandbox/pages/cards/`. |
| `navigation.html` | 8 navigation primitive modules from `Sandbox/pages/Navigation/`. |

## Foundation utility classes

- `.ui-card`
- `.ui-input`
- `.ui-btn`
- `.ui-badge`
- `.ui-text-primary`
- `.ui-text-content`
- `.ui-text-muted`
- `.ui-text-accent`
- `.ui-surface-card`
- `.ui-surface-soft`
- `.ui-divider`

These utilities are allowed for new examples but must not remove or rename existing `.vib-*` contracts.

## Prohibited changes

- No new shadow/elevation system.
- No raw pure-white active text as the default UI token.
- No changing sidebar width, topbar height, page routing, module counts, or existing workflows.
- No deleting or renaming existing classes/modules without explicit approval.
