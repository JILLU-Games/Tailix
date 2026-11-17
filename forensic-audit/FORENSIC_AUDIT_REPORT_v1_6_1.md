# Forensic Audit Report — VibTools WEB UI v1.6.1

## Baseline

- Source baseline: `VibTools_WEB_UI_v1.6.0.zip`
- Updated package: `VibTools_WEB_UI_v1.6.1.zip`
- Scope: Page Category Layout Separation & Top Alignment Fix

## Root-Cause Finding

`forms.html` and `profile.html` were misclassified as Auth surfaces in v1.6.0. Both pages inherited `.vib-auth-viewport`, which applies centered flex alignment and made regular dashboard pages float in the middle of the viewport.

## Before → After

| Area | Before — v1.6.0 | After — v1.6.1 |
|---|---|---|
| `forms.html` wrapper | `.vib-auth-viewport vib-form-demo-viewport` | `.vib-app-page` |
| `forms.html` header | Centered inside viewport flow | Top-left dashboard page header with 24px page padding |
| `forms.html` content grid | Centered form demo viewport stack | Standard `.vib-grid-2col` app component grid |
| `profile.html` wrapper | `.vib-auth-viewport vib-profile-viewport` | `.vib-app-page` |
| `profile.html` content | Vertically centered profile editor | Top-aligned profile editor app grid |
| Auth pages | Required centered layout | Preserved for `login.html` and `register.html` only |

## Verification

- PASS: `forms.html` has no `.vib-auth-viewport`.
- PASS: `profile.html` has no `.vib-auth-viewport`.
- PASS: `forms.html` and `profile.html` both use `.vib-app-page`.
- PASS: `login.html` and `register.html` preserve `.vib-auth-viewport`.
- PASS: CSS defines `.vib-app-page`, `.vib-page-header`, `.vib-grid-2col`, and `.vib-auth-page`.
- PASS: Visible/runtime Sandbox version is synchronized to `v1.6.1`.
- PASS: HTML parse smoke check, JSON token parse check, JS syntax check and ZIP root contract verification completed.

## Scope Guard

No sidebar width, topbar height, color token, routing, table, docs, logs, monitoring, or auth split-card architecture changes were made outside the locked scope.
