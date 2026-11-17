# Changelog — v1.4.2 Global Table Design & Feature Delta

## Baseline

`VibTools_WEB_UI_v1.4.1`

## Scope

Only the Sandbox Web app **Global Table Design & Table Feature update/fix** scope was touched.

## Added

- `.vib-table-panel` wrapper for toolbar/table/footer composition.
- `.vib-table-toolbar` with compact search, filter selects and action buttons.
- Semantic table examples using `<thead>`, `<tbody>`, `<tfoot>` and `scope="col"`.
- 14px checkbox selection column and select-all behavior.
- Compact header sort affordance via `.vib-th-sort` and `.vib-sort-icon`.
- `.vib-badge-status` dot badges for success, warning, danger and info statuses.
- `.vib-td-mono`, `.vib-td-numeric`, `.vib-td-truncate`, `.vib-td-action` cell utilities.
- Compact `.vib-icon-button` and details-based `.vib-action-menu` pattern.
- `.vib-table-footer` with entry count, page-size selector and compact pagination controls.
- `.vib-table-state`, `.vib-skeleton-row` and `.vib-skeleton-line` for loading/empty states.
- Thin horizontal scrollbar treatment for `.vib-table-wrap`.
- Lightweight table interactivity in `sandbox-nav.js` for search/filter/sort/select demo behavior.

## Fixed

- `tables.html` padding description now matches actual table CSS: 6px vertical / 12px horizontal.
- Visible runtime/static version synchronized to `v1.4.2`.

## Preserved

No sidebar width, topbar height, page routing, layout shell, typography scale, global card/form colors, radius system, shadow, gradient, external dependency or Tailwind CDN architecture was changed.
