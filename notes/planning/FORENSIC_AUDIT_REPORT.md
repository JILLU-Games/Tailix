# Source-Only Forensic Audit Report — Changelogs, Tokens, Tailwind, Sandbox & Standalone Framework

> **Audit Scope & Method**: 100% source-code-verified forensic inspection (`CHANGELOG_*.md`, `DESIGN_SYSTEM.md`, `validation/`, `design-tokens/`, `Sandbox/`, `framework/`). Zero assumptions, zero extrapolated claims, zero code modifications, and zero implementation plans. Every finding includes exact file path, line number, and verbatim code proof.

---

## 1. Executive Verdict Summary

| Domain | Status | Verified Verdict |
|---|---|---|
| **Changelogs (`CHANGELOG_*.md`)** | **DRIFT / FALSE COMPLETION CLAIMS** | 44 files exist; 8 files have filename-vs-H1 version mismatches; `CHANGELOG_v2_2_0.md` claims zero hex/pixel hardcodes & 100% completion, which source code disproves. |
| **Design Tokens & Tailwind Config** | **SPLIT / CONFLICTING** | Dual Tailwind configs (`Sandbox/js/tailwind-config.js` uses `--vib-*`, `design-tokens/vibtools.tailwind-cdn.config.js` uses `--bg-*`/`--component-*`); `_typography.css` (`Inter` first) conflicts with `framework/css/tokens.css` (`Segoe UI` first) and user spec (`--radius: 0rem` vs `3px–9999px`). |
| **Sandbox App (`Sandbox/`)** | **FRAGMENTED & CORRUPTED PAGE** | 26 pages use static HTML shell (`sandbox-nav.js`, no theme toggle, `<html class="dark">`), while 2 pages use dynamic `shell-manager.js` (`data-vib-shell`); **`Sandbox/pages/settings.html` is corrupted** with pasted tool header/footer text and empty `<main>`; Light mode fails on playground tokens. |
| **Validation Suite (`validation/`)** | **STALE & INCOMPLETE** | `CHECKSUMS.sha256` has **59 mismatches & 2 missing files** out of 264 entries; `no_growth_check.py` validates only JSON metadata, never actual CSS/HTML; `sandbox_static_check.py` skips 34 fragment HTMLs and all `framework/` files. |
| **Standalone Framework (`framework/`)** | **ALPHA / PRE-RELEASE (NOT PROD-READY)** | Core `.tx-*` CSS (33.8 KB bundled `tailix.min.css`) + zero-dep `Tailix` JS (24.8 KB `tailix.min.js`) and Dark/Light `[data-theme]` switcher exist and work at basic level, **but 8 concrete release blockers** (JS bugs, Light-mode parity leaks, mobile sidebar defect, zero icons, zero PWA assets, missing `.vib-*` compatibility & 20+ UI components) block production release. |

---

## 2. Changelogs Forensic Audit (`CHANGELOG_*.md`)

### 2.1 Version & Header Discrepancies (8 of 44 Files)
Total changelog files at workspace root: **44** (`CHANGELOG_v1_2.md` through `CHANGELOG_v2_2_0.md`). Eight files fail filename-vs-header version consistency:

| File | Filename Version | Actual Line 1 / Header in Source |
|---|---|---|
| `CHANGELOG_v1_2.md` | `v1.2` | `# Changelog v1.2` (filename uses `v1_2`, text uses `v1.2`) |
| `CHANGELOG_v1_3.md` | `v1.3` | `# Changelog v1.3 — Sandbox Static HTML Visual Validation App` |
| `CHANGELOG_v1_3_9.md` | `v1.3.9` | Line 1 blank; Line 2: `# Changelog v1.3.9 — Global Docs/Form Design Repair` |
| `CHANGELOG_v1_4_9.md` | `v1.4.9` | `# CHANGELOG v1.5.0 — Server Health & Metrics Monitoring Page` |
| `CHANGELOG_v1_8_2.md` | `v1.8.2` | `# Changelog — v1.9.0 Soft Typography Weight & Contrast Calibration` |
| `CHANGELOG_v2_1_1.md` | `v2.1.1` | `# CHANGELOG v2.2.0 — Single Token Foundation Verification Fix` |
| `CHANGELOG_v2_1_2.md` | `v2.1.2` | `# CHANGELOG v2.2.0 — Single Token Foundation Audit Freeze` |
| `CHANGELOG_v2_1_2_DOCS_FULL_SYNC.md` | `v2.1.2` | `# Changelog — v2.2.0 Official Freeze Documents Full Rewrite Sync` |

**Verbatim Proof — `CHANGELOG_v2_1_2.md:1–5`**:
```markdown
# CHANGELOG v2.2.0 — Single Token Foundation Audit Freeze

Baseline: `VibTools_WEB_UI_v2.1.1.zip`  
Scope: Verification/fix only for the Single Token Foundation Engine. No page layout, route, module count, component workflow, backend/API behavior, sidebar width, topbar height or playground behavior was redesigned.
```

### 2.2 Changelog Claims Directly Contradicted by Source Code
**Claim 1 — `CHANGELOG_v2_2_0.md:19, 62` ("Zero Hardcodes & 100% Complete")**:
```markdown
19: - Verified that ZERO rogue hex codes or hardcoded pixel dimensions persist inside the inline HTML structures.
62: - **Completion Milestone:** The **v2.2.0 Engine Migration & SaaS Feature Rollout** is officially **100% COMPLETE**. Zero un-tokenized hardcodes, zero duplicate variable declarations, and all foundation modules version-aligned.
```
- **Source Reality**:
  - **12 Sandbox HTML files** (`about.html`, `contact.html`, `dashboard-shell.html`, `docs-layout.html`, `home.html`, `login.html`, `profile.html`, `projects.html`, `register.html`, `settings.html`, `typography-colors.html`, `upload.html`) still contain hardcoded `width="28" height="28"` in topbar brand logo markup (e.g., `Sandbox/pages/settings.html:28–29`: `<img src="../assets/brand/placeholder-vibtools-icon.svg" width="28" height="28" alt="">`).
  - `Sandbox/css/vibtools-sandbox.css` contains **270 hex matches**, **118 `rgba()` matches**, **121 `border-radius` declarations**, and **46 bold font-weight rules (`600/700/800`)**, including **75 hex values from line 330 onward** outside the `:root` block.

**Claim 2 — `CHANGELOG_v2_2_0.md:35–41` ("Settings & API Keys Management Built")**:
- **Source Reality**: `Sandbox/pages/settings.html` is physically corrupted (`L1–2` tool output header, `L92` `<main class="vib-main"></main>` empty), and `Sandbox/pages/forms/settings-components.js` defines 6 empty `html: ""` modules (`settings-header`, `settings-plan`, `settings-sidebar`, `settings-general`, `settings-appearance`, `settings-integrations`).

**Claim 3 — `CHANGELOG_v2_2_0.md:97` ("Framework Architecture Phase is 100% COMPLETE")**:
- **Source Reality**: Only **2 of 28** main HTML pages (`Sandbox/pages/_template.html`, `Sandbox/pages/plugins.html`) load `shell-manager.js` and `event-bus.js`. The other **26 pages** (`Sandbox/index.html`, `users.html`, `billing.html`, `settings.html`, `404.html`, `500.html`, etc.) run on legacy static HTML + `sandbox-nav.js`.

---

## 3. Design Tokens & Tailwind CSS Deep Forensic Scan

### 3.1 Token Flow Chain in `Sandbox/` (Actual Cascade Order)
Every top-level Sandbox HTML page loads styles/configs in this order (example: `Sandbox/pages/404.html:8–12`):
```html
  <script src="../js/tailwind-config.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="../assets/css/vibtools-theme.css">
  <link rel="stylesheet" href="../css/vibtools-sandbox.css">
  <link rel="stylesheet" href="../css/sandbox-only.css">
```
Actual CSS token resolution order at runtime:
1. `Sandbox/assets/css/vibtools-theme.css:3–10` imports 8 foundation modules:
   `_colors.css` → `_typography.css` → `_spacing.css` → `_radius.css` → `_shadows.css` → `_icons.css` → `_breakpoints.css` → `_motion.css`.
2. `Sandbox/assets/css/vibtools-theme.css:12–157 & 215–230` defines `:root` `--vib-*` aliases mapping to `--bg-*`, `--text-*`, `--border-*`, etc.
3. `Sandbox/css/vibtools-sandbox.css:1` re-imports `../assets/css/vibtools-theme.css`, then **`L2–329` overwrites `:root` and `html[data-theme="light"]` with raw hardcoded hex values**, and **`L2654–2864` overwrites `:root` a THIRD time** back to `var(--...)` aliases!
4. `Sandbox/css/sandbox-only.css` overrides sidebar collapse and validation error styles.
5. **External CDN Dependency**: `https://cdn.tailwindcss.com` is hardcoded in all 28 top-level `Sandbox` HTML pages (`tw=True` on 28/28), making the Sandbox unusable offline without network access.

### 3.2 Conflicting Tailwind Configs (`Sandbox/` vs `design-tokens/`)
Two mutually incompatible Tailwind CDN configs exist:
- `Sandbox/js/tailwind-config.js:8–14` maps utilities to `--vib-*` variables (`background: 'var(--vib-background)'`, `primary: 'var(--vib-primary)'`).
- `design-tokens/vibtools.tailwind-cdn.config.js:8–14` maps utilities directly to foundation variables (`background: 'var(--bg-app)'`, `primary: 'var(--component-button-primary-bg)'`) and still stamps header version `v2.1.2`.
- Meanwhile `design-tokens/vibtools.compact.tokens.css:1` also carries an outdated `v2.1.2 official freeze baseline` header.

### 3.3 Font Stack, Radius, Shadow & Weight Conflicts
1. **Font Stack Mismatch Across Codebases vs Mandate**:
   - `Sandbox/assets/css/foundation/_typography.css:3`:
     ```css
     --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
     ```
   - `Sandbox/js/tailwind-config.js:32`:
     ```js
     sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
     ```
   - `framework/css/tokens.css:145`:
     ```css
     --font-sans: "Segoe UI", "Segoe UI Web", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
     ```
   - `Sandbox` enforces `Inter` first; `framework/` enforces `Segoe UI` first (matching the Segoe UI stack rule).

2. **Border Radius Policy Mismatch**:
   - `Sandbox/assets/css/foundation/_radius.css:3–8` defines `--radius-xs: 3px; --radius-sm: 6px; --radius-md: 8px; --radius-lg: 12px; --radius-pill: 9999px;`.
   - `framework/css/tokens.css:189–193` defines identical rounded values (`3px`, `6px`, `8px`, `12px`, `9999px`), and `framework/css/tailix.css` applies `border-radius` in **36 places** (plus `121` places in `vibtools-sandbox.css`). Neither supports a zero-radius (`--radius: 0rem`) compact override.

3. **Forbidden Box-Shadow Violation in `Sandbox/css/sandbox-only.css:32–34`**:
   ```css
   .vib-field-error:focus {
     box-shadow: 0 0 0 2px var(--state-danger-border);
   }
   ```

4. **Heavy / Bold Font Weight Violations**:
   - `Sandbox/css/vibtools-sandbox.css` contains **46 bold declarations** (`600` / `650` / `700` / `800`), e.g.:
     ```css
     /* Sandbox/css/vibtools-sandbox.css:337-342 & 355 */
     .vib-kicker { color: var(--vib-secondary); font-size: 11px; font-weight: 700; letter-spacing: .075em; text-transform: uppercase; }
     .vib-h1 { font-size: clamp(22px, 2.4vw, 24px); line-height: 1.18; letter-spacing: -.025em; font-weight: 700; color: var(--vib-text); }
     .vib-hero-title { font-size: clamp(24px, 2.6vw, 26px); line-height: 1.18; letter-spacing: -.026em; font-weight: 700; color: var(--vib-text); }
     .vib-h2 { font-size: 16px; line-height: 1.28; letter-spacing: -.02em; font-weight: 650; color: var(--vib-text); }
     .vib-brand span { font-size: 12.5px; font-weight: 700; letter-spacing: -.01em; }
     ```
   - `Sandbox/js/framework/table-controller.js:256, 273` and 4 HTML pages (`billing.html`, `plugins.html`, `tables.html`, `users.html`) apply `font-semibold` (19 HTML hits + 2 JS hits).
   - `framework/css/tailix.css:230` uses `font-weight: var(--font-weight-bold);` (`600`) on `.tx-sidebar-group-title`.

### 3.4 Broken Tailwind `stroke-[var(--icon-stroke)]` SVG Class Bug
Tailwind CDN interprets `stroke-[...]` as SVG `stroke` **color**, NOT `stroke-width` (because `--icon-stroke` is `1.5px` in `Sandbox/assets/css/foundation/_icons.css`), overriding `stroke="currentColor"` with an invalid color value. Still present in **26 places**:
- `Sandbox/index.html` (8×): lines `19, 37, 49, 83, 117, 136, 155, 176`
- `Sandbox/pages/404.html` (3×): lines `23, 67, 74`
- `Sandbox/pages/500.html` (4×): lines `23, 67, 74, 78`
- `Sandbox/js/components/toast-manager.js` (5×): e.g., lines `55, 61, 68, 84`
- `Sandbox/js/components/modal-manager.js:64` (1×)
- `Sandbox/pages/forms/settings-components.js` (5×): lines `143, 162, 175, 194, 249`

**Verbatim Proof — `Sandbox/pages/404.html:67`**:
```html
<svg class="w-[var(--icon-xl)] h-[var(--icon-xl)] stroke-[var(--icon-stroke)] text-vib-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
```

### 3.5 Arbitrary Tailwind Class Sprawl (`[...]` Brackets)
`DESIGN_SYSTEM.md` prohibits arbitrary Tailwind overrides, yet **16 of 28** top-level Sandbox HTML pages contain **370 arbitrary bracket utilities** (e.g., `Sandbox/index.html` has **140**, `billing.html` has **56**, `users.html` has **55**, `plugins.html` has **45**, `404.html` has **26**, `500.html` has **22**).

---

## 4. Sandbox App Architecture & UI Forensic Audit (`Sandbox/`)

### 4.1 Split Dual-Shell Architecture & Theme Switcher Isolation
- **26 of 28 top-level HTML pages** hardcode a static `<header class="vib-topbar">` + `<aside class="vib-sidebar">` + `sandbox-nav.js`. They contain **0 theme toggle buttons** and **0 sidebar collapse toggles**, and hardcode `<html lang="en" class="dark">` without `data-theme`.
- **Only 2 of 28 pages** (`Sandbox/pages/_template.html`, `Sandbox/pages/plugins.html`) use `<body data-vib-shell>` + `Sandbox/js/framework/shell-manager.js`, which injects `#vib-theme-toggle` and `#vib-sidebar-toggle` (`shell-manager.js:169–178`) and calls `applyTheme(getSavedTheme())` (`L413`).
- Because the 26 static pages do not load `shell-manager.js`, switching to Light theme in `plugins.html` does **not** carry over when navigating to `users.html`, `billing.html`, `cards.html`, or `index.html`.

### 4.2 Corrupted `Sandbox/pages/settings.html` & Dead `settings-components.js`
**Verbatim Proof — `Sandbox/pages/settings.html:1–10 & 90–105`**:
```html
1: format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the 
2: line number, colon, and leading space.
3: <!doctype html>
4: <html lang="en" class="dark">
...
91: </aside>
92:       <main class="vib-main"></main>
93:     </div>
...
96:   <script src="../js/sandbox-nav.js"></script>
97: <script src="forms/settings-components.js"></script><script src="forms/settings-page.js"></script></body>
98: </html>
99: 
100: The above content 
101: shows the entire, complete file contents of the requested file.
```
Compounding bugs in `Sandbox/pages/forms/settings-components.js`:
1. **6 Core Modules Are Empty Strings (`L3–41, 100–106`)**: `settings-header`, `settings-plan`, `settings-sidebar`, `settings-general`, `settings-appearance`, `settings-integrations` all declare `"html": `` `, leaving those Settings sections completely missing.
2. **Undefined `showToast()` Call (`L159, 191`)**: `onclick="showToast('Key copied to clipboard')"` throws `ReferenceError: showToast is not defined` because `toast-manager.js` is not loaded in `settings.html` and exposes `window.VibToast`, not `showToast`.
3. **Hardcoded Colors & Mojibake (`L64, 141, 151, 161, 173, 193, 242`)**: Contains `vib_sk_test_â€¢â€¢...`, `hover:text-red-400`, `rgb(16,185,129)`, and `rgb(239,68,68)`.

### 4.3 Sidebar Link Drift Across Static Pages
`shell-manager.js:30–83` defines **27 navigation items** across 5 groups (`MAIN`, `SAAS`, `PAGES & AUTH`, `COMPONENTS`, `SYSTEM`). Static pages have drifted out of sync:
- `404.html` and `500.html` contain **24 links** (missing `Users`, `Billing`, `Plugins`).
- `billing.html` and `users.html` missing `Plugins`.
- **20 older static pages** (`cards.html`, `forms.html`, `home.html`, `settings.html`, etc.) contain only **22 links** (missing `Users`, `Billing`, `Plugins`, `404 Error`, `500 Error`).

### 4.4 Light-Mode Breakage in `Sandbox/css/vibtools-sandbox.css`
After line 330, `vibtools-sandbox.css` declares **75 hardcoded hex values** with **no `html[data-theme="light"]` overrides**, locking playground sections into dark surfaces and light text regardless of active theme:
- `L1291–1306`: `--vib-compact-heading-color: #F0F6FC`, `--vib-compact-section-color: #E6EDF3`, `--vib-file-badge-bg-restrained: #161B22`
- `L1428–1442`: `--vib-precision-heading: #F0F6FC`, `--vib-precision-section: #C9D1D9`
- `L1994–1999`: `--vib-soft-primary-text: #E6EDF3`, `--vib-soft-field-bg: #0D1117`
- `L2107–2113, 2243–2248`: `--vib-card-playground-title: #E6EDF3`, `--vib-card-playground-surface: #0D1117`
- `L2330–2338, 2523–2530`: `--vib-nav-playground-title: #E6EDF3`, `--vib-nav-playground-surface: #0D1117`, `--vib-nav-playground-soft: #161B22`
- `L1187`: `background: var(--vib-settings-active-bg, #1f242c);`
- `L1262`: `background-color: #ffffff;` (switch thumb)
- `L1944, 2181, 2196, 2197, 2230, 2231, 2510`: `#3FB950 !important`, `#388BFD !important`, `#F85149 !important`

### 4.5 UTF-8 Encoding Corruption (Mojibake) & Unstyled Sub-Fragments
- **8 top-level HTML files** contain UTF-8 mojibake (`â€”`): `cards.html:6` (`<title>Cards â€” VibTools Sandbox</title>`), `dashboard-shell.html`, `forms.html`, `login.html`, `navigation.html`, `profile.html`, `register.html`, `upload.html`.
- **3 HTML files** start with a UTF-8 BOM (`\ufeff<!doctype html>`): `404.html`, `500.html`, `_template.html`.
- **34 of 34 partial HTML files** under `Sandbox/pages/{cards,forms,Navigation,upload}/` lack `<head>` / `vibtools-theme.css` links and render unstyled if opened directly.

### 4.6 Validation Suite Decay (`validation/`)
- `validation/CHECKSUMS.sha256` (`264` entries): **`203` OK, `59` MISMATCH, `2` MISSING** (`Sandbox/assets/css/foundation/_surfaces.css`, `Sandbox/assets/css/foundation/_tokens.css`).
- `validation/no_growth_check.py:1–37`: Parses only `design-tokens/vibtools.compact.tokens.json`; it never inspects CSS/HTML DOM rules.
- `validation/sandbox_static_check.py:41–120`: Checks only `Sandbox/index.html` + `Sandbox/pages/*.html`; skips `Sandbox/pages/*/*.html`, `framework/`, `settings-components.js`, hardcoded hex/pixel CSS rules, and mojibake.

---

## 5. Standalone Framework Forensic Audit (`framework/`)

### 5.1 Directory Structure & Packaging Audit
Current contents of `framework/`:
```
framework/
├── README.md                  (20 lines)
├── MANIFEST.md                (15 lines)
├── css/
│   ├── README.md
│   ├── MANIFEST.md
│   ├── tokens.css             (344 lines / 11,395 bytes)
│   ├── tailix.css             (1,325 lines / 30,903 bytes)
│   └── tailix.min.css         (33,756 bytes — bundles tokens + tailix)
├── js/
│   ├── README.md
│   ├── MANIFEST.md
│   ├── tailix.js              (963 lines / 34,228 bytes)
│   └── tailix.min.js          (24,781 bytes)
└── examples/
    ├── README.md
    ├── MANIFEST.md
    ├── static.html            (299 lines / 16,026 bytes)
    ├── php-snippet.md         (156 lines / 5,322 bytes)
    └── python-snippet.md      (127 lines / 4,347 bytes)
```
**Structural & Distribution Gaps**:
- Root `package.json` (`"name": "vibtools-ui-sandbox"`, `"dependencies": {"express": "^4.21.2"}`) is the Sandbox Node preview server; `framework/` has **no `package.json`**, **no `VERSION` / `LICENSE`**, and **no `tests/` directory** anywhere in the repo (`TESTS_FILES: none`).
- `framework/examples/` has snippets for PHP/Python inside markdown, **not runnable `.php` / `.py` demo scripts**, and no CDN/SRI integrity metadata or `dist/` vs `src/` split.
- **Zero PWA assets anywhere in workspace**: Only root `package.json` matched PWA/package scan — there is **no `manifest.json`**, **no service worker (`sw.js`)**, and **no installable PWA icons/meta**.

### 5.2 Theme Engine Forensic Verdict
**Does a Theme Engine Exist and Work?** **YES — partially.**
- `framework/css/tokens.css:6–343` defines Dark theme on `:root, html[data-theme="dark"]` (`color-scheme: dark`, 210 custom properties including `--tx-*` semantic aliases) and Light theme on `html[data-theme="light"]` (`color-scheme: light`, 80 variable overrides).
- `framework/js/tailix.js:381–409` implements `Tailix.theme` (`get`, `set`, `toggle`, `init`) reading/writing `localStorage['tailix-theme']`, updating `data-theme` on `<html>`, toggling `aria-pressed` on `[data-tx-theme-toggle]`, and emitting `theme:change` on `Tailix.bus`.

**Verified Theme Bugs & Parity Gaps in `framework/`**:
1. **Focus Outline Color Never Updates in Light Mode (`framework/css/tokens.css:140–142, 252–343`)**:
   ```css
   /* tokens.css:140-142 (inside :root, html[data-theme="dark"] ONLY) */
   --selection-bg: var(--component-button-primary-bg);
   --selection-text: #FFFFFF;
   --focus-outline-color: var(--border-focus);
   ```
   `--focus-outline-color`, `--selection-bg`, and `--selection-text` are **absent** from `html[data-theme="light"]` (`L252–343`). Worse, because `--tx-focus-color: var(--focus-outline-color)` is also declared on `:root`, if any rule references `--focus-outline-color` or dark-resolved tokens, Light theme misses explicit high-contrast selection/focus tuning.
2. **Dark Modal Backdrop Hardcoded in Light Mode (`framework/css/tailix.css:966–975`)**:
   ```css
   .tx-modal-backdrop {
     position: fixed;
     inset: 0;
     z-index: 60;
     background: rgba(8, 11, 17, 0.72);
   ```
   Not tokenized — Light theme uses the exact same near-black `rgba(8, 11, 17, 0.72)` overlay.
3. **Hardcoded `#FFFFFF` Hexes in `framework/css/tailix.css` (`L503, 509, 539, 813`)**:
   - `.tx-btn-primary` (`L503`), `.tx-btn-primary:hover` (`L509`), `.tx-btn-danger:hover` (`L539`): `color: #FFFFFF;`
   - `.tx-switch input:checked + .tx-switch-track::after` (`L813`): `background: #FFFFFF;`
4. **Blur Filter & Bold Weight Mismatch (`framework/css/tailix.css:162, 230`)**:
   - `L162`: `backdrop-filter: blur(8px);` on `.tx-topbar` (anti-flat glass effect).
   - `L230`: `.tx-sidebar-group-title { font-weight: var(--font-weight-bold); }` (`600` weight).
5. **44 Defined Tokens Never Used in `framework/`**:
   `--bg-footer`, `--bg-surface-active`, `--bg-surface-muted`, `--bg-surface-primary`, `--border-width-default`, `--height-input-lg`, `--icon-xs` / `md` / `lg` / `xl` / `2xl` / `--icon-stroke`, `--leading-relaxed`, `--log-info-*` / `--log-warning-*` / `--log-success-*` / `--log-modal-surface`, `--shadow-*`, `--text-soft`, `--text-subtle`, `--text-xl`, `--transition-fast`, `--ease-standard`, etc. are declared in `tokens.css` (`L1–212`) with **zero CSS rules consuming them** in `tailix.css`. (For example, `.tx-log-badge-*` or `.tx-input-lg` styles do not exist even though their tokens do!)

### 5.3 Concrete JavaScript & Responsive Layout Bugs (`framework/js/tailix.js` & `tailix.css`)
1. **BUG-JS-01 — Open Dropdown Fails to Close When Clicking Other `[data-tx-*]` Controls (`framework/js/tailix.js:851–914`)**:
   ```js
   document.addEventListener('click', function (e) {
     var themeBtn = e.target.closest('[data-tx-theme-toggle]');
     if (themeBtn) { theme.toggle(); return; }       // L852-856: EARLY RETURN!
     var sideBtn = e.target.closest('[data-tx-sidebar-toggle]');
     if (sideBtn) { sidebar.toggle(...); return; }   // L858-862: EARLY RETURN!
     var toastBtn = e.target.closest('[data-tx-toast]');
     if (toastBtn) { toast(...); return; }           // L864-872: EARLY RETURN!
     var modalTrigger = e.target.closest('[data-tx-modal-target]');
     if (modalTrigger) { openModalElement(...); return; } // L874-880: EARLY RETURN!
     ...
     if (!e.target.closest('[data-tx-dropdown]')) {
       closeAllDropdowns();                          // L911-913: UNREACHABLE for buttons above!
     }
   });
   ```
   Clicking Theme, Sidebar, Toast, Modal, or Tab triggers returns **before** line 911, leaving open dropdown menus stuck open on screen (and even clicking a `[data-tx-toast]` item *inside* a dropdown leaves the dropdown open unless closed).
2. **BUG-JS-02 — Modal Lacks Keyboard `Tab` / `Shift+Tab` Focus Trap (`framework/js/tailix.js:262–303 & 916–933`)**:
   `openModalElement` focuses the first element inside `.tx-modal`, and `Escape` closes it (`L918`), but there is **no `Tab` keydown handler** — pressing `Tab` escapes focus onto background page links behind `.tx-modal-backdrop`.
3. **BUG-JS-03 — Duplicate & Divergent Table Sort Logic + Unbounded Pagination (`framework/js/tailix.js:127–160 vs 666–739`)**:
   - `_internals.filterAndSortRows` (`L151–156`) parses numeric prefixes (`%`, `$`, `ms`, decimals), whereas `initDeclarativeTable` (`L676–683`) re-implements sorting from scratch using only `va.localeCompare(vb, ...)` (ignoring pure numeric normalization and duplicating filter code).
   - Pagination (`L721–730`) loops `for (var p = 1; p <= totalPages; p++)` with **zero windowing/ellipsis** — 100 pages renders 100 buttons in the footer.
4. **BUG-JS-04 — Inline Style Injection in `initDeclarativeTable` (`framework/js/tailix.js:698–699`)**:
   ```js
   emptyTd.style.textAlign = 'center';
   emptyTd.style.padding = '20px';
   ```
   Bypasses CSS utility classes with hardcoded inline styles (`20px`).
5. **BUG-CSS-01 — Mobile Sidebar Renders Expanded Inline by Default & Has No Drawer/Backdrop (`framework/css/tailix.css:1296–1312`)**:
   ```css
   @media (max-width: 768px) {
     ...
     .tx-sidebar { width: 100%; border-right: 0; border-bottom: 1px solid var(--tx-border-subtle); }
     .tx-sidebar[data-collapsed="true"] { width: 100%; display: none; }
   ```
   On mobile viewports (`<= 768px`), `.tx-sidebar` pushes the entire `<main>` content below the navigation list unless the user has `"tailix-sidebar-collapsed": "true"` saved in `localStorage`. There is no offcanvas drawer or mobile backdrop.
6. **BUG-A11Y-01 — Unstyled `:focus-visible` vs `.tx-input:focus` & Button Hover on Touch**:
   `.tx-input:focus` (`L726`) sets `outline: none;` relying solely on `border-color`, while `:focus-visible` (`L54`) uses `var(--tx-focus-color)`.

### 5.4 Component Coverage Matrix (`Sandbox` 431 `.vib-*` classes vs `framework/` 175 `.tx-*` classes)

#### Implemented in `framework/` (`175` `.tx-*` classes)
- **Layout & Shell**: `.tx-shell`, `.tx-topbar`, `.tx-topbar-inner`, `.tx-brand`, `.tx-layout`, `.tx-sidebar` (+ groups/links/footer/collapsed), `.tx-main`, `.tx-container`, `.tx-page-header`, `.tx-auth-shell`, `.tx-auth-card`
- **Grid & Utilities**: `.tx-grid-2/3/4`, `.tx-split-40-60`, `.tx-row`, `.tx-stack`, `.tx-stack-sm`, spacing/flex/text/color/radius utility subset (`L1214–1273`)
- **Typography**: `.tx-h1`, `.tx-h2`, `.tx-h3`, `.tx-kicker`, `.tx-body`, `.tx-meta`, `.tx-muted`, `.tx-subtle`, `.tx-code`, `.tx-kbd`, `.tx-mono`, `.tx-divider`
- **Data Display**: `.tx-card` (+ interactive/subtle/header/title/body/footer), `.tx-stat-card` (+ label/value/trend), `.tx-meter` (+ `.is-success/warning/danger`), `.tx-badge` (+ 5 variants), `.tx-status-dot`, `.tx-avatar`, `.tx-logs-viewport`, `.tx-log-row`, `.tx-skeleton`, `.tx-empty`
- **Actions & Forms**: `.tx-btn` (+ sm/primary/secondary/ghost/danger/`[aria-busy="true"]`), `.tx-icon-btn`, `.tx-pill`, `.tx-field`, `.tx-label`, `.tx-label-required`, `.tx-input`, `.tx-input-md`, `.tx-select`, `.tx-select-md`, `.tx-textarea`, `.tx-checkbox`, `.tx-radio`, `.tx-switch`, `.tx-field-error`, `.tx-field-error-msg`, `.tx-helper`, `.tx-dropzone`
- **Tables & Overlays**: `.tx-table-panel`, `.tx-table-toolbar`, `.tx-table`, `.tx-th-sort`, `.tx-td-mono/numeric/action`, `.tx-table-footer`, `.tx-pagination`, `.tx-page-btn`, `.tx-modal-backdrop`, `.tx-modal`, `.tx-toast-container`, `.tx-toast` (+ 4 variants), `.tx-alert` (+ 4 variants), `.tx-tabs`, `.tx-tab`, `.tx-dropdown`, `.tx-dropdown-menu`, `.tx-dropdown-item`, `.tx-breadcrumb` (flex row only)

#### Missing or Incomplete in `framework/` (Release Blockers for Compact "Bootstrap-like" Framework)
| Category | Missing Component / Feature | Present in `Sandbox/`? | Present in `framework/`? |
|---|---|---|---|
| **SVG Icon Library / Sprite** | Built-in compact UI icon set / helper (`svg(name)`) | Yes (`sandbox-nav.js:18–51`, `shell-manager.js:87–113`) | **Missing** (examples inline raw `<svg>` or Unicode `☰`) |
| **Breadcrumb Items & Separators** | `.tx-breadcrumb-item`, `.tx-breadcrumb-sep` | Yes (`vib-breadcrumb-*`, 3 classes) | **Incomplete** (only `.tx-breadcrumb` wrapper at `L1132`) |
| **Accordion / Collapse** | Expandable disclosure panels | Yes (UI pattern) | **Missing** |
| **Tooltip & Popover** | Lightweight hover/focus hints | No | **Missing** |
| **Mobile Offcanvas / Drawer** | Slide-out mobile sidebar + backdrop | Partial | **Missing** |
| **Standalone Spinner / Progress** | `.tx-spinner` & `.tx-progress` + `.tx-progress-fill` | Yes (`vib-progress-track/fill`, `vib-btn-loading`) | **Partial** (`tx-spin` keyframe only on `button[aria-busy]`) |
| **Code Block + Tabs + Copy JS** | `.tx-code-block`, `.tx-code-tabs`, Copy-to-clipboard behavior | Yes (6 `.vib-code-*` classes) | **Missing** |
| **Docs & API Reference Kit** | `.tx-method-get/post/put/delete`, `.tx-doc-*`, TOC | Yes (20 `.vib-doc-*`, 5 `.vib-method-*`) | **Missing** (even though `--log-*` tokens exist in `tokens.css`) |
| **File Upload Queue & Type Badges** | Upload progress list, file extension badges (`.pdf`, `.png`) | Yes (21 `.vib-upload-*`, `.vib-file-badge`) | **Partial** (only `.tx-dropzone` container; no JS queue/badge) |
| **Input Group / Prefix / Search / Password Eye** | Input with left icon, inline action, password reveal toggle | Yes (9 `.vib-input-*`, `.vib-password-eye`) | **Missing** |
| **Radio Cards / Chips / Range Slider** | Card-style selectable options, removable chips, `.tx-slider` | Yes (`vib-radio-card*`, `vib-chip*`, `vib-slider`) | **Missing** |
| **Log Severity Badges & Filter Row** | Styled `INFO`/`WARN`/`SUCCESS` log pills using `tokens.css:129–134` | Yes (24 `.vib-log-*` classes) | **Missing** (`--log-info-*` tokens are unused!) |
| **Monitoring Charts / Sparklines / Donut** | Pure CSS/SVG micro-charts & legends | Yes (9 `.vib-chart-*`, 6 `.vib-donut-*`) | **Missing** |
| **Compact / Zero-Radius Theme Preset** | `--radius: 0rem` (`--tx-radius-scale: 0`) global mode | No | **Missing** (hardcoded `3px–12px` in `tokens.css:189–193`) |
| **PWA Support** | `manifest.json`, Service Worker, mobile app meta | No | **Missing** |
| **`.vib-*` Migration Bridge & Sandbox Migration** | Compatibility alias layer or Sandbox running on `framework/` | Sandbox still runs Tailwind CDN | **Disconnected** (`Sandbox/` does not consume `framework/`) |

---

## 6. Consolidated Release Blockers List (`framework/` Production Gate)

There are **8 blocking defects/gaps** preventing `framework/` from shipping as a production-ready compact Bootstrap-style UI framework:

1. **Blocker 1 — Dropdown Event-Delegation Bug (`tailix.js:851–914`)**: Early `return` in theme/sidebar/toast/modal/tab handlers skips `closeAllDropdowns()`, leaving menus stuck open.
2. **Blocker 2 — Mobile Navigation Defect (`tailix.css:1304–1312`)**: Sidebar defaults to 100% height-pushing stacked block on `<= 768px` instead of a collapsible mobile drawer with backdrop.
3. **Blocker 3 — Modal Accessibility Gap (`tailix.js:290–303, 916–933`)**: No `Tab` / `Shift+Tab` focus trap inside `.tx-modal`.
4. **Blocker 4 — Light Theme Parity Leaks (`tokens.css:140–142`, `tailix.css:503, 509, 539, 813, 970`)**: Missing `--focus-outline-color` / `--selection-*` overrides in `html[data-theme="light"]`, hardcoded `#FFFFFF` in CSS rules, and dark hardcoded backdrop `rgba(8, 11, 17, 0.72)`.
5. **Blocker 5 — Missing Core Framework Primitives & Built-In Icons**: Zero SVG icon library/helper, zero tooltip/accordion/drawer/spinner/copy-code/input-addon/log-badge components (leaving 44 defined tokens unused).
6. **Blocker 6 — Design Spec & Policy Mismatches**:
   - Font stack conflict (`_typography.css:3` `Inter` vs `tokens.css:145` `Segoe UI`).
   - Border-radius conflict (`tokens.css:189–193` `3px–9999px` vs zero-radius `--radius: 0rem` compact option) + `backdrop-filter: blur(8px)` at `tailix.css:162` + `font-weight: var(--font-weight-bold)` (`600`) at `L230`.
7. **Blocker 7 — Zero Automated Tests & Packaging**: `framework/` lacks `package.json`, `LICENSE`, `VERSION`, unit/browser test suite, and live runnable `.php` / `.py` verification harnesses (`tests/` does not exist).
8. **Blocker 8 — PWA & Validation Desync**: Zero PWA support (`manifest.json`, `sw.js`), plus `validation/CHECKSUMS.sha256` (59 mismatches, 2 missing), corrupted `Sandbox/pages/settings.html`, and `Sandbox/` still coupled to `https://cdn.tailwindcss.com` instead of validating `framework/`.
