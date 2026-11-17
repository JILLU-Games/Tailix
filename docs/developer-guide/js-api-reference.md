# JavaScript API Reference (Standalone `window.Tailix` & Sandbox Controllers)

## Part A — Standalone Engine (`framework/js/tailix.js` / `tailix.min.js`)
Namespace: `window.Tailix` (`version: 'v2.2.0'`), loaded via browser `<script src="framework/js/tailix.min.js" defer></script>` or ESM/CommonJS.

### 1. Declarative `data-tx-*` Attributes (Zero Custom JS)
- `data-tx-theme-toggle` — Toggles `html[data-theme]` (`dark` ↔ `light`), updates `aria-pressed`, persists `localStorage['tailix-theme']`, emits `theme:change`.
- `data-tx-sidebar-toggle="[selector]"` — Toggles `[data-collapsed="true|false"]` on desktop (`> 768px`) or opens/closes the offcanvas mobile drawer (`[data-mobile-open="true|false"]` + `.tx-sidebar-backdrop`) on `<= 768px`.
- `data-tx-icon="name"` + `data-tx-icon-size="xs|sm|md|lg|xl|2xl"` — Hydrates deterministic inline SVG from the 28-icon registry.
- `data-tx-toast="msg"` + `data-tx-toast-type="info|success|warning|danger"` + `data-tx-toast-duration="3200"` — Fires toast safely via `textContent`.
- `data-tx-modal-target="#modal-id"` / `data-tx-modal-close` — Opens `#modal-id`, traps `Tab` / `Shift+Tab` focus inside the modal, binds `Escape` + backdrop click close, restores trigger focus.
- `data-tx-tabs` / `data-tx-tab="panel"` / `data-tx-tab-panel="panel"` — Accessible tab panel toggling (including nested `.tx-code-block` tabs) + `ArrowLeft`/`ArrowRight` keyboard cycling.
- `data-tx-dropdown` / `data-tx-dropdown-trigger` / `data-tx-dropdown-menu` — Toggles menu + auto-closes on item selection, outside click, or `Escape`.
- `data-tx-accordion="single|multiple"` / `[data-tx-accordion-trigger]` — Expands/collapses `.tx-accordion-item` panels (`is-open` + `[hidden]`).
- `data-tx-copy="[selector]"` + `data-tx-copy-toast="Copied!"` — Copies active code panel or target input text to clipboard, emits `code:copied`, and optionally fires a toast.
- `data-tx-chip-close` — Dismisses parent `.tx-chip` and emits `chip:dismissed`.
- `.tx-password-toggle` — Toggles sibling `<input>` between `password` and `text` with `eye`/`eye-off` SVG swap.
- `data-tx-table` — Activates HTML table search (`[data-tx-table-search]`), filter (`[data-tx-table-filter="colIdx"]`), numeric-aware sort (`[data-tx-sort-col="colIdx"]`), page size (`[data-tx-page-size]`), select-all (`[data-tx-select-all]`), counter (`[data-tx-table-count]`), and compact `...` ellipsis pagination (`[data-tx-pagination]`).
- `form[data-tx-validate]` — Validates HTML attributes (`required`, `type`, `minlength`, `maxlength`, `pattern`, `data-tx-error`); add `data-tx-success-toast="..."` or `data-tx-ajax` to intercept submit client-side.

### 2. Programmatic Methods (`window.Tailix`)
- `Tailix.bus.on(event, handler)` / `once(event, handler)` / `off(event, handler)` / `emit(event, payload)` — Returns unsubscribe function; catches listener exceptions safely.
- `Tailix.icon(name, size?)` / `Tailix.icons` — Returns inline SVG markup string for any of the 28 built-in outline icons (`xs`..`2xl`).
- `Tailix.toast(message | { message, type, duration }, type?, duration?)`
- `Tailix.modal({ title, body, html, confirmText, cancelText, danger, onConfirm, onCancel })` — Returning `false` from `onConfirm` prevents closing.
- `Tailix.closeModal()`
- `Tailix.theme.get()` / `set('dark'|'light')` / `toggle()` / `init()`
- `Tailix.sidebar.setCollapsed(bool, selector?)` / `setMobileOpen(bool, selector?)` / `closeMobile(selector?)` / `toggle(selector?)` / `init()`
- `new Tailix.Form({ form, rules, onSubmit })` — Exposes `.serialize()`, `.validate()`, `.submit(e)`, `.handleSubmit(e)`, `.setFieldError(name, msg)`, `.clearFieldError(name)`, `.clearAllErrors()`, `.setLoading(bool)`, `.reset()`.
- `new Tailix.Table({ container, columns, data, pageSize, emptyText })` — Exposes `.setData(rows)`, `.render()`.
- `Tailix.init()` — Re-scans dynamically injected DOM nodes for `[data-tx-icon]`, `[data-tx-table]`, and `form[data-tx-validate]`.

---

## Part B — Sandbox Lab Runtime (`Sandbox/js/`)
Used inside the Tailwind-CDN Sandbox pages (`Sandbox/pages/*.html`):
- `Sandbox/js/tailwind-config.js` — Extends `tailwind.config.theme.extend` with `vib` (`122` keys) & `ui` (`13` keys) and runs `syncTailwindConfig()` on load so late-loaded `cdn.tailwindcss.com` picks up all tokens.
- `Sandbox/js/framework/event-bus.js` → `window.VibEventBus`
- `Sandbox/js/framework/shell-manager.js` → `window.VibShell` (`getSandboxBase()`, `resolveHref()`, topbar `#vib-theme-toggle`)
- `Sandbox/js/components/toast-manager.js` → `window.VibToast` (`info`, `success`, `warning`, `error`, lazy container, 5-toast cap)
- `Sandbox/js/components/modal-manager.js` → `window.VibModal` (`open`/`confirm`, `Escape`, focus restore, `onConfirm() === false` hold)
- `Sandbox/js/framework/form-controller.js` → `window.FormController` (`validate`, `submit`, `handleSubmit`, `serialize`, `setLoading`)
- `Sandbox/js/framework/table-controller.js` → `window.TableController`
- `Sandbox/js/sandbox-nav.js` — Auto-enhances static Sandbox navigation sidebar, topbar `v2.2.0` parity, table panels, doc code tabs, upload dropzone, and monitoring clock.
