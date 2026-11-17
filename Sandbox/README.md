# VibTools UI Sandbox — v2.2.0

The Sandbox keeps the v2.1.0 visual/runtime baseline frozen and applies only the Single Token Foundation Engine verification fix.

## v2.2.0 Scope

- `Sandbox/assets/css/foundation/_tokens.css`: low-glare `--text-primary` and expanded component bridge tokens.
- `Sandbox/assets/css/vibtools-theme.css`: expanded legacy `--vib-*` alias bridge.
- `Sandbox/css/vibtools-sandbox.css`: final alias completion layer after older fallback values.
- `Sandbox/js/tailwind-config.js`: CSS-variable-backed Tailwind CDN aliases.

Existing pages, modules, shell layout, routing and interactions remain preserved.


## v2.2.0 Verification Fix

Single Token Foundation Engine verification completed: remaining legacy aliases and Tailwind CDN token aliases were rebound to foundation variables while preserving all frozen layouts, routes and interactions.
