# Forensic Audit Report v1.3.7 — Spacing / Padding / Margin / Density

## Baseline

`VibTools_WEB_UI_v1.3.6`

## Scope lock

Only Sandbox Web app UI/UX spacing / padding / margin / density was updated.

## Implementation audit

| Requirement | Result |
|---|---|
| Card internal padding standardized to 12px | PASS |
| Mixed `p-2` / `p-3` nested-card page utilities removed | PASS |
| Inner code/feature box padding set to 8px 12px | PASS |
| Label-to-input gap preserved at 4px | PASS |
| Field-group separation normalized to 12px | PASS |
| `register.html` missing field gap fixed | PASS |
| Form action margin set to 16px | PASS |
| Button padding set to 4px 12px while retaining 30px height | PASS |
| Input padding set to 4px 10px while retaining 32px height | PASS |
| Badge padding set to 2px 8px while retaining 20px height | PASS |
| Sidebar/content gutter set to 16px | PASS |
| `.vib-grid`, `.vib-grid-2`, `.vib-grid-3` gap set to 12px | PASS |
| `.vib-section` block padding retained at 16px | PASS |
| Table cell padding set to 6px 12px | PASS |
| No typography/color/radius/layout/route/workflow change | PASS |

## Before → After

```text
--vib-card-pad:                 10px → 12px
.vib-card-compact padding:      10px → var(--vib-card-pad)
.vib-code padding:              8px → 8px 12px
.vib-code-inner padding:        7px → 8px 12px
.vib-button padding:            0 9px → 4px 12px
.vib-input padding:             0 9px → 4px 10px
.vib-textarea padding:          7px 9px → 8px 10px
.vib-badge padding:             0 6px → 2px 8px
.vib-layout gutter:             10px → 16px
.vib-grid/.vib-grid-2/.vib-grid-3 gap: 8px → 12px
.vib-table th/td padding:       6px 8px → 6px 12px
form actions:                   mt-3 / 12px → .vib-form-actions / 16px
register email label gap:       missing explicit margin → mt-3 / 12px
```

## Preserved

```text
Topbar: 44px
Sidebar: 196px
Button min-height: 30px
Input min-height: 32px
Textarea min-height: 72px
Card radius: 12px
Control radius: 8px
Typography scale: unchanged
Color/border/surface hierarchy: unchanged
Interaction states: unchanged
Tailwind CDN setup: unchanged
Sandbox page list: unchanged
```

## Validation

- ZIP integrity: PASS
- Apply test: PASS
- `python validation/sandbox_static_check.py`: PASS
- `python validation/no_growth_check.py`: PASS
