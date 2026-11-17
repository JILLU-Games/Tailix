# Section and Page Pattern Contracts — v2.2.0

## Page shells

| Pattern | Required wrapper | Current use |
|---|---|---|
| Standard app page | `.vib-app-page` | Dashboard pages, Forms, Cards, Navigation, Tables, Upload, Settings, Docs wrappers where applicable. |
| Auth page | Auth-specific centered wrapper | Login and Register only. |
| SaaS Module | Data table, header wrapper, and tabbed shell | `users.html` (Team Management), `settings.html` (Settings & API Keys). |
| Docs/API page | Docs grid and docs panels | `docs-layout.html`. |
| Component playground | Scrollable playground container | Forms, Cards and Navigation. |

## Playground modules

| Playground | Directory | Required modules |
|---|---|---|
| Forms | `Sandbox/pages/forms/` | Input, Password, Search, Select, Textarea, Checkbox, Radio, Switch, File Input, Form Label, Helper Text, Validation, Disabled, Readonly, Loading. |
| Cards | `Sandbox/pages/cards/` | Base, Compact, Elevated, Nested, Stat, Metric, Feature, Project, Empty, Error, Loading. |
| Navigation | `Sandbox/pages/Navigation/` | Sidebar, Topbar, Nav Link, Active Link, Breadcrumb, Tabs, Pagination, Dropdown. |

## Surface pattern

Cards and panels use border-driven separation only:

```css
background: var(--vib-surface);
border: 1px solid var(--vib-card-border);
border-radius: var(--vib-radius-lg);
box-shadow: none;
```

## Text pattern

- Titles: `400`/`500`, low-glare `#E6EDF3` or `#C9D1D9`.
- Body/helper text: `400`, `#8B949E` or `#6E7681`.
- Buttons: compact, max `500`, `12px` default.
- Badges: `11px`/`12px`, muted text, subtle fill.

## State pattern

All states use foundation-backed semantic aliases: success, warning, danger, disabled, hover, active, focus, skeleton and upload/log/chart states.
