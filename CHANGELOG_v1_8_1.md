# Changelog — VibTools Web UI v1.8.1

Baseline frozen: `VibTools_WEB_UI_v1.8.0.zip`.

Scope locked: verification and correction of the latest Production-Grade Form Components Playground implementation only.

## Fixed

- Completed the `Input` module state evidence by adding explicit hover preview, focus preview and missing medium-size input control.
- Replaced the `Password` text-only visibility toggle with a compact eye-icon toggle and preserved the no-layout-shift interaction.
- Corrected the `Search` hotkey badge from `Ctrl K` to `Ctrl+K` to match the locked spec wording.
- Corrected the `Form Label` tooltip pattern so the tooltip button is outside the `<label>` element, preserving valid accessible labeling.
- Made `Helper Text` explicitly document and display the muted slate helper-text state.
- Added an explicit disabled group surface to prove low opacity, greyed background and `pointer-events: none` state behavior.
- Replaced the readonly `Lock` text affordance with a compact lock icon indicator.
- Added scoped CSS fixes only for the Forms Playground: `.is-hover`, `.is-focus`, `.vib-input-md`, `.vib-password-eye`, and `.vib-disabled-surface`.

## Preserved

- No shell, sidebar, topbar, route, auth layout, upload/docs/settings behavior, dashboard top alignment, zero-shadow standard or backend/business logic was changed.
- Existing v1.8.0 module directory and 15 module count were preserved.

## Verification

- Static project integrity check passed.
- HTML reference/link check passed.
- JavaScript syntax check passed for `Sandbox/js/*.js` and `Sandbox/pages/forms/*.js`.
- Browser-render screenshot execution was attempted once and blocked by the environment with `ERR_BLOCKED_BY_ADMINISTRATOR`; it was not retried per the execution stop rule.
