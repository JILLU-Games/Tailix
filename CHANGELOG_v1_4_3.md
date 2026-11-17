# Changelog — v1.4.3 Table Toolbar Alignment Delta

## Baseline

`VibTools_WEB_UI_v1.4.2`

## Scope

Only the **Sandbox Web app Global Table Design & Table Feature** layer was touched for the toolbar alignment fix.

## Fixed

- Fixed table toolbar vertical stacking where search, status filter and category filter appeared in multiple rows.
- Fixed action buttons visually dropping below the search/filter row.
- Fixed toolbar height waste caused by `flex-wrap: wrap`.
- Locked toolbar to compact single-row behavior.
- Added horizontal overflow handling for narrow widths instead of breaking the row.
- Synchronized app/static/runtime version to `v1.4.3`.

## Not changed

- Table semantics and existing feature markup remain intact.
- Search/filter/sort/select/pagination/empty/loading behavior remains intact.
- Sidebar, topbar, docs layout, form layout, card system, color palette, typography, radius, shadow and external dependencies remain unchanged.
