# Tailix Standalone CSS & JS Framework (`framework/`)

- **Version**: `v2.2.0`
- **Architecture**: Zero-Node.js, Zero-Build, Zero-CDN (Bootstrap-style drop-in)
- **Supported Stacks**: Static HTML (`file://` or Apache/Nginx), PHP (Core PHP, Laravel Blade, Symfony), Python (Flask, Django, FastAPI), Ruby, Go, or any server-rendered HTML app.

## Why This Exists
The `Sandbox/` directory uses Tailwind Play CDN (`https://cdn.tailwindcss.com`) as a component audit lab. **`framework/`** extracts the entire v2.2.0 8-module design system, compact pixel geometry, Dark/Light themes, and vanilla interactive widgets into self-contained CSS and JS files requiring zero build tools and zero external network dependencies.

## Quick Usage (2 Lines)
```html
<link rel="stylesheet" href="framework/css/tailix.min.css">
<script src="framework/js/tailix.min.js" defer></script>
```

## Subdirectories
- `framework/css/` — Token sheet (`tokens.css`), readable CSS framework (`tailix.css`), and single-file production bundle (`tailix.min.css`).
- `framework/js/` — Zero-dependency vanilla JS interactive engine (`tailix.js`, `tailix.min.js`).
- `framework/examples/` — Complete offline starter templates (`static.html`) and PHP/Python integration snippets.
