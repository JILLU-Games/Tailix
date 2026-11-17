# 001: Production Bug Registry & Strict Phase Scope-Lock Matrix

> **Source**: Verified 1-to-1 against `notes/planning/FORENSIC_AUDIT_REPORT.md` and `notes/planning/000_BASELINE_FREEZE.md`.  
> **Rule**: Every bug is assigned to exactly ONE phase with explicit **Allowed Files** and **Forbidden Out-of-Scope Targets**.

---

## 1. Verified Bug Catalog (Mapped to Phases)

| Bug ID | Severity | Exact Location & Proof | Root Cause | Assigned Phase |
|---|---|---|---|---|
| **BUG-01** | **CRITICAL** | `Sandbox/pages/settings.html:1–2, 92, 100–101` | Corrupted file: pasted `format: <line_number>` header, empty `<main class="vib-main"></main>`, pasted footer text | **Phase 01** |
| **BUG-02** | **CRITICAL** | `Sandbox/pages/forms/settings-components.js:3–41, 100–106, 159, 191` | `6` empty `"html": ""` stubs; `onclick="showToast(...)"` throws `ReferenceError` (no `showToast` loaded); `5×` `stroke-[var(--icon-stroke)]`; mojibake `â€¢` | **Phase 01** |
| **BUG-03** | **HIGH** | `Sandbox/index.html` (`8×`), `404.html` (`3×`), `500.html` (`4×`), `toast-manager.js:48,55,61,68,84` (`5×`), `modal-manager.js:64` (`1×`), `settings-components.js` (`5×`) | Tailwind parses `stroke-[var(--icon-stroke)]` as SVG `stroke` color instead of `stroke-width` (`1.5px`) | **Phase 01** |
| **BUG-04** | **MEDIUM** | `Sandbox/pages/{cards,dashboard-shell,forms,login,navigation,profile,register,upload}.html` (`8` files); `404.html`, `500.html`, `_template.html` (`3` BOM); `12` files `width="28"` | UTF-8 mojibake (`â€”`), leading BOM `\ufeff`, and hardcoded `width="28" height="28"` topbar brand images | **Phase 01** |
| **BUG-05** | **HIGH** | `Sandbox/assets/css/foundation/_typography.css:3`, `_radius.css:3–7`, `vibtools-sandbox.css:337–355` (`46` bold rules), `sandbox-only.css:33` (`box-shadow`) | Font stack uses `Inter` first instead of `Segoe UI`; radii `3px–9999px` without `0rem` compact mode; `46` bold (`600–800`) rules; forbidden `box-shadow` | **Phase 02** |
| **BUG-06** | **HIGH** | `Sandbox/css/vibtools-sandbox.css:2–329, 1291–2530, 2654–2864` | Triple `:root` rewrite + `75` dark-only hexes after `L330` (`--vib-card-playground-title: #E6EDF3`, etc.) without Light theme overrides | **Phase 02** |
| **BUG-07** | **MEDIUM** | `Sandbox/js/tailwind-config.js` vs `design-tokens/vibtools.tailwind-cdn.config.js` + `vibtools.compact.tokens.css` + `370` `[...]` Tailwind brackets + `19+2` `font-semibold` | Conflicting token variable names (`--vib-*` vs `--bg-*`), stale `v2.1.2` headers, arbitrary utility sprawl | **Phase 02** |
| **BUG-08** | **HIGH** | `Sandbox/` `26` static pages vs `2` `shell-manager.js` pages; sidebar link drift (`22`/`24`/`27` links); `34` sub-fragments missing CSS links | `26` pages lack `#vib-theme-toggle`, `data-theme` persistence, and sidebar collapse; inconsistent sidebar navigation across pages | **Phase 03** |
| **BUG-09** | **MEDIUM** | `Sandbox/js/framework/table-controller.js:115`, `toast-manager.js`, `validation/CHECKSUMS.sha256` (`59` diffs, `2` missing), `no_growth_check.py`, `sandbox_static_check.py`, `CHANGELOG_v2_1_2.md` | Missing `opts.container` defensive guard in `TableController`; stale checksums; blind validation scripts; changelog header drift | **Phase 03** |
| **BUG-10** | **BLOCKER** | `framework/js/tailix.js:851–914` | Early `return;` in `[data-tx-theme-toggle]`, `[data-tx-sidebar-toggle]`, `[data-tx-toast]`, `[data-tx-modal-target]`, `[data-tx-tab]` handlers bypasses `closeAllDropdowns()` | **Phase 04** |
| **BUG-11** | **BLOCKER** | `framework/js/tailix.js:290–303, 916–933` | Modal dialog lacks keyboard `Tab` / `Shift+Tab` focus trap | **Phase 04** |
| **BUG-12** | **HIGH** | `framework/js/tailix.js:127–160 vs 666–739` | `initDeclarativeTable` duplicates sort/filter (ignores numeric regex from `filterAndSortRows`), lacks pagination ellipsis for high page counts, and sets inline styles (`L698–699`) | **Phase 04** |
| **BUG-13** | **BLOCKER** | `framework/css/tokens.css:140–142, 252–343`; `framework/css/tailix.css:162, 230, 503, 509, 539, 813, 970` | Missing Light-mode overrides for `--focus-outline-color` / `--selection-*`; hardcoded `#FFFFFF` (`4×`) & dark backdrop `rgba(8,11,17,0.72)`; `backdrop-filter: blur(8px)`; `font-weight: var(--font-weight-bold)` (`600`); zero-radius toggle missing | **Phase 04** |
| **BUG-14** | **BLOCKER** | `framework/css/tailix.css:1296–1312` | Mobile viewport (`<= 768px`) renders `.tx-sidebar` expanded inline pushing page down instead of offcanvas drawer + backdrop | **Phase 05** |
| **BUG-15** | **BLOCKER** | `framework/` (`175` `.tx-*` vs `Sandbox` `431` `.vib-*`; `44` unused tokens in `tokens.css`) | Missing built-in SVG icon helper, Tooltip/Popover, Accordion, Spinner, Progress, Breadcrumb items, Code Tabs+Copy, Log severity pills, API method badges, Input prefix/password-eye, Radio cards, Chips, Slider | **Phase 05** |
| **BUG-16** | **BLOCKER** | Workspace root & `framework/` (`0` PWA files, `0` framework `package.json`, no `.vib-*` bridge) | Zero PWA support (`manifest.json`, `sw.js`); no `framework/package.json`/`LICENSE`/`VERSION`; no live `.php`/`.py` runnable examples; `Sandbox/` still relies on Tailwind CDN instead of consuming `framework/` | **Phase 06** |
| **BUG-17** | **BLOCKER** | Repo-wide (`tests/` absent; `CHECKSUMS.sha256` stale; `DESIGN_SYSTEM.md:35` stale) | Zero automated unit or Playwright browser regression tests; stale governance docs and checksums | **Phase 07** |

---

## 2. Strict Scope Lock Boundaries Per Phase

| Phase | Target Scope (ONLY Allowed Files) | Locked Out-of-Scope (DO NOT TOUCH in That Phase) |
|---|---|---|
| **Phase 01** | `Sandbox/pages/settings.html`, `Sandbox/pages/forms/settings-components.js`, `Sandbox/pages/forms/settings-page.js`, broken SVG `stroke-[var(--icon-stroke)]`, `width="28"` topbar icons, UTF-8 mojibake/BOM in Sandbox HTMLs | `framework/*`, `Sandbox/css/*`, `Sandbox/assets/css/*`, `design-tokens/*`, `validation/*`, `server.js`, `package.json` |
| **Phase 02** | `Sandbox/assets/css/foundation/*`, `Sandbox/assets/css/vibtools-theme.css`, `Sandbox/css/vibtools-sandbox.css`, `Sandbox/css/sandbox-only.css`, `Sandbox/js/tailwind-config.js`, `design-tokens/*`, `font-semibold` & bracket utility cleanup in Sandbox HTML/JS | `framework/*`, `Sandbox/pages/settings.html` logic, `validation/*`, `server.js` |
| **Phase 03** | `Sandbox/js/framework/shell-manager.js`, `Sandbox/js/framework/table-controller.js`, `Sandbox/js/components/toast-manager.js`, `Sandbox/js/sandbox-nav.js`, top-level & sub-fragment Sandbox HTML shell/nav unification, `validation/*`, `CHANGELOG_v2_1_2.md` header fix | `framework/*`, CSS foundation colors/typography/spacing in `Sandbox/assets/css/foundation/*` |
| **Phase 04** | `framework/css/tokens.css`, `framework/css/tailix.css`, `framework/css/tailix.min.css`, `framework/js/tailix.js`, `framework/js/tailix.min.js` (bugs + theme parity + zero-radius preset) | `Sandbox/*`, `design-tokens/*`, `server.js`, `framework/examples/*` |
| **Phase 05** | `framework/css/tailix.css`, `framework/css/tailix.min.css`, `framework/js/tailix.js`, `framework/js/tailix.min.js` (mobile drawer, built-in icons, missing compact UI components consuming unused tokens) | `Sandbox/*`, `design-tokens/*`, `validation/*`, `server.js` |
| **Phase 06** | `framework/package.json`, `framework/VERSION`, `framework/LICENSE`, `framework/css/vib-compat.css` (optional bridge), `framework/examples/*` (full static/PHP/Python + A-Z hub), PWA (`manifest.json`, `sw.js`) | Existing `framework/css/tokens.css` & `tailix.js` core API contracts (unless additive hooks needed), `server.js` routing behavior |
| **Phase 07** | `tests/*`, `validation/*` (fresh checksums & static checks covering `framework/`), `DESIGN_SYSTEM.md`, `docs/*`, `project/*`, `CHANGELOG_*` / `MANIFEST.md` sync | Any runtime feature refactors (fixes allowed only for test failures discovered) |
