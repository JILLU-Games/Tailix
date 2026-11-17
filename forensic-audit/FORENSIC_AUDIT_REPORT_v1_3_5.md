# Forensic Audit Report — v1.3.5 Card / Button / Input Visual Treatment Repair

## Baseline audited

`VibTools_WEB_UI_v1.3.4.zip` was treated as the official baseline freeze.

## Scope lock

Allowed scope only:

- Sandbox Web app card visual treatment.
- Sandbox Web app button visual treatment.
- Sandbox Web app input and textarea visual treatment.
- Directly related documentation/audit/validation records.

Not changed:

- Typography values.
- Font sizes, weights, line heights, or spacing.
- Header height, sidebar width, button height, input height, textarea height, card padding, card radius, layout grid, docs columns, breakpoints, page structure, routes, workflow, feature set, component class names, Tailwind CDN framework, or file/folder architecture.
- Shadows, gradients, glassmorphism or 2px borders.

## Mismatches found in v1.3.4

- Main cards had correct normal surface/border, but no explicit compact hover edge state for visual confirmation.
- Secondary button hover used a low-noise surface but kept the same border strength as the normal state, so it could merge into cards.
- Inputs and textareas retained strong cyan focus outline but did not strengthen the field border itself during focus.
- Nested/code surfaces already had the correct `#11161D` + `#21262D` hierarchy and were preserved.
- Primary and ghost button treatments were already aligned and were preserved.

## Fixes applied

- Preserved main card normal state: `#161B22` with `1px #30363D`.
- Added selective card hover edge: `#46505D` border only, no shadow/transform/gradient/size change.
- Preserved nested surface: `#11161D` with `1px #21262D`.
- Preserved primary button: `#2563EB` normal and `#1D4ED8` hover.
- Refined secondary button hover: `#21262D` surface with selective `#46505D` border.
- Preserved ghost button normal and hover restraint.
- Preserved input/textarea normal surface and hover surface.
- Added input/textarea focus border `#46505D` while retaining the existing strong `3px #38BDF8` focus outline and `3px` offset.
- Added named tokens for `cardHoverBorder`, `buttonSecondaryHoverBorder` and `inputFocusBorder` in JSON/Tailwind records.

## Before → After verification

| Area | Before | After |
|---|---|---|
| Card normal border | `1px #30363D` | unchanged |
| Card hover edge | no explicit card hover edge | `1px #46505D` selective hover |
| Nested surface | `#11161D + #21262D` | unchanged |
| Primary button | `#2563EB / #1D4ED8` | unchanged |
| Secondary hover border | `#30363D` | `#46505D` |
| Secondary hover surface | low-noise hover bg | `#21262D` token |
| Input focus outline | `3px #38BDF8` | unchanged |
| Input focus border | `#30363D` | `#46505D` |
| Button height | `30px` | unchanged |
| Input height | `32px` | unchanged |
| Card padding | `10px` | unchanged |
| Shadow/gradient | none | none |

## Verification result

- HTML static link scan: PASS.
- Tailwind CDN link scan: PASS.
- Sandbox CSS link scan: PASS.
- Forbidden oversized Tailwind utility scan: PASS.
- Canonical token presence: PASS.
- v1.3.3 compact sizing/typography fragment checks: PASS.
- v1.3.4 color/border/surface contrast fragment checks: PASS.
- v1.3.5 card/button/input visual treatment fragment checks: PASS.
- No-growth check: PASS.
- ZIP root-relative layout: PASS.
- Nested ZIP check: PASS.

## Result

The sandbox keeps the same compact framework and layout while refining card edges, secondary button affordance and input focus clarity. The visual target remains flat, compact, bordered, low-noise developer UI with GitHub/Cloudflare/Render-like density.
