# Phase 07 Plan: Automated Unit + Playwright Verification, Checksums & Docs Sync

> **Status**: COMPLETED (`2026-11-17`)  
> **Bugs Addressed**: `BUG-17`

## 1. Strict Scope Lock
- **Allowed Files**:
  - `tests/tailix.test.mjs` (or `.test.js` using built-in `node:test` + `node:assert`)
  - `validation/CHECKSUMS.sha256`, `validation/no_growth_check.py`, `validation/sandbox_static_check.py`
  - `DESIGN_SYSTEM.md`, `MANIFEST.md`, `README.md`, `MEMORY.md`, `docs/*`, `project/*`, `framework/README.md`, `framework/MANIFEST.md`, `framework/css/*` docs, `framework/js/*` docs, `CHANGELOG_*`
  - Root `package.json` `"test"` script hook (preserving `"dev"`, `"build"`, `"start"`, `"lint"`)
- **Forbidden Out-of-Scope**: Adding runtime UI features or refactoring working `framework/` / `Sandbox/` code (only targeted bugfixes if a test exposes a failure).

## 2. Exact Implementation Tasks
1. **Automated Unit Test Suite (`node:test`)**:
   - Test `Tailix._internals` (`escapeHtml`, `createEventBus` isolation/once/off, `validateValue` required/email/url/number/min/max/regex-invalid/custom, `filterAndSortRows` search/filter/numeric sort/reverse) and DOM-guarded API methods (`theme`, `sidebar`, `Form`, `Table`).
2. **Real Browser Playwright Audit (`http://localhost:3000`)**:
   - Verify `Sandbox/index.html`, `Sandbox/pages/settings.html`, `Sandbox/pages/plugins.html`, `Sandbox/pages/cards.html`, and `framework/examples/static.html` across Desktop (`1280×800`) and Mobile (`375×812`) viewports in both Dark & Light modes:
     - Zero `console.error` / `pageerror` / broken images
     - Dropdown open → click theme/toast closes dropdown cleanly
     - Modal opens → `Tab` cycles inside modal → `Escape` closes and restores focus
     - Mobile sidebar closed by default on `<= 768px`, drawer opens with backdrop on toggle
     - Zero horizontal overflow (`scrollWidth <= innerWidth`)
3. **Refresh Checksums & Documentation Sync (`AGENTS.md` Compliance)**:
   - Run `validation/no_growth_check.py` & `validation/sandbox_static_check.py` cleanly.
   - Regenerate `validation/CHECKSUMS.sha256` with `0` mismatches and `0` missing files.
   - Synchronize `DESIGN_SYSTEM.md`, `docs/`, `project/`, `framework/` manifests, and issue clean release notes.

## 3. Verification Criteria
- `node --test tests/*.test.js` passes 100%.
- `python3 validation/no_growth_check.py` & `python3 validation/sandbox_static_check.py` & `sha256sum -c validation/CHECKSUMS.sha256` pass 100%.
- Playwright runtime sweep reports `0` console/page errors and `0` failed interactions.
