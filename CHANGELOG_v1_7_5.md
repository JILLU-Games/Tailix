# Changelog — VibTools Web UI v1.7.5

## Scope

Precision Typography & Color Refinement over the frozen v1.7.4 baseline.

## Before → After

| Area | Before | After |
| --- | --- | --- |
| Audited page H1 titles | v1.7.4 target was 18px but screenshots still looked visually oversized | Forced to strict 16px with 1.25 line-height |
| Section titles | Too close in hierarchy to row labels | Scoped to 13px and restrained `#C9D1D9` |
| Row/form labels | Competed with section titles | Scoped to 12px medium |
| Descriptions/helper text | Still visually noisy at 12px / `#8B949E` | Scoped to 11px / `#7D8590` |
| Docs method badges | Still too bright in the API navigation/playground | Lower-opacity semantic fills with restrained borders |
| Upload file badges | Still visually loud in file queue rows | Neutral dark fill + muted text |
| Settings switches | Bright blue active state | Soft `#238636` active state |

## Preserved

No file structure, route, app shell, sidebar width, topbar height, JavaScript workflow, form behavior, docs API playground structure, upload queue markup, settings sticky layout, or zero-shadow flat UI contract was changed.
