# System Architecture Overview (`v2.2.0`)

This repository ships **two synchronized, non-colliding tiers** built on the same compact design tokens (`design-tokens/vibtools.compact.tokens.json`):

---

## 1. Dual Runtime Tiers

| Tier | Entry / Assets | Target Usage | Dependencies |
|---|---|---|---|
| **Tier A: Sandbox Validation Lab** (`Sandbox/`, `server.js`) | `Sandbox/index.html`, `Sandbox/pages/*.html`, Tailwind Play CDN + `Sandbox/js/tailwind-config.js` + `Sandbox/css/vibtools-sandbox.css` + 8-module CSS foundation | Internal visual QA lab (28 HTML pages + 38 JS modular sub-demos) served via Express on port `3000`. | Node.js `express ^4.21.2` + Tailwind Play CDN |
| **Tier B: Standalone Zero-Node Framework** (`framework/`) | `framework/css/tailix.min.css` (`33,756 B`), `framework/js/tailix.min.js` (`24,777 B`), `framework/examples/static.html` | Production drop-in UI kit for **Static HTML, PHP, Python (Flask/Django/FastAPI)**, Go, or Ruby templates. | **None** (Zero Node.js, Zero Tailwind CDN, Zero Build Step) |

---

## 2. CSS Cascade & Token Resolution Flow
1. `design-tokens/vibtools.compact.tokens.json` fixes compact geometry caps (`44px` topbar, `196px` sidebar, `<= 28px/32px` buttons, `<= 30px/34px` inputs, `<= 500` heading weights, zero default box shadows).
2. In `Sandbox/`, `Sandbox/assets/css/vibtools-theme.css` imports all **8 foundation modules** (`_colors.css`, `_typography.css`, `_spacing.css`, `_radius.css`, `_shadows.css`, `_icons.css`, `_breakpoints.css`, `_motion.css`). `Sandbox/css/vibtools-sandbox.css` imports `vibtools-theme.css` and exposes `.vib-*` semantic component rules. `Sandbox/js/tailwind-config.js` maps 122 `vib` + 13 `ui` tokens into Tailwind CDN runtime via `syncTailwindConfig()`.
3. In `framework/`, `framework/css/tokens.css` defines 210 Dark/Light `--tx-*` custom properties and `framework/css/tailix.min.css` bundles tokens + all `.tx-*` layout/component/utility rules into a single self-contained file.

---

## 3. Express Server Routing (`server.js`)
- Serves project root statically (`app.use(express.static(__dirname))`).
- `GET /` → redirects `302` to `/Sandbox/index.html`.
- Fallback middleware → returns HTTP `404` with `Sandbox/pages/404.html`.
- All navigation inside `Sandbox/` uses `getSandboxBase()` / `resolveHref()` in `shell-manager.js` and normalized filenames in `sandbox-nav.js` so pages reload cleanly without redirecting home.
