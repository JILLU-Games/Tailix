# CHANGELOG v2.1.0 — Single Token Foundation Engine

Scope: `Architecture Blueprint: Single Token Foundation Engine` only.

## Added
- Created `Sandbox/assets/css/foundation/_tokens.css` as the main primitive, semantic and component color token engine.
- Created `Sandbox/assets/css/foundation/_typography.css` for centralized font family, compact type scale, line-height and 400/500/600 weight tokens.
- Created `Sandbox/assets/css/foundation/_spacing.css` for spacing, sidebar/topbar dimensions, button/input heights, content width and card padding tokens.
- Created `Sandbox/assets/css/foundation/_surfaces.css` for radius, border and zero-shadow surface tokens.
- Created `Sandbox/assets/css/foundation/_motion.css` for transition and easing tokens.
- Created `Sandbox/assets/css/vibtools-theme.css` as the foundation aggregator and utility-class layer.

## Updated
- Included `vibtools-theme.css` in runtime HTML heads and imported it from `Sandbox/css/vibtools-sandbox.css` as a global fallback.
- Added legacy `--vib-*` alias enforcement so existing Sidebar, Cards, Forms, Tables and Navigation UI read from foundation semantic tokens without layout changes.
- Added `.ui-card`, `.ui-input`, `.ui-btn`, `.ui-badge`, `.ui-text-*`, `.ui-surface-*` and `.ui-border-subtle` utilities mapped to the foundation engine.
- Added Tailwind CDN `ui.*` color mappings that resolve to CSS custom properties.
- Synced visible Sandbox release tags to `v2.1.0`.

## Preserved
- Existing app shell, routes, sidebar width, topbar height, page/component structure, responsive behavior and zero-shadow flat UI.
