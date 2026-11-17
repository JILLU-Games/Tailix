# Changelog v1.4.0 — Sidebar Design System Repair

- Baseline: `VibTools_WEB_UI_v1.3.9`.
- Scope: Sandbox Web app sidebar design system only, plus visible app-version mismatch correction.
- Added grouped navigation hierarchy: `MAIN`, `PAGES & AUTH`, `COMPONENTS`, `SYSTEM`.
- Added `.vib-sidebar-group`, `.vib-sidebar-group-title`, `.vib-sidebar-nav`, `.vib-sidebar-footer`, `.vib-sidebar-workspace` classes.
- Updated sidebar row contract from 26px/0 7px/8px radius/600 weight to 28px/0 8px/6px radius/500 weight.
- Replaced runtime text-glyph icons with dependency-free 14px inline SVG currentColor micro-icons.
- Added active sidebar left indicator: `border-left-width: 2px` with `#38BDF8` on active/current rows.
- Added compact sidebar footer workspace tile with `VibTools Sandbox` and `v1.4.0`.
- Synchronized visible version badges from stale `v1.3.3` to `v1.4.0` through static HTML replacements in included pages and runtime normalization in `sandbox-nav.js`.
- Preserved sidebar width, topbar height, routes, layouts, color palette, typography scale outside sidebar row weight, cards, buttons, inputs, forms, docs and Tailwind CDN architecture.
