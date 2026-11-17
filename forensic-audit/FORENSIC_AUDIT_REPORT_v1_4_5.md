# Forensic Audit Report — VibTools_WEB_UI_v1.4.5

## Baseline

`VibTools_WEB_UI_v1.4.4.zip`

## Scope lock

Only **Sandbox Web app Navigation, Action Controls & UI Shell Refinement (v1.4.5)** was modified.

## Audit basis

- Uploaded v1.4.4 package.
- User-provided screenshot of `navigation.html`.
- User-provided v1.4.5 scope lock for navigation state, button/action control density, breadcrumb/header rhythm and version sync.

## Implemented before → after

| Area | Before — v1.4.4 | After — v1.4.5 |
|---|---|---|
| Navigation active background | `rgba(37, 99, 235, .10)` active fill | `#12171F` compact active surface |
| Navigation active border | `rgba(56, 189, 248, .18)` full border + cyan left edge | `#30373F` component border + `#38BDF8` left accent border |
| Navigation hover surface | `rgba(33, 38, 45, .74)` | `#181F2B` |
| Button height | 30px base / 28px in form/table contexts | 28px compact global action height token |
| Button padding | `4px 12px` base | `4px 10px` compact action control padding |
| Secondary button | surface + default border | `#161B22` surface + `#30373F` border token |
| Ghost button hover | general hover rgba surface | navigation hover surface `#181F2B` |
| Breadcrumb | no dedicated breadcrumb pattern | compact `Dashboard / Navigation` breadcrumb on `navigation.html` |
| Version | `v1.4.4` runtime/static | `v1.4.5` runtime/static |

## Files touched

```text
README.md
MANIFEST.md
CHANGELOG_v1_4_5.md
Sandbox/css/vibtools-sandbox.css
Sandbox/js/sandbox-nav.js
Sandbox/js/tailwind-config.js
Sandbox/index.html
Sandbox/pages/*.html
Sandbox/audit/SANDBOX_MATCH_REPORT.md
Sandbox/audit/SANDBOX_VISUAL_QA_CHECKLIST.md
components/component-contracts-tailwind-cdn.md
design-tokens/vibtools.compact.tokens.json
docs/09_FINAL_LOCK_SUMMARY_v1_3.md
forensic-audit/FORENSIC_AUDIT_REPORT_v1_4_5.md
validation/CHECKSUMS.sha256
validation/sandbox_static_check.py
```

## Guardrail verification

- No parent wrapper folder required for delivery.
- No nested ZIP required for delivery.
- No sidebar width change.
- No topbar height change.
- No card/form/table architecture replacement.
- No route removal.
- No typography scale change.
- No radius, shadow or gradient addition.
- Version sync target: `v1.4.5`.

## Final status

PASS — v1.4.5 implements the locked navigation/action-control/shell refinement scope and preserves the v1.4.4 architecture outside the requested UI layer.
