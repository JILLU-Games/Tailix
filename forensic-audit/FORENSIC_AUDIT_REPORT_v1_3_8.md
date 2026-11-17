# Forensic Audit Report v1.3.8 — Layout Alignment & Space Distribution Fix

## Baseline

`VibTools_WEB_UI_v1.3.7`

## Scope lock

Only Sandbox Web app UI/UX **Layout Alignment & Space Distribution** was updated.

## Root cause verified

The v1.3.7 sandbox used a 1040px content cap with shell-level left/right margins. On large desktop screens this caused content to stay visually left-biased while the right side remained underused. Narrow form/profile panels were also left-aligned inside the main content area.

## Before → After

| Area | Before | After |
|---|---:|---:|
| `.vib-container` width | `min(100% - 24px, 1040px)` | `min(100% - 32px, 1280px)` |
| `.vib-doc-container` width | `min(100% - 24px, 720px)` | `min(100% - 32px, 1160px)` |
| Shell container alignment | `margin-left:16px; margin-right:16px` | `margin-left:auto; margin-right:auto` |
| Shell container max | `1040px` | `1280px` |
| Docs shell max | `720px` | `1160px` |
| Docs grid placement | left-flow | centered with `justify-content:center` |
| `.vib-grid-3` columns | `repeat(3, minmax(0, 1fr))` | `repeat(auto-fit, minmax(300px, 1fr))` |
| 380/520/560px panels | left-aligned | centered in shell container |

## Preserved

```text
Typography: unchanged
Color palette: unchanged
Border/surface contrast: unchanged
Card/button/input visual treatment: unchanged
States/interactions/feedback: unchanged
Topbar height: 44px retained
Sidebar width: 196px retained
Card padding: 12px retained
Button/input sizes: retained
Page routes/content: unchanged
Feature/workflow/functionality: unchanged
Component class names: unchanged
Tailwind CDN architecture: unchanged
```

## Validation

- ZIP integrity: PASS
- Apply test: PASS
- Sandbox static validation: PASS
- No-growth validation: PASS

## Result

The sandbox now distributes space more like a compact developer platform layout while preserving every component-level compact contract from v1.3.7.
