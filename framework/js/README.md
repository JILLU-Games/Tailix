# Standalone JS Engine (`framework/js/`)

## Purpose
Zero-dependency vanilla JavaScript runtime (`v2.2.0`) providing declarative `data-tx-*` interactions and the `window.Tailix` programmatic API for Static HTML, PHP, Python (Flask/Django/FastAPI), or any server-rendered site.

## Files
- **`tailix.js`** — Full readable source (`EventBus`, `Toast`, `Modal`, `Theme`, `Sidebar`, `Tabs`, `Dropdowns`, `Table`, `Form`).
- **`tailix.min.js`** — Minified production bundle (`<script src="framework/js/tailix.min.js" defer></script>`).

## Quick Declarative Usage (Zero Custom JS Needed)
```html
<!-- Theme & Sidebar Toggles -->
<button data-tx-theme-toggle>Theme</button>
<button data-tx-sidebar-toggle>Menu</button>

<!-- Toast Trigger -->
<button data-tx-toast="Saved!" data-tx-toast-type="success">Save</button>

<!-- Declarative Modal -->
<button data-tx-modal-target="#confirm-modal">Open Modal</button>
<div id="confirm-modal" class="tx-modal-backdrop" hidden>
  <div class="tx-modal" role="dialog" aria-modal="true">
    <div class="tx-modal-header">
      <h2 class="tx-h2">Confirm</h2>
      <button class="tx-icon-btn" data-tx-modal-close aria-label="Close">×</button>
    </div>
    <div class="tx-modal-body">Proceed with update?</div>
    <div class="tx-modal-footer">
      <button class="tx-btn tx-btn-sm tx-btn-secondary" data-tx-modal-close>Cancel</button>
      <button class="tx-btn tx-btn-sm tx-btn-primary" data-tx-modal-close>Confirm</button>
    </div>
  </div>
</div>

<!-- Declarative Validated Form -->
<form data-tx-validate>
  <input class="tx-input" name="email" type="email" required>
  <button class="tx-btn tx-btn-sm tx-btn-primary" type="submit">Submit</button>
</form>
```

## Programmatic API (`window.Tailix`)
- `Tailix.toast(message, type, duration)` (`type`: `'info' | 'success' | 'warning' | 'danger'`)
- `Tailix.modal({ title, body, confirmText, cancelText, danger, onConfirm, onCancel })` (return `false` from `onConfirm` to hold open on validation failure)
- `Tailix.theme.set('dark' | 'light')`, `Tailix.theme.toggle()`, `Tailix.theme.get()`
- `Tailix.sidebar.toggle()`, `Tailix.sidebar.setCollapsed(bool)`
- `new Tailix.Form({ form, rules, onSubmit })`
- `new Tailix.Table({ container, columns, data, pageSize })`
- `Tailix.bus.on(event, fn)`, `Tailix.bus.emit(event, payload)`
