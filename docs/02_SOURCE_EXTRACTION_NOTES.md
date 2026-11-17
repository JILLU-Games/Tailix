# Source Extraction Notes — v2.2.0

## Active source package

Current source package: `VibTools_WEB_UI_v2.2.0.zip`.

This freeze no longer treats old v1.x or v2.0.x documents as the active design source. Those files remain as historical release records only. The v2.2.0 runtime and foundation token engine are the active implementation source.

## Extracted runtime sources

| Source | Purpose |
|---|---|
| `Sandbox/assets/css/foundation/_colors.css` | Primitive, semantic and component color tokens. |
| `Sandbox/assets/css/foundation/_typography.css` | Font families, type scale, line-height and weight contract. |
| `Sandbox/assets/css/foundation/_spacing.css` | Spacing steps, topbar/sidebar sizes, control heights and content widths. |
| `Sandbox/assets/css/foundation/_radius.css` | Border radius values. |
| `Sandbox/assets/css/foundation/_shadows.css` | Zero-shadow contract. |
| `Sandbox/assets/css/foundation/_icons.css` | Standard icon sizing. |
| `Sandbox/assets/css/foundation/_breakpoints.css` | Standard breakpoints. |
| `Sandbox/assets/css/foundation/_motion.css` | Transition durations and easing. |
| `Sandbox/assets/css/vibtools-theme.css` | Aggregator, legacy `--vib-*` bridge and `ui-*` utility layer. |
| `Sandbox/css/vibtools-sandbox.css` | Runtime component CSS using the foundation bridge. |
| `Sandbox/js/tailwind-config.js` | Tailwind CDN aliases, including `ui.*` token aliases. |
| `Sandbox/js/sandbox-nav.js` | Runtime version badge and sidebar navigation registry. |

## Extraction conclusion

The correct documentation direction is:

```text
Sandbox runtime v2.2.0 + foundation engine -> official freeze documents
```

The documents must describe the implemented runtime. They must not define an older design and force the Sandbox to match it.
