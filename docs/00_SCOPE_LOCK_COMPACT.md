# VibTools Web UI Official Freeze Scope — v2.2.0

## Freeze decision

`VibTools_WEB_UI_v2.2.0.zip` is the current official UI baseline. The Sandbox runtime, foundation token engine, component playgrounds, documentation, validation records, and handoff documents must describe this same baseline.

This package is a **documentation-only full rewrite sync**. It does not redesign or mutate the runtime UI, route workflow, component module count, shell architecture, backend/API behavior, or dependency model.

## Source of truth order

1. `Sandbox/assets/css/foundation/_colors.css`
2. `Sandbox/assets/css/foundation/_typography.css`
3. `Sandbox/assets/css/foundation/_spacing.css`
4. `Sandbox/assets/css/foundation/_radius.css`
5. `Sandbox/assets/css/foundation/_shadows.css`
6. `Sandbox/assets/css/foundation/_icons.css`
7. `Sandbox/assets/css/foundation/_breakpoints.css`
8. `Sandbox/assets/css/foundation/_motion.css`
9. `Sandbox/assets/css/vibtools-theme.css`
10. `Sandbox/css/vibtools-sandbox.css`
11. `Sandbox/js/tailwind-config.js`
12. Official freeze documents in `docs/`, `components/`, `design-tokens/`, `ai-handoff/`, `validation/`, and `forensic-audit/`

The foundation files are the design-system source of truth. Legacy `--vib-*` variables remain compatibility aliases and must resolve through the foundation engine.

## Non-negotiable locked runtime rules

| System area | Locked v2.2.0 contract |
|---|---|
| App shell | Existing sidebar/topbar/page structure stays unchanged. |
| Topbar height | `--height-topbar: 44px`; legacy alias `--vib-header`. |
| Sidebar width | `--width-sidebar: 196px`; legacy alias `--vib-sidebar`. |
| Page layout | Standard pages use top-aligned `.vib-app-page`; auth pages keep centered auth behavior. |
| Typography | Regular/medium weights only for most UI: `400`/`500`; bold token is capped at `600` only for approved emphasis. |
| Text color | Primary UI text uses low-glare `#E6EDF3`; content/subhead text uses `#C9D1D9`; secondary text uses `#8B949E`; muted text uses `#6E7681`. |
| Surface model | Dark, flat, border-driven UI; no card elevation. |
| Shadows | `--shadow-card`, `--shadow-focus`, and `--shadow-overlay` are `none`. |
| Components | Forms, Cards, and Navigation playground module counts remain unchanged. |
| Token engine | Changing foundation semantic tokens must propagate through runtime legacy aliases and `ui.*` Tailwind aliases. |

## Implemented baseline features included in the freeze

- Production form primitives playground with modular `Sandbox/pages/forms/` files.
- Production card primitives playground with modular `Sandbox/pages/cards/` files.
- Production navigation primitives playground with modular `Sandbox/pages/Navigation/` files.
- Upload Files page and reusable upload/dropzone states.
- Settings page with sticky sub-navigation and danger-zone styling.
- Docs/API playground layout.
- Logs modal visual module.
- Monitoring dashboard visual module.
- Global zero-shadow flat UI.
- v2.2.0 8-Module Token Foundation Engine and completion bridge.

## Current documentation sync rule

All official freeze files must say `v2.2.0` as the current baseline. Historical changelog files may keep their release names, but active freeze sheets, handoff docs, validation docs, component contracts, and token records must not claim an older active baseline.
