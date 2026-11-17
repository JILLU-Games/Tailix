# Zero-Node Standalone Quickstart (HTML, PHP, Python)

Build compact Dark/Light dashboards in **under 5 minutes** with **zero Node.js, zero npm, and zero Tailwind CDN**.

---

## 1. Files Required (2 Core Assets + Optional Bridge/PWA)
Copy the `framework/css/` and `framework/js/` directories (or just the two minified bundles) into your web root:
- `framework/css/tailix.min.css` (`43,199 bytes` — includes Dark + Light design tokens, `.tx-*` layout shell, mobile drawer, grids, cards, forms, tables, modals, toasts, alerts, extended components, and utilities)
- `framework/js/tailix.min.js` (`37,771 bytes` — includes EventBus, 28-Icon SVG Registry, Toast, Modal with focus trap, Theme Toggle, Desktop/Mobile Sidebar Drawer, Tabs, Dropdown, Accordion, Code Copy, Chip Dismiss, Password Reveal, Table Filter/Sort/Pagination, and Form Validator)
- Optional: `framework/css/vib-compat.css` (`7,540 bytes` — zero-CDN `.vib-*` class compatibility bridge) and `framework/pwa/` (`manifest.json`, `sw.js`, icons).

---

## 2. Minimal Copy-Paste HTML Shell
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailix App</title>
  <link rel="stylesheet" href="framework/css/tailix.min.css">
  <script src="framework/js/tailix.min.js" defer></script>
</head>
<body>
  <div class="tx-shell">
    <header class="tx-topbar">
      <div class="tx-topbar-inner">
        <div class="tx-brand">
          <button type="button" class="tx-icon-btn" data-tx-sidebar-toggle aria-label="Toggle sidebar"><span data-tx-icon="menu" data-tx-icon-size="sm"></span></button>
          <span>My Console</span>
          <span class="tx-badge">v2.2.0</span>
        </div>
        <div class="tx-row tx-gap-2">
          <button type="button" class="tx-btn tx-btn-sm tx-btn-secondary" data-tx-theme-toggle>Theme</button>
          <button type="button" class="tx-btn tx-btn-sm tx-btn-primary" data-tx-toast="Saved cleanly" data-tx-toast-type="success">Save</button>
        </div>
      </div>
    </header>

    <div class="tx-layout">
      <aside class="tx-sidebar">
        <div class="tx-sidebar-inner">
          <div class="tx-sidebar-group">
            <div class="tx-sidebar-group-title">Workspace</div>
            <a href="#overview" class="tx-sidebar-link is-active"><span class="tx-sidebar-label">Overview</span></a>
          </div>
        </div>
      </aside>
      <main class="tx-main">
        <h1 class="tx-h1">Dashboard</h1>
      </main>
    </div>
  </div>
</body>
</html>
```

---

## 3. Running Locally Without Node.js
- **Full interactive A-Z Hub & PWA**: Open `framework/examples/static.html` via any static server (`python3 -m http.server 8000`).
- **Live Runnable PHP App**: Run `php -S 127.0.0.1:8080` from repository root and open `http://127.0.0.1:8080/framework/examples/app.php` (also see `framework/examples/php-snippet.md`).
- **Live Runnable Python App**: Run `python3 framework/examples/app.py --port 8000` and open `http://127.0.0.1:8000/` (also see `framework/examples/python-snippet.md`).

---

## 4. Using the Sandbox Component Lab (Express Runtime)
When inspecting all 28 Sandbox pages (`Sandbox/index.html`, `Sandbox/pages/*.html`):
- Root `/` redirects automatically to `/Sandbox/index.html` via `server.js` on port `3000`.
- Every Sandbox page displays a topbar theme toggle (`#vib-theme-toggle`) and compact `v2.2.0` badge.
- Sidebar links work dynamically from any page without 404 errors.
