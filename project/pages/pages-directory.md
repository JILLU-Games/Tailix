# Pages & Routes Directory (`v2.2.0`)

Verified complete listing of all HTML routes served statically by `server.js` or usable standalone.

---

## 1. Standalone Zero-Node Page (`framework/`)
| Route / File | Description |
|---|---|
| `/framework/examples/static.html` | Offline zero-Node, zero-CDN A-Z Component Hub & compact SaaS dashboard (`tailix.min.css` + `tailix.min.js`). |

---

## 2. Sandbox Overview Hub
| Route / File | Description |
|---|---|
| `/Sandbox/index.html` (also `/` redirect) | Live searchable directory indexing all Sandbox component & SaaS groups. |

---

## 3. Sandbox Showcase & Application Pages (`Sandbox/pages/`)
| File | Group / Category | Runtime Features |
|---|---|---|
| `home.html` | Overview | Compact landing summary shell. |
| `dashboard-shell.html` | Workspace | Primary app shell, KPI strip, compact layout demo. |
| `projects.html` | Workspace | Project grid cards and workspace filters. |
| `monitoring.html` | Workspace | Live ticking UTC telemetry clock (`initMonitoringClock`), charts/KPIs. |
| `plugins.html` | SaaS | Plugin directory, live search/filter pills, enable/disable checkbox sync, confirmed Uninstall removal, Stripe Settings modal validation (`VibShell` + `VibModal` + `FormController`). |
| `users.html` | SaaS | Team member roster, Invite Member modal validation, `Export CSV` Blob download, delegated row actions, pagination. |
| `billing.html` | SaaS | Monthly/Annually (Save 20%) switch, Upgrade/Cancel/Reactivate plan modals, Add/Remove card methods, CSV & TXT receipt downloads. |
| `cards.html` | Showcase | Modular 11-script card playground (`Sandbox/pages/cards/`). |
| `forms.html` | Showcase | Modular 15-script form control playground (`Sandbox/pages/forms/`). |
| `navigation.html` | Showcase | Modular 8-script navigation playground (`Sandbox/pages/Navigation/`). |
| `tables.html` | Showcase | Static searchable, sortable, filterable table showcase (`initTablePanel`). |
| `typography-colors.html` | Foundation | Color token swatches, heading weight rules, compact typography preview. |
| `alerts-states.html` | Feedback | Inline alert banners & status badges. |
| `dropdowns.html` | Overlay | Interactive menu triggers and alignment examples. |
| `logs-modal.html` | Overlay | Log viewer modal (`initLogModal`), level filter, auto-scroll pin, copy logs. |
| `empty-loading-error.html` | States | Skeleton, empty, and inline error state patterns. |
| `upload.html` | Input | Drag-and-drop upload dropzone (`initUploadInteractions`). |
| `docs-layout.html` | Docs | Documentation layout with `Ctrl/Cmd+K` quicksearch, code tabs, Markdown copy (`initDocsInteractions`). |
| `settings.html` | Account | Workspace settings panels (`settings-components.js` + `settings-page.js`), live search, API key copy/toggle/rotate/revoke/generate modals, webhook add/remove, reset modal (`VibToast` + `VibModal`). |
| `profile.html` | Account | Operator profile card & form controls. |
| `about.html`, `contact.html` | General | Info and support contact pages. |
| `login.html`, `register.html` | Auth | Compact centered `.tx-auth-shell` / auth forms. |
| `404.html`, `500.html` | System | Compact error fallback views (`server.js` serves `404.html` on unmatched paths). |
| `_template.html` | Reference | Starter dynamic `VibShell` + `TableController` + `FormController` reference template. |
