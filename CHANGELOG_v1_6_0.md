# CHANGELOG v1.6.0 — Auth Surface & Compact Form Architecture

## Baseline

- Source baseline: `VibTools_WEB_UI_v1.5.1.zip`
- Target delivery: `VibTools_WEB_UI_v1.6.0.zip`

## Locked Scope

```text
Auth Surface & Compact Form Architecture (v1.6.0)
```

## Added / Updated

- Added `.vib-auth-viewport` to center Login, Register, Profile, and Forms surfaces in the available app viewport.
- Added split-view auth shell classes for Login and Register: `.vib-auth-split-container`, `.vib-auth-hero`, and `.vib-auth-card`.
- Added compact social provider actions for Login/Register using `.vib-social-row` and `.vib-social-button`.
- Added `.vib-form-card`, `.vib-auth-field-stack`, `.vib-form-field`, and `.vib-form-grid-auto` for consistent form spacing and responsive field grids.
- Updated `login.html`, `register.html`, `profile.html`, and `forms.html` to use the new auth/form architecture.
- Added auth surface tokens to `vibtools-sandbox.css`, `vibtools.compact.tokens.css`, and `vibtools.compact.tokens.json`.
- Synchronized visible/runtime/static app version to `v1.6.0`.

## Before → After

| Component | Before | After |
|---|---|---|
| Login/Register placement | Top-hanging split form region | Centered `.vib-auth-viewport` split shell |
| Auth card geometry | Inherited compact card padding | Dedicated `28px 24px` auth card padding |
| Field spacing | Mixed utility margin rhythm | `16px` field stack, `6px` label gap |
| Action margin | `12px` rhythm | `20px` auth/form action margin |
| Social login | Missing | Compact Google/GitHub/Apple provider row |
| Profile/Forms | Top-aligned form surfaces | Centered form-card architecture |

## Preserved

- No route, filename, sidebar width, topbar height, docs layout, table system, monitoring page, log modal, or global shell architecture was removed or renamed.
