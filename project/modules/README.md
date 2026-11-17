# Project Modules — Purpose, Dependencies & Locations

## Purpose
This directory documents every module in the codebase: why it exists, where it is located, what dependencies it requires, and where it is used across the application.

## Core Modules Overview
1. **Foundation Modules** (`Sandbox/assets/css/foundation/`):
   - `_colors.css`: Semantic color system. Required by all themes.
   - `_typography.css`: Type hierarchy and scale definitions (includes `--text-2xs` through `--text-xl`).
   - `_spacing.css`: Heights, widths, layout paddings (includes `--height-input-sm/md/lg`).
   - `_radius.css`: Global border radius values.
   - `_shadows.css`: Shadow elevations.
   - `_icons.css`: Standardized SVG sizing and stroke properties.
   - `_breakpoints.css`: Responsive design queries.
   - `_motion.css`: Easing curves and transition times (includes `--motion-duration-slow`, `--motion-easing-bounce`).

2. **Theme & Tailwind Bridge** (`Sandbox/assets/css/vibtools-theme.css`, `Sandbox/css/vibtools-sandbox.css`, `Sandbox/js/tailwind-config.js`):
   - `vibtools-theme.css` / `vibtools-sandbox.css`: Maps `--vib-*` aliases (including `--vib-body`, `--vib-surface-hover`, `--vib-radius-md/lg/full`) and defines `.vib-button*` / `.vib-btn*` component classes.
   - `tailwind-config.js`: Registers 122 `vib` + 13 `ui` CSS-var-backed Tailwind utilities and re-applies `window.tailwind.config` via `syncTailwindConfig()` on `DOMContentLoaded`/`load` after `cdn.tailwindcss.com` initializes.

3. **Framework Modules** (`Sandbox/js/framework/`):
   - `shell-manager.js`: Auto-injects Topbar (`#vib-theme-toggle`, `#vib-sidebar-toggle`) and Sidebar into `data-vib-shell` pages, resolves `/Sandbox/` base paths, and unwraps pre-existing `<main>`.
   - `event-bus.js`: Application-wide pub/sub event pipeline.
   - `form-controller.js`: Validation (`submit()` / `handleSubmit()` returning boolean), input masking, and reactive form state handling.
   - `table-controller.js`: Table filtering, pagination, row selection, and sorting.

4. **UI Components** (`Sandbox/js/components/`):
   - `toast-manager.js`: Lazy-initialized `VibToast` container listening to `toast:show`, capped at 5 toasts with `textContent` escaping.
   - `modal-manager.js`: `VibModal` supporting `Escape` close, focus restoration, `try/catch` `onConfirm`, and `return false` validation hold.
