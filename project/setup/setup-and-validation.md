# Setup, Runtime & Validation Guide

Exact commands verified on the repository (`v2.2.0`).

---

## 1. Zero-Node Standalone Mode (No Node.js Required)
To serve or embed `framework/` in any static site, PHP, or Python environment:
1. Copy `framework/css/tailix.min.css` and `framework/js/tailix.min.js`.
2. Reference both files in your base HTML template (`<link>` + `<script defer>`).
3. Test locally without Node using Python's built-in HTTP server:
   ```bash
   python3 -m http.server 8000
   # Open http://127.0.0.1:8000/framework/examples/static.html
   # Or run the standalone Python 3 app directly:
   python3 framework/examples/app.py --port 8000
   # Or run the standalone PHP app directly:
   php -S 127.0.0.1:8080
   ```

---

## 2. Node.js / Express Sandbox Server (`server.js`)
Used to preview both the 28-page `Sandbox/` lab and `framework/` on port `3000`:
- `package.json` scripts:
  - `"dev": "node server.js"` — Starts Express static server on `0.0.0.0:3000` (`/` → `/Sandbox/index.html`).
  - `"start": "node server.js"` — Production server start command.
  - `"build": "node -e \"console.log('Build complete')\""` — Applet build verification command.
  - `"lint": "node --check server.js && node --check Sandbox/js/sandbox-nav.js && node --check Sandbox/js/tailwind-config.js"` — Core JS syntax verification.
  - `"test": "node --test tests/tailix.test.mjs"` — Runs the 16-test automated unit test suite against `tailix.js` and `tailix.min.js`.

---

## 3. Automated Validation Suite
Run these from the project root after any change:
1. **Unit Test Suite (`node:test`)**:
   ```bash
   npm test
   ```
2. **Compact Cap & Typography/Shadow Guardrail**:
   ```bash
   python3 validation/no_growth_check.py
   ```
   Verifies CSS tokens obey exact v2.2.0 compact pixel caps (`44px` topbar, `196px` sidebar, `Segoe UI`, `font-weight <= 500`, `0` shadows/hexes).
3. **8-Module Baseline & 28-Page + 34-Snippet Static Check**:
   ```bash
   python3 validation/sandbox_static_check.py
   ```
   Verifies all 8 CSS foundation modules, `html[data-theme="light"]` parity, `.vib-btn-primary`, `tailwind-config.js` token keys, and `design-tokens/vibtools.compact.tokens.json`.
4. **Standalone Engine Syntax & SHA-256 Checksum Verification**:
   ```bash
   node --check framework/js/tailix.js && node --check framework/js/tailix.min.js && sha256sum -c validation/CHECKSUMS.sha256
   ```
