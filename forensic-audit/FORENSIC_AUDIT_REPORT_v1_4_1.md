# Forensic Audit Report v1.4.1 — Background & Surface Color System

Baseline `VibTools_WEB_UI_v1.4.0` was inspected for the locked Card / Section / Form / Table / Container Background & Surface Color System scope. The supplied report identified low contrast between card, nested, form-field, table-header and feedback surfaces.

## Scope lock verified

Changed only:

```text
Input/select/textarea inset background token
Input/select/textarea hover/focus surface token
Field/nested panel surface routing where needed
Table header background and divider color
Table row hover background
Alert feedback background and semantic left border color
Visible version synchronization
Related docs/tokens/validation records
```

Not changed:

```text
Routes/hrefs
Sidebar width
Topbar height
Main canvas
Card/panel surface
Nested panel/code surface
Docs/form/sidebar layout architecture
Typography scale
Spacing/density system
Radius system
Primary/cyan brand actions
Tailwind CDN architecture
Shadows/gradients/transforms
```

## Before → After

| Area | Before | After |
|---|---:|---:|
| Canvas/shell | `#0D1117` | retained `#0D1117` |
| Card/panel | `#161B22` | retained `#161B22` |
| Nested panel/code/subtle | `#11161D` | retained `#11161D` |
| Form controls | `#11161D` | `#0B0F17` |
| Form control hover/focus | `#161B22` | `#11161D` |
| Table wrapper | `#161B22` | retained `#161B22` |
| Table header | `#11161D` | `rgba(13, 17, 23, .60)` |
| Table header divider | `#21262D` | `#30363D` |
| Table row hover | `rgba(33, 38, 45, .74)` | `rgba(255, 255, 255, .03)` |
| Alert state background | `rgba(17, 22, 29, .78)` | `#11161D` |
| Alert semantic emphasis | semantic border tint | semantic tint + solid semantic left edge |
| Visible badge | `v1.4.0` | `v1.4.1` |

## Verification result

- ZIP root structure is replace-ready with no wrapper folder and no nested ZIP.
- CSS contains required v1.4.1 surface tokens and preserves canonical brand tokens.
- `sandbox-nav.js` synchronizes visible version badges to `v1.4.1`.
- Included HTML pages contain the synchronized `v1.4.1` version badge.
- Validation script compiles and verifies surface contracts, sidebar contracts, version synchronization, compact guardrails and Tailwind CDN references.
- Documentation and token records are updated to match the v1.4.1 surface-color system.
