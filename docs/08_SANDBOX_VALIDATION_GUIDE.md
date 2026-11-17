# Sandbox Validation Guide — v2.2.0

## Required checks

Run from the project root:

```bash
python3 validation/no_growth_check.py
python3 validation/sandbox_static_check.py
node --check Sandbox/js/sandbox-nav.js
node --check Sandbox/js/tailwind-config.js
```

## Expected results

- Compact defaults remain within guardrails.
- Runtime version is `v2.2.0`.
- Every Sandbox page includes `vibtools-theme.css` before `vibtools-sandbox.css`.
- Foundation files exist.
- Tailwind CDN aliases include `ui.*` token mappings.
- Forms/Cards/Navigation module directories remain complete.
- Local routes and file references remain valid.

## Manual UI QA checklist

- Desktop, tablet and mobile layouts should retain existing shell behavior.
- Component playgrounds should scroll vertically without clipping.
- Buttons, badges, labels and headings should use soft weights and low-glare colors.
- Focus, hover, active, disabled, readonly and loading states should remain visible without shadow/elevation.
