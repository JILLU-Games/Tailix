# Automated Test Suite (`tests/`)

## Purpose
Contains the zero-dependency Node.js `node:test` unit and functional test suite for the Tailix UI framework (`framework/js/tailix.js` and `framework/js/tailix.min.js`).

## Why It Exists
Ensures deterministic, regression-free behavior across both unminified and minified framework bundles for:
- HTML escaping (`Tailix.escapeHtml`)
- Scoped event bus (`Tailix.createEventBus`)
- Declarative & custom form validation (`Tailix.validateValue`, including malformed regex defense `BUG-12`)
- Data table filtering & unit-aware numeric sorting (`Tailix.filterAndSortRows`, `BUG-10`)
- Compact pagination window builder (`Tailix.buildPageWindow`)
- 28-icon SVG registry & XSS/prototype-key defense (`Tailix.icon`, `Tailix.icons`, `BUG-15`)
- Headless/SSR safety guards on `theme`, `sidebar`, `Form`, and `Table`

## How to Run
```bash
npm test
# or directly:
node --test tests/tailix.test.mjs
```
