# CHANGELOG v1.6.1 — Page Category Layout Separation & Top Alignment Fix

## Scope Lock

Only the Dashboard/App page classification bug is corrected. Auth pages remain centered; component/application pages return to standard top-aligned dashboard flow.

## Changed

- `forms.html`: removed `.vib-auth-viewport` and converted the page wrapper to `.vib-app-page`.
- `forms.html`: restored top-left header flow for `FORMS DEMO`, title, subtitle and form grid content.
- `profile.html`: removed `.vib-auth-viewport` and converted the page wrapper to `.vib-app-page`.
- `profile.html`: changed copy that incorrectly described the profile page as a centered form architecture.
- `vibtools-sandbox.css`: added `.vib-auth-page`, `.vib-app-page`, `.vib-page-header`, and `.vib-grid-2col` layout separation contracts.
- Version synchronized to `v1.6.1` for visible Sandbox headers, runtime navigation, docs, manifest and validation files.

## Not Changed

- Sidebar width, topbar height, global shell, routing, colors, tokens, auth split-card design and non-form/dashboard pages were not structurally changed.
- `login.html` and `register.html` continue using centered auth surfaces.
