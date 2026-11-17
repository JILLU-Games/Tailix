# VibTools AI / Developer Handoff — Tailwind CDN Compact v2.2.0

## Current baseline

Visible/runtime baseline: `v2.2.0`.

This handoff describes the implemented Sandbox runtime and 8-Module Token Foundation Engine. Do not use older v1.x or v2.0.x freeze text as active guidance.

## Architecture

```text
Sandbox/
├── assets/css/foundation/
│   ├── _colors.css
│   ├── _typography.css
│   ├── _spacing.css
│   ├── _radius.css
│   ├── _shadows.css
│   ├── _icons.css
│   ├── _breakpoints.css
│   └── _motion.css
├── assets/css/vibtools-theme.css
├── css/vibtools-sandbox.css
├── js/tailwind-config.js
└── pages/
```

## Design-system source of truth

Use foundation semantic tokens first, then legacy `--vib-*` aliases if needed. Avoid raw hex values in new UI work.

| Role | Preferred token |
|---|---|
| App background | `--vib-background` |
| Card surface | `--vib-surface` |
| Primary text | `--vib-text` |
| Secondary text | `--vib-muted` |
| Accent/focus | `--vib-input-focus-border` / `--vib-primary` |
| Control radius | `--radius-md` |
| Card radius | `--radius-lg` |
| Button height | `--height-button-sm` |
| Input height | `--height-input-sm` |

## Runtime requirements

- Keep `vibtools-theme.css` before `vibtools-sandbox.css`.
- Keep `sandbox-nav.js` as the version/sidebar controller.
- Keep Tailwind CDN; do not introduce a build pipeline.
- Preserve zero-shadow flat UI.
- Preserve the current Forms, Cards and Navigation playground module counts.
- Preserve auth-only centering for Login/Register and top-aligned `.vib-app-page` for standard pages.

## Typography and color

- Default text weight: `400`.
- Medium emphasis: `500`.
- Heavy `600` is allowed only for tightly scoped emphasis.
- Active primary text: `#E6EDF3` through `--text-primary`.
- Secondary/muted text: `#8B949E` / `#6E7681`.

## Change rule

Documentation must follow the implemented Sandbox runtime. Do not silently redesign the app to match stale docs.
