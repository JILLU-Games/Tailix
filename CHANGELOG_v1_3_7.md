# CHANGELOG v1.3.7 — Sandbox Spacing / Padding / Margin / Density

## Baseline

`VibTools_WEB_UI_v1.3.6`

## Scope

Only Sandbox Web app UI/UX spacing / padding / margin / density was updated.

## Before → After

| Area | Before | After |
|---|---:|---:|
| Card padding token | `10px` | `12px` |
| `.vib-card-pad` | `10px` | `12px` |
| `.vib-card-compact` padding | hardcoded `10px` | `var(--vib-card-pad)` = `12px` |
| Nested p utilities | mixed `p-2` / `p-3` | replaced with `.vib-card-pad` where scoped |
| Code block padding | `8px` | `8px 12px` |
| Inner feature/code padding | `7px` | `8px 12px` |
| Button padding | `0 9px` | `4px 12px` |
| Button gap | `5px` | `6px` |
| Input padding | `0 9px` | `4px 10px` |
| Textarea padding | `7px 9px` | `8px 10px` |
| Badge padding | `0 6px` | `2px 8px` |
| Badge gap | `5px` | `6px` |
| Shell content gutter | `10px` | `16px` |
| Standalone container side reserve | `16px total` | `24px total` |
| `.vib-grid` / `2` / `3` gap | `8px` | `12px` |
| Table cell padding | `6px 8px` | `6px 12px` |
| Register email field spacing | missing explicit top margin | `12px` field separation |
| Form action top margin | `12px` utility | `16px` via `.vib-form-actions` |

## Preserved

- Header remains `44px`.
- Sidebar remains `196px`.
- Button min-height remains `30px`.
- Input min-height remains `32px`.
- Textarea min-height remains `72px`.
- Section vertical padding remains `16px`.
- Typography scale remains unchanged.
- Color / border / surface tokens remain unchanged.
- Radius system remains unchanged.
- No layout structure, page list, route, workflow, component naming, Tailwind CDN architecture, shadow, gradient or transform was changed.
