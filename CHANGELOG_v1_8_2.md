# Changelog — v1.9.0 Soft Typography Weight & Contrast Calibration

Baseline: `VibTools_WEB_UI_v1.8.1.zip`
Target: `VibTools_WEB_UI_v1.9.0.zip`

## Scope Lock

Only `Sandbox web UI "SCOPE LOCK: Soft Typography Weight & Contrast Calibration (v1.9.0)"` was applied. The scope is limited to Forms Playground typography weight, brightness and control contrast calibration plus required version/documentation sync.

## Before → After

| Area | Before v1.8.1 | After v1.9.0 |
| --- | --- | --- |
| Section/card headings | Some Forms Playground headings retained visually heavy 600+ weight | Scoped Forms Playground headings are capped at 500 weight with soft off-white `#E6EDF3` |
| Form labels | Labels could appear too bold and bright | Labels use `12px`, `font-weight: 500`, `#C9D1D9` |
| Input/select/textarea text | Input values could appear over-weighted and glare-heavy | Form control text uses `12px`, `font-weight: 400`, `#E6EDF3` |
| Placeholders | Placeholder tone could compete with value text | Placeholders use `font-weight: 400`, `#6E7681` |
| Helper text and badges | Helper/micro text was readable but visually loud in places | Helper text, badges and micro metadata use `font-weight: 400`, `#8B949E` |
| Field surfaces | Borders could read too bright around compact fields | Forms Playground controls use `#0D1117` field background and `#30363D` border |
| Interactions | v1.8.1 functionality present | Password eye, search clear, `Ctrl+K`, async spinner, textarea counter, drag/drop, disabled, readonly and loading states preserved |

## Updated Files

- `Sandbox/css/vibtools-sandbox.css`
- `design-tokens/vibtools.compact.tokens.css`
- `design-tokens/vibtools.compact.tokens.json`
- Runtime version surfaces in `Sandbox/*.html`, `Sandbox/pages/*.html`, and `Sandbox/js/sandbox-nav.js`
- `README.md`, `MANIFEST.md`, `Sandbox/README.md`
- `Sandbox/audit/SANDBOX_MATCH_REPORT.md`, `Sandbox/audit/SANDBOX_VISUAL_QA_CHECKLIST.md`
- `forensic-audit/FORENSIC_AUDIT_REPORT_v1_8_2.md`
- `forensic-audit/DOCUMENT_MISMATCH_AUDIT_v1_8_2.json`
- `validation/COMPACT_FREEZE_VALIDATION.md`, `validation/CHECKSUMS.sha256`

## Scope Guard

No route, sidebar, topbar, auth layout, docs/upload/settings page behavior, form module structure, backend/API logic, or component interaction was removed, renamed, replaced or redesigned.
