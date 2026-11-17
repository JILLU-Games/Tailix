# Changelog v1.3.5 — Card / Button / Input Visual Treatment Repair

## Baseline

`VibTools_WEB_UI_v1.3.4` is the official baseline freeze for this update.

## Scope lock

Only Sandbox Web app UI/UX **Card / Button / Input visual treatment** was changed.

No typography, sizing, spacing, layout, navigation, workflow, page list, file architecture, component naming, Tailwind CDN setup, radius system, shadows, gradients or runtime behavior was changed.

## Before → After

| Area | Before | After |
|---|---|---|
| Main card surface | `#161B22` | unchanged |
| Main card border | `1px #30363D` | unchanged normal state; hover can use selective `#46505D` |
| Main card hover state | no explicit card-edge treatment | `border-color: #46505D` on hover only |
| Compact card hover | no explicit card-edge treatment | `border-color: #46505D` on hover only |
| Stat card hover | no explicit card-edge treatment | `border-color: #46505D` on hover only |
| Nested card surface | `#11161D` | unchanged |
| Nested card border | `1px #21262D` | unchanged |
| Secondary button normal | `#161B22`, `1px #30363D` | unchanged |
| Secondary button hover | low-noise hover surface with `#30363D` border | `#21262D` hover surface with selective `#46505D` border |
| Ghost button | transparent, restrained | unchanged |
| Primary button | `#2563EB / #1D4ED8` | unchanged |
| Input normal | `#11161D`, `1px #30363D` | unchanged |
| Input hover | `#161B22` | unchanged |
| Input focus | existing 3px cyan outline | existing 3px cyan outline retained; field also uses `#46505D` focus border |
| Textarea focus | existing 3px cyan outline | existing 3px cyan outline retained; field also uses `#46505D` focus border |
| Card radius | `12px` | unchanged |
| Button height | `30px` | unchanged |
| Input height | `32px` | unchanged |
| Textarea height | `72px` | unchanged |
| Shadow / gradient | none | none |

## Locked result

```text
Card normal:       #161B22 + 1px #30363D
Card hover:        #161B22 + 1px #46505D selective edge only
Nested surface:    #11161D + 1px #21262D
Primary button:    #2563EB / #1D4ED8 retained
Secondary button:  #161B22 + #30363D, hover #21262D + #46505D
Ghost button:      transparent, quiet hover only
Input:             #11161D + #30363D, hover #161B22, focus #46505D + cyan outline
Focus outline:     3px #38BDF8 retained
No size changes:   retained
```
