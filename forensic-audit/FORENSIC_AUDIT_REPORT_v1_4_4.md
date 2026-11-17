# Forensic Audit Report — VibTools_WEB_UI_v1.4.4

## Baseline

`VibTools_WEB_UI_v1.4.3`

## Audit input

- User-provided v1.4.4 scope lock for Global Card + Form Background / Surface / Border / Input Color Balance.
- Uploaded `VibTools_WEB_UI_v1.4.3.zip` source package.
- Current package source files.

## Finding

The v1.4.3 baseline preserved the correct compact geometry, but form controls used the deepest surface token:

```css
--vib-field: #0B0F17;
--vib-field-hover: #11161D;
--vib-input-focus-border: #46505D;
--vib-inner-border: #21262D;
```

This made inputs/selects/textareas feel too blank/black against the card surface and kept nested panels close to the card surface hierarchy.

## Fix implemented

```css
--vib-field: #12171F;
--vib-field-hover: #181F2B;
--vib-field-focus: #151C28;
--vib-border: #30373F;
--vib-input-focus-border: #38BDF8;
--vib-inner-border: #2A303C;
```

Form controls now use `#12171F` as the normal field surface, `#181F2B` on hover and `#151C28` on focus. Focus border now uses the cyan accent `#38BDF8`, with an inset cyan focus ring. Nested cards/code panels keep the `#11161D` surface but now use `#2A303C` inner borders for cleaner separation.

## Before → After

| Contract | Before | After |
|---|---|---|
| Field surface | `#0B0F17` | `#12171F` |
| Field hover | `#11161D` | `#181F2B` |
| Field focus | Same as hover | `#151C28` |
| Control border | `#30363D` | `#30373F` |
| Focus border | `#46505D` | `#38BDF8` |
| Nested border | `#21262D` | `#2A303C` |
| Version | v1.4.3 | v1.4.4 |

## Contact page note

The uploaded v1.4.3 delta package does not include `Sandbox/pages/contact.html`, so the requested contact-page spacing normalization could not be applied inside this archive without adding a new page file. To preserve the locked file structure, no missing page was created.

## Verification result

- Static validation script: PASS.
- ZIP root structure: PASS — no wrapper folder and no nested ZIP.
- Scope guard: no sidebar/layout/table behavior/typography/spacing/radius changes were introduced.
- Version sync: PASS — runtime/static visible badges now resolve to `v1.4.4`.
