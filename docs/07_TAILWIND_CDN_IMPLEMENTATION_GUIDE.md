# Tailwind CDN Implementation Guide — v2.2.0

## Runtime architecture

VibTools uses Tailwind CDN with a custom foundation token engine.

Every Sandbox page must load:

```html
<link rel="stylesheet" href="../assets/css/vibtools-theme.css">
<link rel="stylesheet" href="../css/vibtools-sandbox.css">
```

`vibtools-theme.css` imports the foundation files and exposes `--vib-*` legacy aliases plus `ui-*` utility classes.

## Tailwind config source

`Sandbox/js/tailwind-config.js` exposes CSS-variable-backed aliases. The active contract includes:

```js
ui: {
  bgApp: 'var(--vib-background)',
  surfaceCard: 'var(--vib-surface)',
  textPrimary: 'var(--vib-text)',
  textAccent: 'var(--vib-primary)'
}
```

## Implementation rules

- Prefer `ui-*` classes and CSS variables over raw hex values.
- Do not introduce new hardcoded color values inside page markup.
- Keep existing Tailwind CDN workflow; do not add a build step.
- Maintain v2.2.0 compact dimensions and zero-shadow flat UI.

## Utility bridge

`vibtools-theme.css` provides:

- `.ui-card`
- `.ui-input`
- `.ui-btn`
- `.ui-badge`
- `.ui-text-primary`
- `.ui-text-content`
- `.ui-text-muted`
- `.ui-text-accent`
- `.ui-surface-card`
- `.ui-surface-soft`
- `.ui-divider`

These utilities are additive and do not replace existing runtime classes.
