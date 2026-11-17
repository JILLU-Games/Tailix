# 004: Error Handling Audit & Defensive Guard Specification

> **Source Basis**: Direct scan of `server.js`, `Sandbox/js/**/*.js`, and `framework/js/tailix.js`.

---

## 1. Error Handling Currently Implemented in Codebase

### A. `server.js` (Lines 1–28)
- `L21–23`: Express fallback middleware serves `404` HTTP status with `Sandbox/pages/404.html`.
- **Gap**: No `app.use((err, req, res, next) => ...)` 500 error middleware (never serves `Sandbox/pages/500.html` on server exceptions).

### B. `framework/js/tailix.js` (23 verified error-handling points)
- **HTML XSS Escaping**: `escapeHtml` (`L23–30`) safely escapes `& < > " '`.
- **EventBus Isolation**: `emit()` (`L62–71`) wraps each listener in `try/catch` and logs `[Tailix.bus] handler error on "<event>":` without crashing sibling subscribers.
- **Validation Engine (`validateValue`, `L78–125`)**:
  - Parses URL safely with `try { new URL(trimmed) } catch (_) { ... }` (`L91–98`) and restricts protocol to `http:` / `https:`.
  - Wraps `rule.custom(val, payload)` in `try/catch` (`L117–122`) returning error message instead of throwing.
- **Storage Guards (`L167–179`)**: `safeStorageGet` and `safeStorageSet` wrap `localStorage` access in `try/catch` (prevents `SecurityError` in sandboxed iframes/private browsing).
- **Modal Guards (`L278–286, 344–364`)**: Wraps `activeModalCleanup`, `lastFocusedEl.focus()`, `opts.onCancel`, and `opts.onConfirm` in `try/catch`; `onConfirm` exceptions display a `danger` toast instead of silent failure (`L360`).
- **Constructor Fail-Fast**: `Form` (`L472–474`) throws `Error('Tailix.Form requires { form } element.')`; `Table` (`L794`) throws `Error('Tailix.Table requires { container }.')`.
- **Submit Guard (`L599–604`)**: Wraps `this.onSubmit` in `try/catch` and surfaces `toast(..., 'danger')`.

### C. `Sandbox/js/**`
- `Sandbox/js/framework/event-bus.js:59–63`: Per-handler `try/catch` logging to `console.error`.
- `Sandbox/js/components/modal-manager.js:94–99`: Wraps `onConfirm` in `try/catch`.
- `Sandbox/js/framework/form-controller.js:111, 139–144`: Throws if `!opts || !opts.form`; catches errors inside `rule.custom`.
- `Sandbox/js/framework/shell-manager.js:289, 293, 351–354, 363`: Wraps `localStorage` get/set in `try/catch`.
- `Sandbox/js/sandbox-nav.js:262, 404, 436`: Wraps `document.execCommand('copy')` in `try/catch`.

---

## 2. Verified Missing Error Handling & Defensive Bugs (To Fix)

| Target File & Line | Missing Guard / Observed Failure | Fix Plan (Phase) |
|---|---|---|
| `Sandbox/pages/forms/settings-components.js:159, 191` | `onclick="showToast('Key copied to clipboard')"` throws `ReferenceError: showToast is not defined` because `toast-manager.js` is not loaded and uses `VibToast` | **Phase 01**: Load `toast-manager.js` & wire `VibToast.success(...)` via safe handler |
| `Sandbox/js/framework/table-controller.js:114–115` | `new TableController()` does `this.container = opts.container` with no validation; throws raw `TypeError` on missing container or invalid `columns`/`data` | **Phase 03**: Add explicit `if (!opts \|\| !opts.container) throw new Error(...)` + array/DOM guards |
| `Sandbox/js/components/toast-manager.js:10, 27–33` | No validation when invalid type or non-DOM context occurs; relies on inline style color injection | **Phase 03**: Normalize unknown types to `'info'` safely + guard `document.body` |
| `Sandbox/js/components/modal-manager.js:60` | Calls `escapeHtml(opts.title)` — verify `body` escaping vs intentional HTML, and guard empty `activeModal` double-close | **Phase 03**: Guard null elements and preserve safe error feedback |
| `framework/js/tailix.js:489–495` | Invalid regex string inside HTML `pattern="[invalid"` throws unhandled `SyntaxError` in `new RegExp(rule.pattern)` at `L110` during validation | **Phase 04**: Wrap `new RegExp(rule.pattern)` in `try/catch` returning `'Invalid validation pattern configuration.'` |
| `framework/js/tailix.js:876–878` | Malformed CSS selector in `data-tx-modal-target` (e.g. `123#bad` or `[broken`) throws unhandled `DOMException` in `document.querySelector(sel)` | **Phase 04**: Wrap `document.querySelector(sel)` in `try/catch` + emit warning/toast on missing target |
| `framework/js/tailix.js:520` | `parent.querySelector('.tx-field-error-msg[data-tx-for="' + name + '"]')` throws `DOMException` if field `name` contains quotes or brackets (e.g., `user[email]`) | **Phase 04**: Escape attribute value or iterate `.tx-field-error-msg` comparing `getAttribute('data-tx-for') === name` |
| `framework/js/tailix.js:414, 424` | `document.querySelector(selector)` throws if user passes invalid CSS selector to `Tailix.sidebar.toggle(badSel)` | **Phase 04**: Wrap selector lookup in `try/catch` returning `false` cleanly |
| `server.js:20–24` | Express has 404 fallback, zero 500 error middleware (`Sandbox/pages/500.html` unused by server) | **Phase 06/07** (only if server error handling explicitly verified safe without changing routes) |
