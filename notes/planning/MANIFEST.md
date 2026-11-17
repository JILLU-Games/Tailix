# Planning Directory Manifest

## Overview
- **Location**: `/notes/planning`
- **Purpose**: Frozen baseline snapshot, source-verified forensic audit, bug/scope-lock registry, 7-phase roadmap, error handling spec, actual implementation status, and per-phase scope-locked plans.

## Inventory
| Item | Type | Purpose / Description | Status |
|---|---|---|---|
| `README.md` | File | Guidelines and format for planning and audit notes. | Active |
| `MANIFEST.md` | File | Manifest of files inside `/notes/planning`. | Active |
| `FORENSIC_AUDIT_REPORT.md` | File | Source-code-verified forensic audit of changelogs, tokens, Tailwind usage, Sandbox UI, and `framework/` readiness. | Active |
| `000_BASELINE_FREEZE.md` | File | Frozen pre-update baseline snapshot with exact file sizes, SHA256 prefixes, and audit cross-check. | Active |
| `001_PRODUCTION_BUGS_AND_SCOPE_LOCK.md` | File | Catalog of all 17 verified bugs (`BUG-01`–`BUG-17`) and strict per-phase allowed/forbidden Scope Lock rules. | Active |
| `002_PRODUCTION_ROADMAP.md` | File | Step-by-step A-Z 7-phase roadmap to make both Sandbox and `framework/` production-ready. | Active |
| `004_ERROR_HANDLING_SPEC.md` | File | Audit of existing error handling and exact defensive guards to add per phase. | Active |
| `005_ACTUAL_IMPLEMENTATION_STATUS.md` | File | Factual ledger of features actually working now, broken/partial, and pending implementation. | Active |
| `phase-01-plan.md` | File | Scope-locked plan for Phase 01 (Sandbox broken `settings.html`, `settings-components.js`, SVG/mojibake/BOM fixes). | Completed |
| `phase-02-plan.md` | File | Scope-locked plan for Phase 02 (Tokens, `Segoe UI`, weights `<=500`, flat zero-shadow, zero-radius mode, Light-mode CSS). | Completed |
| `phase-03-plan.md` | File | Scope-locked plan for Phase 03 (Unified shell/theme toggle, 27-link nav, JS guards, `validation/*` repair). | Completed |
| `phase-04-plan.md` | File | Scope-locked plan for Phase 04 (`framework/` JS bug fixes, Light parity, flat CSS & `--radius: 0rem` toggle). | Completed |
| `phase-05-plan.md` | File | Scope-locked plan for Phase 05 (`framework/` mobile drawer, built-in icons & missing UI components). | Completed |
| `phase-06-plan.md` | File | Scope-locked plan for Phase 06 (`framework/` packaging, PWA support, `.vib-*` bridge, live PHP/Python apps). | Completed |
| `phase-07-plan.md` | File | Scope-locked plan for Phase 07 (`node:test`, Playwright QA, SHA256 checksums, `docs/`/`project/` sync). | Completed |
