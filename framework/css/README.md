# Standalone CSS Engine (`framework/css/`)

## Purpose
Contains the complete, zero-CDN stylesheet layer for Tailix v2.2.0 with built-in **Dark** (default) and **Light** (`html[data-theme="light"]`) themes, compact pixel sizing (`44px` topbar, `196px` sidebar, `28px`/`32px` buttons, `30px` inputs), and zero default box shadows.

## Files
- **`tokens.css`** — Standalone CSS custom properties for Dark/Light colors, typography, spacing, radius, flat borders, icons, breakpoints, and motion.
- **`tailix.css`** — Human-readable modular stylesheet covering base typography, app shell, grids, cards, buttons, badges, forms, tables, modals, toasts, alerts, tabs, dropdowns, skeletons, and compact utility helpers (`.tx-*`). Imports `./tokens.css`.
- **`tailix.min.css`** — Single-file production stylesheet with `tokens.css` inlined and minified (only 1 `<link>` needed).

## Usage

### Option A — Single File (Recommended)
```html
<link rel="stylesheet" href="framework/css/tailix.min.css">
```

### Option B — Modular Unminified (Development)
```html
<link rel="stylesheet" href="framework/css/tokens.css">
<link rel="stylesheet" href="framework/css/tailix.css">
```

### Theme Switching
Add `data-theme="light"` or `data-theme="dark"` on `<html>`:
```html
<html lang="en" data-theme="light">
```
