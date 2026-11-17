# Changelog — v1.4.5 Navigation, Action Controls & UI Shell Refinement Delta

## Baseline

`VibTools_WEB_UI_v1.4.4`

## Scope

Only the **Sandbox Web app Navigation, Action Controls & UI Shell Refinement** layer was touched.

## Fixed

- Added dedicated navigation state tokens for active, hover and active-border treatment.
- Replaced the previous active sidebar/page-link fill contract with `#12171F` active surface and `#38BDF8` left accent border.
- Replaced general hover surface use in sidebar/page links with the sharper navigation hover surface `#181F2B`.
- Standardized global action buttons to the compact 28px height token with `4px 10px` padding.
- Re-tuned secondary and ghost button hover/active surfaces so action controls align with navigation state tokens.
- Added compact breadcrumb styling and applied it to `navigation.html` as `Dashboard / Navigation`.
- Synchronized Sandbox visible/static/runtime version tags to `v1.4.5`.

## Not changed

- Sidebar width remains `196px`.
- Topbar height remains `44px`.
- Page routes, file structure, card system, form system, table feature behavior, docs layout, typography scale, spacing scale, radius system, shadows, gradients, dependencies and Tailwind CDN architecture remain unchanged.
