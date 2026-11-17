# CHANGELOG v2.0.1 — Navigation Playground Polish & Typography Refinement

Baseline: `VibTools_WEB_UI_v2.0.0.zip`
Scope: `Polish & Typography Refinement (v2.0.1 Patch)` only

## Updated

- Reduced navigation playground heading/section glare using max `500` heading weight and soft `#E6EDF3` / `#C9D1D9` title colors.
- Softened section identifiers such as `01 / NAVIGATION PRIMITIVE` with controlled cyan opacity.
- Muted tags, badges, component-source links and quick-jump links to `#8B949E` with regular/medium weight only.
- Standardized navigation playground buttons and pagination controls to `32px` height, `12px` text and `#2D3748` border.
- Converted internal navigation active states to border-only / transparent-background treatment to prevent harsh visual pops.
- Added a page-local body class to soften only the `navigation.html` shell active sidebar item; global sidebar behavior remains unchanged elsewhere.

## Preserved

- All 8 navigation primitive modules and their `.html` / `.js` pairs.
- Navigation playground loader and jump index.
- App shell, sidebar width, topbar height, route workflow, forms/cards playgrounds, docs, upload, settings, monitoring, logs modal, table behavior and backend/API logic.
