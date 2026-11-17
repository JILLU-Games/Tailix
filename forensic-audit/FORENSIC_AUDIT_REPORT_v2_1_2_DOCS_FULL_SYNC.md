# Forensic Audit Report — v2.2.0 Official Freeze Documents Full Rewrite Sync

## Baseline

Input baseline: `VibTools_WEB_UI_v2.2.0.zip`.

## Audit finding

Before this sync, the Sandbox runtime was already v2.2.0, but active freeze documents were mixed across old baselines. Several active docs still described v1.7.5, v1.8.1, v2.0.1, v2.1.0 or v2.1.1 as current.

## Root cause

Previous packages used append-only sync notes in some documents. Old headings, token tables, component contracts and validation statements were not fully rewritten.

## Fix

The active documentation set was rewritten so the official source-of-truth documentation points to v2.2.0 only.

## Updated scope

- `docs/*.md` active freeze guides.
- `ai-handoff/*.md`.
- `components/*.md` and sample HTML.
- `design-tokens/*.json` and CSS mirror metadata/value corrections.
- `README.md`, `MANIFEST.md`, `validation/COMPACT_FREEZE_VALIDATION.md`, `validation/CHECKSUMS.sha256`.

## Verification

- Runtime version remains v2.2.0.
- Foundation token engine files remain present.
- Local route/reference checks pass.
- JavaScript syntax checks pass.
- Compact no-growth validation passes.
- ZIP root packaging remains replace-ready.

## Scope guard

No runtime UI, workflow, module count, sidebar width, topbar height, page structure, backend/API logic or dependency model was redesigned or removed.
