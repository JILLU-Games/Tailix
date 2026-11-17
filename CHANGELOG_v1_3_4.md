# Changelog v1.3.4 — Color / Border / Surface Contrast Repair

## Baseline

`VibTools_WEB_UI_v1.3.3` is the official baseline freeze for this update.

## Scope lock

Only Sandbox Web app UI/UX **Color / Border / Surface contrast** was changed.

No typography, sizing, spacing, layout, navigation, workflow, page list, file architecture, component naming, Tailwind CDN setup, or runtime behavior was changed.

## Before → After

| Area | Before | After |
|---|---|---|
| Card surface | `#161B22` | unchanged |
| Main card border | direct `#30363D` use | `--vib-card-border: #30363D` reusable primary component border |
| Nested/field border | direct `#21262D` use | `--vib-inner-border: #21262D` reusable internal border |
| Sidebar active background | `rgba(37,99,235,.16)` | `rgba(37, 99, 235, .10)` restrained active surface |
| Sidebar active border | `rgba(56,189,248,.26)` | `rgba(56, 189, 248, .18)` subtle active border |
| Sidebar hover | same treatment as active | separate `--vib-hover-bg` with soft border |
| Sidebar inactive icon | cyan accent | muted by default, cyan only on hover/active |
| Badge background | `rgba(255,255,255,.025)` | `rgba(255, 255, 255, .018)` lower-noise badge surface |
| Grid helper line | `rgba(255,255,255,.028)` | `rgba(255,255,255,.018)` quieter technical grid |
| Topbar surface | `rgba(13,17,23,.94)` | `rgba(13,17,23,.96)` slightly firmer shell layer |
| Field/input surface | `#11161D` | unchanged; hierarchy preserved |
| Primary action | `#2563EB / #1D4ED8` | unchanged |
| Focus state | `3px #38BDF8` + `3px` offset | unchanged |

## Locked hierarchy

```text
Deep/sidebar:        #0B0F17
Canvas:              #0D1117
Nested/field:        #11161D
Card/panel:          #161B22
Hover/elevated:      #21262D
Primary border:      #30363D
Internal border:     #21262D
Strong border:       #46505D selective only
Primary text:        #F8FAFC
Content text:        #C9D1D9
Muted text:          #8B949E
Accent/focus/link:   #38BDF8
Primary action:      #2563EB
Primary hover:       #1D4ED8
```
