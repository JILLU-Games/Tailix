# Changelog — VibTools_WEB_UI_v1.3.6

## Scope

Baseline: `VibTools_WEB_UI_v1.3.5`

Only Sandbox Web app UI/UX **States / Interactions / Feedback** treatment was updated. No typography, spacing, sizing, layout, radius, page structure, navigation structure, workflow, feature, Tailwind CDN architecture, component naming, shadow or gradient changes were made.

## Before → After

| Area | Before | After |
|---|---|---|
| Links | Hover only underlined | Hover also uses consistent text-color transition; active uses content color |
| Sidebar items | Hover/active existed | Added active press state and disabled selector without size change |
| Cards | Hover border from Step-3 | Added `aria-selected` and disabled state treatment using same border hierarchy |
| Buttons | Hover states existed | Added active, disabled and `aria-busy` loading states |
| Loading | No standard button loading selector | `aria-busy="true"` adds compact 10px spinner and wait cursor |
| Inputs | Hover/focus existed | Added disabled state using restrained disabled surface |
| Alerts | Single generic alert surface | Added `data-state` success/warning/danger/error/info feedback border tints |
| Tables | Static row display | Added subtle hover and `aria-selected` row state |
| Status text | success/warning/danger only | Added info status color mapped to cyan accent |

## Preserved

```text
Card size, padding, radius and surface
Button height, radius, padding and typography
Input height, radius, padding and typography
Grid/layout/sidebar/topbar/page structure
Primary button color #2563EB / #1D4ED8
Cyan focus #38BDF8 3px outline + 3px offset
No transform, no glow, no shadow, no gradient
```
