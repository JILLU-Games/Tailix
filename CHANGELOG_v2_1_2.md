# CHANGELOG v2.1.2 → v2.2.0 — Single Token Foundation Audit Freeze

> **Archive Note**: File `CHANGELOG_v2_1_2.md` preserves the `v2.1.2 → v2.2.0` transition audit freeze record; see `CHANGELOG_v2_2_0.md` for the full `v2.2.0` release log.

Baseline: `VibTools_WEB_UI_v2.1.1.zip`  
Scope: Verification/fix only for the Single Token Foundation Engine. No page layout, route, module count, component workflow, backend/API behavior, sidebar width, topbar height or playground behavior was redesigned.

## Before → After

| Area | Before v2.1.1 | After v2.2.0 |
|---|---|---|
| Remaining legacy-only tokens | Logo, auth, docs font scale, compact button height, selection/focus and mono font aliases were still partially backed by older raw declarations | Added final foundation-backed completion aliases |
| Foundation tokens | Root engine covered core colors, typography, spacing, surfaces and motion | Added audit completion tokens for brand/logo, auth surfaces, docs font scale, selection/focus and mono font |
| Runtime CSS bridge | Existing `--vib-*` aliases mostly mapped to foundation | Added final bridge layer for remaining legacy compatibility tokens |
| Theme aggregator | Core utility classes and legacy aliases present | Added v2.2.0 completion bridge |
| Documentation/validation | v2.1.1 verification state | Updated to v2.2.0 audit freeze |
| Version | `v2.1.1` | `v2.2.0` |

## Scope Guard

Preserved without redesign: app shell, page layouts, sidebar width, topbar height, routes, forms/cards/navigation module counts, docs, upload, settings, monitoring, logs modal, table behavior, JavaScript workflow, backend/API logic and dependency model.
