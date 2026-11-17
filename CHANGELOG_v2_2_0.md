# Changelog - v2.2.0

## [2.2.0] - 2026-09-09

### Architectural Updates
- Migrated to an 8-Module Token Architecture for CSS foundation.
- Established strict module separation: `_colors.css`, `_typography.css`, `_spacing.css`, `_radius.css`, `_shadows.css`, `_icons.css`, `_breakpoints.css`, `_motion.css`.
- Fully synchronized `tailwind-config.js` to reference `var(--vib-*)` CSS Custom Properties directly.
- Scrapped all hardcoded hex values and pixel bounds inside `tailwind-config.js`.

### Component Polish & Engine Verification
- **Dropdowns & Navigation:** Audited positioning, z-index, typography, and hover states. Scrubbed hardcoded SVG attributes (replaced with `w-[var(--icon-*)] h-[var(--icon-*)]`).
- **Forms & Cards:** Standardized input focus rings (`var(--vib-focus)`), mapped validation badges to `--status-*` tokens, and verified zero-shadow flat borders on cards.
- **Tables & Data Grids:** Ensured uppercase 11px/12px font scale with `--vib-muted` for headers, added explicit Tailwind classes for alternating row striping, and converted status badges to use semantic Tailwind token classes.
- **Logs, Monitoring & System States:** Reassigned log viewport backgrounds, converted static badges to explicit utility groups, applied `transition-all` to monitoring meters, and configured state icons and skeletons with semantic tokens (e.g., `text-vib-muted`, `bg-vib-borderSubtle`).

### Global Baseline Scrub
- Replaced all legacy icon dimensions with semantic Tailwind aliases across all files.
- Verified that ZERO rogue hex codes or hardcoded pixel dimensions persist inside the inline HTML structures.

### Documentation & Rules
- Created `AGENTS.md` to enforce strict real-time memory and docs sync workflows for AI agents.
- Created `DESIGN_SYSTEM_GUIDE.md` as the central, enterprise-grade quick-reference sheet for the 8-Module Token Architecture.

### Phase 1 Execution
- **System Error Pages:** Created `404.html` and `500.html` aligned with the standard app shell baseline and utilizing token-mapped styles.
- **Global Notification System:** Created `toast-manager.js` for dynamic success/error/warning/info toast notifications tied to v2.2.0 state tokens.
- **Global Modal System:** Created `modal-manager.js` for dynamic confirm/cancel dialogs styled via foundation tokens (`--shadow-overlay`, `--vib-radius-lg`).

### Phase 2 Execution
- **User & Team Management:** Built `users.html` as a core SaaS module inheriting from the v2.2.0 foundation engine.
  - Implemented Table layout and Header using strict token mappings.
  - Integrated `modal-manager.js` to trigger a dynamic "Invite Team Member" form.
  - Included interactive row-level Action menus for managing roles and access.
- **Settings & API Keys Management:** Built `settings.html` as a core SaaS security and application settings portal.
  - Rolled back a destructive UI overwrite, preserving pre-existing sections (General Configuration, Appearance, Danger Zone, etc.).
  - Successfully merged new feature sections into the existing tabbed layout WITHOUT altering original code structure (Strict Non-Destructive Update Rule enforced).
  - Added API Keys Management Section with mask toggling and standard table layout.
  - Added Developer Webhooks Section.
  - Created "Generate New API Key" modal interface using `modal-manager.js`.
  - Polished Sandbox Mode toggle using native `.vib-switch` foundation classes.
- **Analytics & Usage Billing Module:** Built `billing.html` as a core SaaS billing and analytics dashboard.
  - Implemented Current Subscription Plan card with monthly/annual toggles.
  - Built Usage & Resource Metrics Grid with visual progress bars mapped to `--motion-*` and `--status-*` tokens.
  - Built Payment Methods & Invoice History table utilizing standard data grid styling.
- **Sandbox Overview Redesign:** Overhauled `index.html` to improve navigation and accessibility for the growing component library.
  - Restructured the single grid into logical layout groups (Core & Dashboard, Component Patterns, Authentication, Marketing & Content, System & Error States).
  - Implemented a vanilla JS real-time search filter for instantly discovering sandbox pages.
  - Updated to use compact cards for improved scannability and density.

### Phase 3 Execution — Comprehensive Codebase Audit & Dead Code Cleanup
- **CSS Duplicate Variable Cleanup:**
  - Removed duplicate `--brand-logo-blue` and `--brand-logo-cyan` declarations in `_colors.css` (previously defined in both the main `:root` and the audit completion `:root` block).
  - Removed duplicate `--vib-upload-progress-fill` in `vibtools-theme.css` (previously declared at line 68 and line 137; kept the correct foundation-backed version).
  - Removed previously cleaned duplicate `--vib-auth-panel` / `--vib-auth-panel-soft` aliases.
- **Zero Hardcode Enforcement (Deep Sweep):**
  - Converted `stroke-width="1.8"` → `var(--icon-stroke)` in `upload.html`.
  - Converted `stroke-width="2"` → `var(--icon-stroke)` in `cards/metric.html` (2 sparkline SVGs).
  - Replaced hardcoded `#38BDF8` → `var(--border-focus)` and `10px` → `var(--space-5)` in `sandbox-only.css`.
- **Foundation Module Version Alignment:**
  - Updated version header comments in `_colors.css`, `_typography.css`, `_spacing.css`, and `_motion.css` from `v2.1.2` → `v2.2.0`. All 8 foundation modules now carry consistent `v2.2.0` version stamps.
- **Completion Milestone:** The **v2.2.0 Engine Migration & SaaS Feature Rollout** is officially **100% COMPLETE**. Zero un-tokenized hardcodes, zero duplicate variable declarations, and all foundation modules version-aligned.

---

### Phase 4 — Framework Architecture Step 1 (2026-09-10)

#### New Files
- **`Sandbox/js/framework/event-bus.js`** — Lightweight pub/sub singleton (`window.EventBus`). Supports `on`, `off`, `emit`, `once`. Reserved channels: `toast:show`, `modal:open`, `modal:close`, `sidebar:toggle`, `theme:toggle`. Error-isolated per handler.
- **`Sandbox/js/framework/shell-manager.js`** — Dynamic layout shell injector. Pages with `data-vib-shell` on `<body>` receive the full Topbar + grouped Sidebar automatically at runtime. Sidebar collapse state persisted in `localStorage`. Wires `EventBus` channels to `VibToast` and `VibModal` — page code only needs to call `EventBus.emit(...)`.
- **`Sandbox/pages/_template.html`** — Master scaffold for all future feature pages. Loads the full framework script chain in correct order, includes inline documentation on usage, token rules, and demo buttons for every EventBus channel.

#### Modified Files
- **`Sandbox/css/sandbox-only.css`** — Added `#vib-sidebar[data-collapsed]` collapse rules using `var(--transition-normal)` and `var(--space-12)` (zero hardcodes).

---

### Phase 4 — Framework Architecture Step 2 (2026-09-10)

#### New Files
- **`Sandbox/js/framework/table-controller.js`** — Reusable dynamic table engine. Handles rendering, search filtering, sorting, pagination, and status pills (success/warning/danger/neutral) using foundation tokens. Integrates with `EventBus`. Zero hardcoded CSS/pixels.
- **`Sandbox/js/framework/form-controller.js`** — Reusable form validation and payload serialization helper. Handles field-level error messages (`--state-danger-*`), submit button loading states (`--vib-disabled-opacity`), and validation rules (required, email, custom, etc.). Integrates with `EventBus`. Zero hardcoded CSS.

#### Modified Files
- **`Sandbox/css/sandbox-only.css`** — Added programmatic CSS classes (`.vib-field-error`, `.vib-field-error-msg`, `.vib-btn-loading`) mapped directly to v2.2.0 foundation CSS variables for FormController integration. Zero hardcodes.
- **`Sandbox/pages/_template.html`** — Included new `table-controller.js` and `form-controller.js` in the framework script load order. Replaced placeholder content with a live demo demonstrating a simulated user creation form adding rows to a dynamic `TableController`.

---

### Phase 4 — Framework Architecture Step 3 (2026-09-10)

#### Final Framework Polish
- **`Sandbox/js/components/toast-manager.js`** — Updated `toast:show` EventBus listener to fully map all 4 variants (`success`, `danger`, `warning`, `info`) to the `--state-*` foundation tokens defined in `_colors.css`. Ensured the `danger` alias works properly when emitted.
- **`Sandbox/assets/css/foundation/_colors.css`** — Added missing `--state-info-*` tokens to maintain strict adherence to the foundation design engine.
- **`Sandbox/js/components/modal-manager.js`** — Enhanced accessibility for dynamic modals by adding `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` attributes. Verified `EventBus.on('modal:open')` handles backdrop locking correctly.

**Completion Milestone:** The **Framework Architecture Phase is 100% COMPLETE**. The modular UI engine, event bus, table controller, form controller, and adapters are all verified and stable across dynamic-shell pages without utilizing any hardcoded dimensions or colors.

---

### New Feature Page Step 1 — Plugin Management Module (2026-09-10)

#### New Files
- **`Sandbox/pages/plugins.html`** — Added Plugin Directory & Marketplace module. Leverages the dynamic shell, filter pills, and a responsive plugin card grid. Integrates with `EventBus` to emit toasts for toggling plugins and modals for settings/uninstalls. Validates inputs inside the settings modal dynamically using `FormController`. Completely aligns with v2.2.0 tokens (zero hardcoded values).

---

### Deep Forensic UI Audit & Compact Size Alignment (2026-09-10)
- **Typography Standardization:** Eradicated oversized headings (`vib-hero-title`, `vib-body-lg`, `text-[var(--text-xl)]`) across all Sandbox pages (home, about, projects, billing, plugins, etc.).
- **Layout Enforcement:** Enforced compact spacing (maximum `gap-4` or `gap-[var(--space-4)]`), matching the design contract established in reference pages (`forms.html`, `navigation.html`).
- **Baseline Alignment:** Confirmed zero remaining layout or typography mismatches against the frozen SaaS app baseline, enforcing the compact token standard across the framework.
