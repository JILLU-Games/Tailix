# Forensic UI/UX Audit Report — v1.9.0

## Baseline

`VibTools_WEB_UI_v1.8.1.zip` was treated as the frozen official baseline.

## Locked Scope

`Soft Typography Weight & Contrast Calibration (v1.9.0)` only:

- `forms.html`
- `Sandbox/pages/forms/*` component modules
- shared CSS/token documentation required to express and freeze the updated Forms Playground typography/contrast contract
- runtime version/documentation sync to `v1.9.0`

## Audit Findings from v1.8.1

| Finding | Evidence | Root Cause | v1.9.0 Fix |
| --- | --- | --- | --- |
| Form labels and some module text appeared too heavy | `.vib-label`, `.vib-h2`, `.vib-badge`, file/mini item strong labels and action chips inherited 500/600/650+ weight rules | Earlier precision scale reduced size but not all Forms Playground font weights | Added scoped v1.9.0 override: labels/headers/actions capped at 500, inputs/helpers/badges at 400 |
| Input/select/textarea values appeared brighter/heavier than desired | Forms controls inherited the global `--vib-text` and field rules | Component state implementation was correct but contrast was not softened | Scoped form control text to `#E6EDF3`, `font-weight: 400`, field background `#0D1117`, border `#30363D` |
| Placeholder text lacked enough separation from active values | Placeholder tone inherited from earlier muted rules inconsistently | No final scoped placeholder contract for the Forms Playground | Added scoped placeholder color `#6E7681`, weight `400`, opacity `1` |
| Helper/badge/micro metadata could read louder than the intended hierarchy | Badge and helper elements still had 500/600 rules from base components | Badge/action defaults predated v1.9.0 Forms calibration | Added scoped helper/badge/micro metadata color `#8B949E`, weight `400` |

## Verification Matrix

| Check | Result |
| --- | --- |
| `forms.html` route preserved | PASS |
| `forms.html` remains `.vib-app-page` top-aligned | PASS |
| `.vib-auth-viewport` absent from `forms.html` | PASS |
| 15 form HTML modules present | PASS |
| 15 form JS modules present | PASS |
| Password eye toggle JS preserved | PASS |
| Search clear action preserved | PASS |
| `Ctrl+K` badge preserved | PASS |
| Textarea counter/auto-expand preserved | PASS |
| Checkbox indeterminate setup preserved | PASS |
| File picker/change label preserved | PASS |
| Dropzone drag handlers preserved | PASS |
| Disabled pointer-events surface preserved | PASS |
| Readonly lock state preserved | PASS |
| Loading skeleton/spinner preserved | PASS |
| Scoped v1.9.0 CSS typography override present | PASS |
| Version sync to v1.9.0 in runtime badges | PASS |
| ZIP root contains direct project files; no wrapper folder | PASS |

## Browser Render Attempt

A single headless Chromium render attempt for `forms.html` was made for desktop/tablet/mobile viewport inspection. The local file navigation was blocked by the execution environment with `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Following the execution stop rule, no repeated browser retries were performed. Static structure validation, JavaScript syntax checks, route/reference checks, scoped CSS contract checks and ZIP integrity checks were completed successfully.

## Scope Control Confirmation

The v1.9.0 patch did not alter global shell geometry, sidebar width, topbar height, route names, page file structure, auth centering, settings/docs/upload layout behavior, backend/API logic, dependency loading or the v1.8.1 component interaction set.

## Final Status

PASS — v1.9.0 is frozen as the next Replace Ready baseline after scoped typography and contrast calibration.
