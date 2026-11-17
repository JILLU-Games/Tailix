# Forensic Audit Report — v1.3.4 Color / Border / Surface Contrast Repair

## Baseline audited

`VibTools_WEB_UI_v1.3.3.zip` was treated as the official baseline freeze.

## Scope lock

Allowed scope only:

- Sandbox Web app color tokens.
- Border token hierarchy.
- Surface contrast and active/hover surface restraint.
- Directly related documentation/audit/validation records.

Not changed:

- Typography values.
- Font sizes, weights, line heights, or spacing.
- Sidebar width, header height, button size, card padding, layout grid, docs columns, breakpoints, page structure, routes, workflow, feature set, component class names, Tailwind CDN framework, or file/folder architecture.

## Mismatches found in v1.3.3

- Active sidebar row used a blue fill/border treatment that was visually stronger than needed for a navigation state.
- Inactive sidebar icons used cyan everywhere, causing accent overuse.
- Badge fill was slightly more visible than required for a quiet metadata pill.
- Grid texture used `rgba(255,255,255,.028)`, which could compete with content/card borders in header/hero bands.
- Primary/internal border hierarchy existed conceptually but was not fully expressed through reusable named color tokens.

## Fixes applied

- Preserved `#161B22` card surface and `#11161D` nested/field surface.
- Added named border/surface tokens: `--vib-card-border`, `--vib-inner-border`, `--vib-active-bg`, `--vib-active-border`, `--vib-hover-bg`, `--vib-badge-bg`.
- Main cards/stat/docs panels use `--vib-card-border`.
- Nested surfaces, badges, field-surface and code-inner use `--vib-inner-border`.
- Sidebar active state was reduced from `rgba(37,99,235,.16)` / `rgba(56,189,248,.26)` to `rgba(37, 99, 235, .10)` / `rgba(56, 189, 248, .18)`.
- Sidebar hover now uses a separate low-noise hover surface rather than the active fill.
- Sidebar inactive icons are muted; cyan is reserved for hover/active states.
- Badge background reduced from `.025` to `.018` alpha.
- Grid helper line reduced from `.028` to `.018` alpha.
- Topbar background alpha increased from `.94` to `.96` for clearer shell separation without changing dimensions.
- Primary blue, primary hover, cyan accent and 3px focus outline were preserved.

## Verification result

- HTML static link scan: PASS.
- Tailwind CDN link scan: PASS.
- Sandbox CSS link scan: PASS.
- Forbidden oversized Tailwind utility scan: PASS.
- Canonical token presence: PASS.
- v1.3.3 compact sizing/typography fragment checks: PASS.
- v1.3.4 color/border/surface contrast fragment checks: PASS.
- No-growth check: PASS.
- ZIP root-relative layout: PASS.
- Nested ZIP check: PASS.

## Result

The sandbox keeps the same compact framework and layout while refining surface separation, border hierarchy, sidebar active restraint, badge subtlety and grid quietness. The visual target remains compact GitHub/Cloudflare-style dark UI: clearly layered, restrained borders, low surface noise and strong hierarchy.
