# VibTools Compact Design Sheet — v2.2.0

## Current visual baseline

The active design system is **v2.2.0 8-Module Token Foundation Engine**. The UI is dark, compact, zero-shadow, low-glare, and border-driven.

## Foundation color contract

| Role | Token | Value / source |
|---|---|---|
| App background | `--vib-background` | `#0D1117` |
| Deep background | `--vib-deep` | `#0B0F17` |
| Card surface | `--vib-surface` | `#161B22` |
| Primary surface | `--vib-surface-primary` | `#0D1117` |
| Soft surface | `--vib-surface-soft` | `#11161D` |
| Field surface | `--vib-field` | `#12171F` |
| Border subtle | `--vib-border-subtle` | `#21262D` |
| Border muted | `--vib-border` | `#30373F` |
| Card border | `--vib-card-border` | `#30363D` |
| Focus/accent | `--vib-input-focus-border` | `#38BDF8` |
| Primary text | `--vib-text` | `#E6EDF3` |
| Content text | `--vib-content` | `#C9D1D9` |
| Secondary text | `--vib-muted` | `#8B949E` |
| Muted text | `--vib-tertiary` | `#6E7681` |

`--color-slate-100` is retained only as a primitive off-white palette value; it is not the active primary UI text token.

## Typography scale

| Purpose | Token | Value |
|---|---|---|
| Micro labels / badges | `--text-xs` | `11px` |
| Buttons / controls / helper text | `--text-sm` | `12px` |
| Primary UI text / nav | `--text-base` | `13px` |
| Card titles / compact headings | `--text-md` | `14px` |
| Section headers | `--text-lg` | `16px` |
| Large page title cap | `--text-xl` | `20px` |

Font weights are `400` regular and `500` medium by default. `600` is reserved for rare approved emphasis only.

## Spacing and sizing contract

| Area | Token | Value |
|---|---|---|
| Topbar height | `--height-topbar` | `44px` |
| Sidebar width | `--width-sidebar` | `196px` |
| Small button height | `--height-button-sm` | `28px` |
| Medium button height | `--height-button-md` | `32px` |
| Small input height | `--height-input-sm` | `30px` |
| Medium input height | `--height-input-md` | `34px` |
| Content max width | `--content-max-width` | `1280px` |
| Docs max width | `--docs-shell-max-width` | `1280px` |
| Card padding | `--card-padding-y`, `--card-padding-x` | `10px`, `12px` |

## Radius / shadow / motion

| Role | Token | Value |
|---|---|---|
| Small radius | `--radius-sm` | `6px` |
| Control radius | `--radius-md` | `8px` |
| Card radius | `--radius-lg` | `12px` |
| Card shadow | `--shadow-card` | `none` |
| Focus shadow | `--shadow-focus` | `none` |
| Overlay shadow | `--shadow-overlay` | `none` |
| Normal transition | `--transition-normal` | `120ms ease` |

## Page/component families covered

- App shell, sidebar, topbar, page headers and app/auth page containers.
- Cards, forms, tables, dropdowns, navigation, badges, buttons, inputs, selects, textareas.
- Alerts, empty/error/loading states, skeletons, upload states, settings rows, logs modal, monitoring widgets and docs/API playground elements.
- Modular playgrounds: Forms, Cards, Navigation.

## Design rule

Do not introduce new hardcoded colors, sizes, shadows, or font weights in page/component code. Use foundation tokens, `--vib-*` aliases, or `ui-*` utilities.
