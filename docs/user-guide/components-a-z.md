# Tailix A–Z Component & Feature Guide

Every class and interactive behavior listed below is verified directly against `framework/css/tailix.css`, `framework/js/tailix.js`, and `Sandbox/`.

---

## A — Alerts
- **Classes**: `.tx-alert`, `.tx-alert-info`, `.tx-alert-success`, `.tx-alert-warning`, `.tx-alert-danger`.
- **Behavior**: Flat bordered inline notice box with theme-aware soft tinted background and left/full crisp border.

## B — Badges & Pills
- **Classes**: `.tx-badge`, `.tx-badge-primary`, `.tx-badge-success`, `.tx-badge-warning`, `.tx-badge-danger`, `.tx-badge-info`, `.tx-pill`, `.tx-status-dot`.
- **When to use**: Inline release version tags (`v2.2.0`), status indicators (`Ready`, `Paused`), or table cell labels.

## B — Buttons
- **Classes**: `.tx-btn`, `.tx-btn-sm` (`28px` compact height), `.tx-btn-primary`, `.tx-btn-secondary`, `.tx-btn-ghost`, `.tx-btn-danger`, `.tx-icon-btn`.
- **Rules**: Single-line crisp label, zero box-shadow, subtle hover surface shift. Add `data-tx-toast="..."` to fire a notification directly on click.

## C — Cards & KPI Stat Cards
- **Classes**: `.tx-card`, `.tx-card-header`, `.tx-card-title`, `.tx-card-body`, `.tx-card-footer`, `.tx-card-subtle`, `.tx-card-interactive`.
- **KPI Metric Cards**: `.tx-stat-card` containing `.tx-stat-label`, `.tx-stat-value`, optional `.tx-meter` > `.tx-meter-fill`, and `.tx-stat-trend`.

## D — Dropdowns
- **Markup**: Wrapper `[data-tx-dropdown]`, button `[data-tx-dropdown-trigger]`, menu `.tx-dropdown-menu[data-tx-dropdown-menu][hidden]`, items `.tx-dropdown-item`.
- **Interaction**: Click toggles menu and sets `aria-expanded`; clicking outside or pressing `Escape` closes all open dropdowns automatically.

## E — Empty & Loading States
- **Empty State**: `.tx-empty` with centered compact title + `.tx-meta` explanation (e.g., `"No matching records found."`).
- **Skeleton**: `.tx-skeleton` horizontal pulse placeholder bar.

## F — Forms & Validation
- **Classes**: `.tx-field`, `.tx-label`, `.tx-label-required`, `.tx-input`, `.tx-select`, `.tx-textarea`, `.tx-checkbox`, `.tx-radio`, `.tx-switch` + `.tx-switch-track`, `.tx-helper`, `.tx-form-actions`.
- **Declarative Validation**: Add `data-tx-validate` to `<form>`. HTML attributes (`required`, `type="email|url|number"`, `minlength`, `maxlength`, `pattern`, custom `data-tx-error`) are validated automatically on submit, marking `.tx-field-error` + injecting `.tx-field-error-msg`.
- **Toast on Valid Submit**: Add `data-tx-success-toast="Saved!"` to intercept submission client-side and fire a success toast when valid; omit it (and `data-tx-ajax`) when you want valid forms to POST natively to PHP/Python.

## G — Grids & Layout Shell
- **App Frame**: `.tx-shell` → `.tx-topbar > .tx-topbar-inner` + `.tx-layout > (.tx-sidebar + .tx-main)`.
- **Grids**: `.tx-grid` combined with `.tx-grid-2`, `.tx-grid-3`, `.tx-grid-4`, or `.tx-split-40-60` (collapses gracefully below `1024px` and `768px`).

## L — Logs Viewport & Dropzone
- **Logs**: `.tx-logs-viewport` + `.tx-log-row` (monospace compact scrolling log container).
- **Upload**: `.tx-dropzone` (dashed bordered drop target).

## M — Modals (Declarative & Programmatic)
- **Declarative Trigger**: Add `data-tx-modal-target="#modal-id"` on any button; wrap dialog inside `#modal-id.tx-modal-backdrop[hidden]` > `.tx-modal[role="dialog"][aria-modal="true"]`. Add `data-tx-modal-close` to cancel/close buttons.
- **Programmatic API**: Call `Tailix.modal({ title, body, html, confirmText, cancelText, danger, onConfirm, onCancel })`. Returning `false` from `onConfirm` keeps the modal open (for async/form validation gates).
- **Accessibility**: Automatically moves focus into dialog, saves & restores trigger focus on close, and supports `Escape` & backdrop click.

## S — Sidebar Collapse & Mobile Offcanvas Drawer
- **Button**: Add `data-tx-sidebar-toggle` (optionally with CSS selector value) inside `.tx-topbar`.
- **Desktop (`> 768px`)**: Sets `.tx-sidebar[data-collapsed="true"]` (collapses desktop width from `196px` to compact `52px`) and persists in `localStorage['tailix-sidebar-collapsed']`.
- **Mobile (`<= 768px`)**: Opens `.tx-sidebar[data-mobile-open="true"]` as an offcanvas slide-in drawer with `.tx-sidebar-backdrop[data-visible="true"]`; auto-closes on backdrop click, link click, `Escape` key, or resize above `768px`.

## S — Spinners, Progress & Sliders
- **Spinners**: `.tx-spinner`, `.tx-spinner-sm`, `.tx-spinner-lg` (circular rotating border indicator).
- **Progress Bars**: `.tx-progress` > `.tx-progress-fill` (with `.tx-progress-success`, `.tx-progress-warning`, `.tx-progress-danger`).
- **Range Slider**: `input[type="range"].tx-slider`.

## T — Tabs, Accordions, Code Blocks & Tooltips
- **Tabs**: Container `[data-tx-tabs]` with `.tx-tab[data-tx-tab="panel-id"]` buttons and matching panels `[data-tx-tab-panel="panel-id"]` (supports nested `.tx-code-block` tabs and `ArrowLeft` / `ArrowRight` keys).
- **Accordions**: `.tx-accordion[data-tx-accordion="single"]` > `.tx-accordion-item` > `.tx-accordion-trigger[data-tx-accordion-trigger]` + `.tx-accordion-panel`.
- **Code Blocks & Copy**: `.tx-code-block` with `.tx-code-header`, `.tx-code-pre`, `.tx-method-{get,post,put,delete}` badges, and `[data-tx-copy]` button.
- **Tooltips**: Pure CSS `[data-tx-tooltip="Label text"]` hover/focus tooltip.

## T — Tables (Search, Filter, Sort, Pagination)
- **Declarative Table**: Wrap `.tx-table-panel[data-tx-table]` containing `[data-tx-table-search]`, `select[data-tx-table-filter="colIdx"]`, `select[data-tx-page-size]`, `[data-tx-sort-col="colIdx"]`, `[data-tx-select-all]`, `[data-tx-table-count]`, and `[data-tx-pagination]` (with compact `...` ellipsis windows and unit-aware numeric sorting).
- **Programmatic Table**: `new Tailix.Table({ container, columns, data, pageSize, emptyText })`.

## T — Theme Toggle (Dark / Light) & Flat Geometry
- **Theme Button**: Add `data-tx-theme-toggle` in the header. Updates `<html data-theme="dark | light">` and persists to `localStorage['tailix-theme']`.
- **Flat `0px` Mode**: Set `document.documentElement.setAttribute('data-radius', 'sharp')` for `0rem` square geometry.

## T — Toasts, Chips, Breadcrumbs & Icons
- **Toasts**: `data-tx-toast="Message" data-tx-toast-type="info|success|warning|danger"` or `Tailix.toast(message, type, duration)` (XSS-safe `textContent`, max 5 stack).
- **Chips**: `.tx-chip` with `[data-tx-chip-close]` dismiss button.
- **Breadcrumbs & Log Badges**: `.tx-breadcrumb` > `.tx-breadcrumb-item` + `.tx-breadcrumb-sep`; `.tx-log-badge-{info,warn,error,debug}`.
- **28-Icon Registry**: `<span data-tx-icon="search" data-tx-icon-size="sm"></span>` or `Tailix.icon('check', 'md')`.
- **`.vib-*` Bridge (`vib-compat.css`)**: Maps `.vib-card`, `.vib-btn*`, `.vib-input`, `.vib-badge*`, `.vib-alert*`, and `.vib-table*` onto `--tx-*` tokens without Tailwind CDN.
