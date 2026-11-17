# Tailix Standalone Examples (`framework/examples/`)

## Purpose
Ready-to-run, zero-Node, zero-CDN starter templates and server-rendered framework snippets using **only two local files**:
- `framework/css/tailix.min.css`
- `framework/js/tailix.min.js`

## Included Starters
1. **`static.html`** — Complete offline A-Z Component Hub, PWA installable shell (`manifest.json` + `sw.js`), `.vib-*` compatibility showcase (`vib-compat.css`), 28 built-in SVG icons, accordion, code copy, password reveal, chips, radio cards, slider, data table, validated form, and modals.
2. **`app.php`** — Runnable standalone PHP 8+ application (`php -S localhost:8080 framework/examples/app.php`) with server-rendered table, POST validation, and flash toast notifications.
3. **`app.py`** — Runnable standalone Python 3 application (`python3 framework/examples/app.py`) serving Tailix assets and an interactive worker registration dashboard.
4. **`php-snippet.md`** — Copy-paste starter templates for Core PHP and Laravel Blade.
5. **`python-snippet.md`** — Copy-paste starter templates for Flask, Django, and FastAPI + Jinja2.

## Quick Test
Open `framework/examples/static.html` directly over any static file server (Python `python3 -m http.server`, Nginx, Apache, or Express `http://localhost:3000/framework/examples/static.html`) — zero `npm install` or build step required.
