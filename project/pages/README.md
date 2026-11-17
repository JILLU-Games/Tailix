# Project Pages — Architecture, Structure & Component Map

## Purpose
This directory maps every page in the application, including its purpose, URL route, layout shell integration, and component dependencies.

## Page Categories
1. **Core & Dashboard**:
   - `pages/home.html` — Landing page with hero section, feature cards, and project showcase.
   - `pages/dashboard-shell.html` — Primary administrative dashboard shell.
   - `pages/projects.html` — Repository and project card grid.
   - `pages/users.html` — Team and user management table (Invite Member, CSV export, row actions, pagination).
   - `pages/monitoring.html` — Server health, live uptime, and metrics panels.
   - `pages/settings.html` — Account and system preference forms.
   - `pages/billing.html` — Invoices, usage meters, cycle toggle, plan/card modals, and receipt downloads.
   - `pages/plugins.html` — Plugin directory with live search, category pills, toggle status, settings, and uninstall flow.
2. **Component Showcases**:
   - `pages/forms.html` — Primitive inputs, switches, selects, validation states.
   - `pages/tables.html` — Data grids, sorting, batch action bars.
   - `pages/cards.html` — Stat cards, elevated cards, loading skeletons.
   - `pages/navigation.html` — Breadcrumbs, tabs, sidebars, pagination.
   - `pages/dropdowns.html` — Dropdown menus, tooltips, context menus.
   - `pages/alerts-states.html` — Alert banners, empty states, error fallbacks.
   - `pages/upload.html` — Drag-and-drop file uploader with progress tracking.
3. **Authentication & Public**:
   - `pages/login.html` & `pages/register.html` — Authentication pages.
   - `pages/profile.html` — User settings and avatar management.
   - `pages/about.html` & `pages/contact.html` — Informational public pages.
   - `pages/docs-layout.html` — Documentation template with sidebar navigation.
4. **System Error Handlers**:
   - `pages/404.html` — Not found state with toast triggers.
   - `pages/500.html` — Internal server error with modal fallback.
