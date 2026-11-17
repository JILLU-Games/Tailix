# Function & Class Technical Registry (`v2.2.0`)

Verified function signatures, file locations, and runtime responsibilities across `framework/js/tailix.js` and `Sandbox/js/`.

---

## 1. Standalone Engine Functions (`framework/js/tailix.js`)

| Function / Constructor | Lines | Signature & Purpose | Where Called |
|---|---|---|---|
| `icon` / `hydrateIcons` | `54–69` | `icon(name, size) -> string` — Renders deterministic SVG from 28-icon `ICONS` whitelist with `FALLBACK_ICON`; `hydrateIcons(root)` populates `[data-tx-icon]`. | `Tailix.icon()`, `initDeclarativeControls()` |
| `escapeHtml` | `74–81` | `(value) -> string` — Escapes `&`, `<`, `>`, `"`, `'` to HTML entities (`_internals`). | Modal header rendering, `Table` rendering |
| `createEventBus` | `83–127` | `() -> { on, once, off, emit }` — Isolated pub/sub preventing listener exceptions from breaking siblings. | `Tailix.bus` |
| `validateValue` | `129–180` | `(rawValue, rule, payload) -> string` — Validates `required`, `email`, `url`, `number`, `minLength`, `maxLength`, `try/catch` `pattern`, and safe `try/catch` `custom(val, payload)`. | `Form.prototype.validate()`, live `input` clearing |
| `filterAndSortRows` | `182–215` | `(rows, opts) -> Array` — Pure query/column filter + unit-aware numeric (`ms`, `$`, `%`) & natural sort helper (`_internals`). | `initDeclarativeTable`, unit tests |
| `toast` | `268–311` | `(message \| opts, type?, duration?) -> HTMLElement\|null` — Appends XSS-safe toast via `textContent`; lazy-inits `#tx-toast-container`; caps active count at `MAX_TOASTS = 5`. | `[data-tx-toast]` click delegation, `Tailix.toast()` |
| `getFocusableElements` / `trapModalFocus` / `modal` / `openModalElement` / `closeModal` | `328–463` | Opens programmatic (`Tailix.modal(opts)`) or declarative (`data-tx-modal-target`) `.tx-modal`; traps `Tab`/`Shift+Tab` focus, binds `Escape`, saves/restores trigger focus, holds open if `onConfirm() === false`. | `[data-tx-modal-target]` / `[data-tx-modal-close]` click, `Tab`/`Escape` keydown |
| `theme` (`get`, `set`, `toggle`, `init`) | `468–496` | Reads/sets `html[data-theme]`, persists `localStorage['tailix-theme']`, syncs `[data-tx-theme-toggle]` `aria-pressed`, emits `theme:change`. | `[data-tx-theme-toggle]` click & `initDeclarativeControls()` |
| `sidebar` (`setCollapsed`, `setMobileOpen`, `closeMobile`, `toggle`, `init`) | `535–594` | Toggles `.tx-sidebar[data-collapsed="true\|false"]` on desktop or `.tx-sidebar[data-mobile-open="true\|false"]` + `.tx-sidebar-backdrop` on `<= 768px`. | `[data-tx-sidebar-toggle]` click, backdrop/link click, `Escape` key & `initDeclarativeControls()` |
| `activateTab` | `599–620` | `(tabBtn) -> void` — Toggles `.is-active`, `aria-selected`, and `[hidden]` on `[data-tx-tab-panel]` (including `.tx-code-block` scopes). | `[data-tx-tab]` click, `ArrowLeft`/`ArrowRight` keydown |
| `closeAllDropdowns` | `621–630` | `(except?) -> void` — Hides `[data-tx-dropdown-menu]` across document except optional open menu. | Outside document click, dropdown item click, `Escape` key |
| `Form` | `635–798` | `(opts: { form, rules?, onSubmit? })` — Extracts HTML rules (`_extractHtmlRules`), validates (`validate`), serializes (`serialize`), submits (`submit` / `handleSubmit`), sets loading (`setLoading`), sets/clears field errors safely without selector injection. | Auto-bound on `form[data-tx-validate]` or `new Tailix.Form(...)` |
| `buildPageWindow` / `initDeclarativeTable` / `Table` | `803–1034` | Builds compact `...` ellipsis pagination windows; binds `[data-tx-table]` search, filter, column sort, pagination, and select-all; `new Tailix.Table({ container, columns, data, pageSize, emptyText })`. | Auto-bound on `[data-tx-table]` or `new Tailix.Table(...)` |
| `copyToClipboard` / `initDeclarativeControls` | `1039–1306` | Initializes `theme`, `sidebar`, icons, tables, forms, and registers idempotent document click/change/keydown delegation (accordions, password reveal, code copy, chip dismiss, radio cards). | Auto-runs on `DOMContentLoaded` + exposed as `Tailix.init()` |

---

## 2. Sandbox Framework & Component Functions (`Sandbox/js/`)

| File | Symbol | Signature / Role |
|---|---|---|
| `tailwind-config.js` | `syncTailwindConfig()` | Re-applies `vibTailwindConfig` after CDN script load on `DOMContentLoaded` & `load` so all 122 `vib` + 13 `ui` tokens generate utility classes. |
| `framework/event-bus.js` | `EventBus` | `on`, `once`, `off`, `emit` exposed at `window.VibEventBus`. |
| `framework/shell-manager.js` | `getSandboxBase()`, `resolveHref(href)`, `injectShell()`, `applyTheme(theme)`, `toggleTheme()`, `toggleSidebar()`, `setVersionBadges()` | Resolves `/Sandbox/` base path dynamically, injects Topbar (`#vib-theme-toggle`) + Sidebar (`groupPlan`), unwraps nested `<main>`, syncs `v2.2.0` badges. |
| `components/toast-manager.js` | `ToastManager` (`_initContainer`, `_createToast`, `success`, `danger`, `error`, `warning`, `info`) | Lazy container creation (safe if loaded in `<head>`), `textContent` XSS guard, 5-toast max cap. |
| `components/modal-manager.js` | `escapeHtml(value)`, `ModalManager` (`open(options)`, `close()`) | Accessible modal with `Escape` close, focus save/restore, `try/catch` around `onConfirm()`, `return false` validation hold. |
| `framework/form-controller.js` | `validateField(value, rule)`, `FormController` (`validate()`, `submit(e)`, `handleSubmit(e)`, `serialize()`, `setLoading(bool)`) | Validates fields, wraps `rule.custom` in `try/catch`, returns boolean result from `submit()`. |
| `framework/table-controller.js` | `statusVariant(value)`, `pillHtml(value)`, `esc(str)`, `TableController` | Renders dynamic searchable, sortable, filterable, paginated tables in `_template.html`. |
| `sandbox-nav.js` | `normalizePath`, `setVersionBadges`, `prepareLink`, `groupMainSidebar`, `initTablePanel`, `initLogModal`, `initMonitoringClock`, `initUploadInteractions`, `initDocsInteractions` | Enhances static `Sandbox/pages/*.html` navigation, static table sorting/filtering/paging, log modal copy/pin, monitoring clock, upload dropzone, and docs quicksearch (`Ctrl/Cmd+K`). |
