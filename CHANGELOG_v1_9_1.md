# Changelog — v1.9.1 Typography Weight & Brightness Refinement for Cards Playground

Baseline: `VibTools_WEB_UI_ v1.9.0.zip`
Target: `VibTools_WEB_UI_v1.9.1.zip`

## Scope Applied

Only `Sandbox web UI "SCOPE LOCK: Typography Weight & Brightness Refinement for Cards Playground (v1.9.1)"` was implemented.

## Before → After

| Area | Before v1.9.1 | After v1.9.1 |
|---|---|---|
| Cards page title | Rendered through global `.vib-h1` as visually heavy/bright | Scoped to `16px`, `500`, `#E6EDF3` inside `.vib-cards-playground-page` |
| Card/section titles | Some titles appeared overly bold and high-glare | Capped at `500` weight with `#E6EDF3` / `#C9D1D9` |
| Card buttons | Global button weight made actions look heavy | Cards playground buttons scoped to `12px / 500` |
| Badges/chips/copy | Badges and muted copy still competed visually | Cards playground badges/chips/descriptions scoped to `400 / #8B949E` |
| Code/snippet copy | Code used inherited brighter color/weight | Scoped to `400 / #C9D1D9` |
| Card playground structure | 11 modules from v1.9.0 | Preserved without module removal or workflow change |
| Version | v1.9.0 | v1.9.1 |

## Scope Guard

No app shell, sidebar width, topbar height, auth layout, forms playground, docs architecture, upload/settings behavior, monitoring/logs/table workflow, backend/API logic, route workflow or dependency model was changed.
