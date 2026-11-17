# Project Functions — Function Registry & Call Mapping

## Purpose
This directory documents all JavaScript functions and controllers in the project:
- **Function Name & Signature**: Parameter types and defaults.
- **Purpose**: Exactly what problem the function solves.
- **Implementation File**: Exact path and line references.
- **Caller Mapping**: Which pages, components, or user actions invoke it.
- **State & Side Effects**: Event emissions, DOM mutations, or localStorage writes.

## Verified Function & Method Registry
1. **EventBus (`Sandbox/js/framework/event-bus.js`)**:
   - `EventBus.on(channel, handler)`: Registers listener for an event channel.
   - `EventBus.off(channel, handler)`: Deregisters listener.
   - `EventBus.emit(channel, payload)`: Broadcasts payload to all listeners inside per-listener `try/catch`.
2. **ShellManager (`Sandbox/js/framework/shell-manager.js`)**:
   - `getSandboxBase()` / `resolveHref(href)`: Resolves root-relative `/index.html` and `/pages/*` dynamically under `/Sandbox/` when hosted from workspace root.
   - `injectShell()`: Wraps `<body>` content cleanly into `#vib-shell` + `<main id="vib-page-content">` (unwrapping any pre-existing `<main>` to prevent nesting).
   - `toggleSidebar()` / `toggleTheme()`: Toggles sidebar collapse (`vib-sidebar-collapsed`) or `data-theme`/`.dark` (`vib-theme`) in `localStorage`.
3. **FormController (`Sandbox/js/framework/form-controller.js`)**:
   - `new FormController(opts)`: Validates `!opts || !opts.form` and binds submit/blur/input listeners.
   - `FormController.prototype.validate()`: Runs rule checks + `try/catch` wrapped `rule.custom(value, payload)`.
   - `FormController.prototype.submit(e)` / `handleSubmit(e)`: Clears errors, validates, focuses first invalid field if invalid (returns `false`), or serializes and invokes `onSubmit(payload, instance)` (returns `true`).
4. **ToastManager (`Sandbox/js/components/toast-manager.js`)**:
   - `VibToast.success|danger|error|warning|info(message, duration)`: Lazy-initializes `#vib-toast-container` once `document.body` is available, caps stack at 5, and renders `message` safely via `textContent`.
5. **ModalManager (`Sandbox/js/components/modal-manager.js`)**:
   - `VibModal.open(options)`: Escapes `title`/`cancelText`/`confirmText`, saves previous focus, binds `Escape` key closing, wraps `onConfirm()` in `try/catch`, and holds modal open if `onConfirm()` returns `false`.
   - `VibModal.close()`: Removes modal DOM, removes `Escape` listener, unlocks scroll, and restores focus.
6. **Navigation & Page Helpers (`Sandbox/js/sandbox-nav.js`)**:
   - `groupMainSidebar(nav)`: Organizes static sidebar links into `MAIN`, `SAAS`, `PAGES & AUTH`, `COMPONENTS`, `SYSTEM` groups and sets version badges to `v2.2.0`.
