# Module Inventory & Dependency Map (`v2.2.0`)

Every CSS, JS, Token, and Validation module currently active in the repository:

---

## 1. Standalone Framework Modules (`framework/`)
| Module | Location | Why Used / Purpose | Dependencies |
|---|---|---|---|
| **Package Metadata** | `framework/package.json`, `VERSION`, `LICENSE` | Zero-dependency standalone package (`tailix-ui@2.2.0`, MIT) with explicit CSS/JS/PWA exports. | None |
| **Tokens Sheet** | `framework/css/tokens.css` | Dark & Light `--tx-*` and foundation CSS variables with zero-shadow compact caps and `data-radius="sharp"` flat mode. | None |
| **Readable CSS** | `framework/css/tailix.css` | Full `.tx-*` reset, layout shell, mobile offcanvas drawer, grids, cards, buttons, forms, tables, modals, toasts, alerts, tabs, extended Phase 05 components, utilities. | `./tokens.css` |
| **Minified CSS** | `framework/css/tailix.min.css` | Single-file `43,199 B` production CSS bundle (tokens inlined). | None |
| **`.vib-*` Bridge** | `framework/css/vib-compat.css` | `7,540 B` zero-CDN compatibility layer mapping `.vib-*` classes onto `--tx-*` variables (`0` hexes, `0` shadows). | `./tokens.css` or `tailix.min.css` |
| **JS Engine** | `framework/js/tailix.js` | Zero-dependency IIFE + CJS bundle (`50,504 B`) providing `window.Tailix`, 28-icon SVG registry, mobile drawer, & declarative `data-tx-*` handlers. | None (`DOM` in browser) |
| **Minified JS** | `framework/js/tailix.min.js` | Production `37,771 B` bundle verified via `node --check`, `npm test`, & Playwright. | None |
| **PWA Assets** | `framework/pwa/manifest.json`, `sw.js`, `icon.svg`, `*.png` | Installable Web App Manifest, offline-first Service Worker, and 192/512/maskable/Apple touch icons. | None |
| **Runnable Examples** | `framework/examples/static.html`, `sw.js`, `app.php`, `app.py` | Full A-Z Component Hub with PWA install + runnable PHP & Python 3 applications. | `tailix.min.css`, `tailix.min.js` |

---

## 2. Sandbox Foundation & CSS Modules (`Sandbox/`)
| Module | Location | Why Used / Purpose |
|---|---|---|
| **8 Foundation Partials** | `Sandbox/assets/css/foundation/_{colors,typography,spacing,radius,shadows,icons,breakpoints,motion}.css` | Single source of truth for Dark/Light palette, compact typography, spacing caps, zero-shadow elevation, icon stroke, breakpoints, and motion timing. |
| **Theme Entry** | `Sandbox/assets/css/vibtools-theme.css` | Imports all 8 foundation partials and bridges `--vib-*` token aliases. |
| **Sandbox Stylesheet** | `Sandbox/css/vibtools-sandbox.css` | Imports `vibtools-theme.css` and defines `.vib-*` layout shell, `.vib-btn*`, forms, tables, logs, alerts, and light-mode overrides. |

---

## 3. Sandbox JS Runtime Modules (`Sandbox/js/`)
| Module | Location | Loaded By | Exports / Global |
|---|---|---|---|
| **Tailwind Map** | `Sandbox/js/tailwind-config.js` | Sandbox HTML `<head>` | `window.vibTailwindConfig`, `syncTailwindConfig()` |
| **Event Bus** | `Sandbox/js/framework/event-bus.js` | Dashboard/SaaS/Template pages | `window.VibEventBus` |
| **Shell Manager** | `Sandbox/js/framework/shell-manager.js` | Dynamic shell pages (`plugins`, `users`, `billing`, `404`, `500`, `_template`) | `window.VibShell` (`getSandboxBase()`, `resolveHref()`, `#vib-theme-toggle`) |
| **Toast Manager** | `Sandbox/js/components/toast-manager.js` | Sandbox interactive pages | `window.VibToast` |
| **Modal Manager** | `Sandbox/js/components/modal-manager.js` | Sandbox interactive pages | `window.VibModal` |
| **Form Controller** | `Sandbox/js/framework/form-controller.js` | `_template.html`, `plugins.html` | `window.FormController` |
| **Table Controller** | `Sandbox/js/framework/table-controller.js` | `_template.html` | `window.TableController` |
| **Static Nav Enhancement** | `Sandbox/js/sandbox-nav.js` | Static `Sandbox/pages/*.html` | Enhances sidebar groups, active state, `v2.2.0` badges, table panels, doc tabs, upload zone, monitoring clock |

---

## 4. Sub-Page Playground Modules
- **Forms** (`Sandbox/pages/forms/`): 15 modular JS files (`inputs.js`, `selects-checks.js`, `sliders-switches.js`, `buttons-actions.js`, `validation-states.js`, `login-register.js`, `settings-components.js`, `search-filter.js`, `profile-forms.js`, `multi-step.js`, `contact-support.js`, `form-layout-rules.js`, `input-groups-addons.js`, `textarea-code.js`, `forms-showcase.js`).
- **Cards** (`Sandbox/pages/cards/`): 11 modular JS files (`cards-basic.js`..`cards-showcase.js`).
- **Navigation** (`Sandbox/pages/Navigation/`): 8 modular JS files (`nav-topbar.js`..`nav-showcase.js`).
- **Upload** (`Sandbox/pages/upload/`): Dropzone enhancement scripts.

---

## 5. Validation, Checksums & Automated Unit Tests
- `design-tokens/vibtools.compact.tokens.json` — Version `2.2.0` compact numeric caps contract (`Segoe UI`, `--radius: 0rem`).
- `tests/tailix.test.mjs` — 16-test `node:test` unit suite testing both `framework/js/tailix.js` and `framework/js/tailix.min.js`.
- `validation/no_growth_check.py` — Enforces compact cap invariants (`<= 44px` topbar, `<= 196px` sidebar, zero CSS hexes/shadows, `font-weight <= 500`, `Segoe UI`).
- `validation/sandbox_static_check.py` — Audits 8 foundation modules, Dark/Light tokens, `.vib-btn-primary`, `tailwind-config.js` keys, 28 pages + 34 snippets, and JSON sync.
- `validation/CHECKSUMS.sha256` — Cryptographic SHA-256 baseline manifest verified via `sha256sum -c validation/CHECKSUMS.sha256`.
