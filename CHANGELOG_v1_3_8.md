# CHANGELOG v1.3.8 — Layout Alignment & Space Distribution Fix

## Baseline

`VibTools_WEB_UI_v1.3.7`

## Scope

Only Sandbox Web app UI/UX **layout alignment and space distribution** was updated.

## Fixed

- Main content containers no longer stay locked to the left with a 1040px cap on large screens.
- Main shell container now centers in the available content area.
- General content max width is raised to 1280px for better large-screen utilization.
- Project/card grids use `repeat(auto-fit, minmax(300px, 1fr))` so wide screens can distribute cards more evenly.
- Docs shell width now supports the complete docs layout width and centers the docs grid.
- Auth/form/profile narrow panels are centered horizontally inside the main content area.

## Preserved

- No typography change.
- No color/border/surface change.
- No card/button/input dimension change.
- No topbar/sidebar size change.
- No page/route/feature/workflow change.
- No component class rename.
- No shadow, gradient, transform or animation change.
