# Forensic Audit Report — v1.3.2 Sandbox Repair

## Baseline audited

`VibTools_WEB_UI_v1.3.1.zip` was applied over the v1.3 sandbox root and audited as the baseline.

## Mismatches found

- Header/title typography still looked visually large for a compact reference app.
- Sidebar width, menu spacing and lack of icon affordance made the layout feel unfinished.
- Main content was centered too far away from the sidebar on wide screens.
- Form fields and inner cards used the same dark canvas too often, creating blank/dead black blocks.
- Table header/cell spacing and dashboard stat typography were still larger than the compact target.
- Cards, sections and grids needed lower density defaults.
- Several pages depended on Tailwind utility spacing instead of the global component layer.

## Fixes applied

- Header: 44px.
- Sidebar: 196px.
- Sidebar link: 26px row, 14px icon slot, soft active state.
- Container: 1040px max and left-aligned inside shell.
- Hero title: 24–28px.
- H1: 22–26px.
- H2/H3: 16px/14px.
- Body: 12.5px.
- Card padding: 10px.
- Button/input: 30px/32px.
- Field and nested surfaces: #11161D.
- Tables: 11.5px text, 6px/7px cells.

## Result

The sandbox now behaves more like a compact personal UI framework: components are named globally and reused across pages. Brand colors remain unchanged.
