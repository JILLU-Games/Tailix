# Accessibility and Motion Rules — v2.2.0

## Contrast and low-glare color

| Text role | Token | Value |
|---|---|---|
| Primary text | `--vib-text` | `#E6EDF3` |
| Content text | `--vib-content` | `#C9D1D9` |
| Secondary text | `--vib-muted` | `#8B949E` |
| Muted text | `--vib-tertiary` | `#6E7681` |
| Accent/focus | `--vib-primary` / `--vib-input-focus-border` | `#38BDF8` |

Pure-white glare is not part of the active UI contract.

## Focus rules

- Focus indication must use border/outline treatment, not glow shadows.
- `--shadow-focus` is `none`.
- Interactive elements must keep keyboard focus visibility.

## Motion rules

| Token | Value |
|---|---|
| `--transition-fast` | `100ms ease` |
| `--transition-normal` | `120ms ease` |
| `--transition-slow` | `150ms ease` |

Motion must remain subtle. Do not introduce large transforms, elevation effects, or layout-shifting hover states.

## Disabled / readonly / loading rules

- Disabled controls use `--vib-disabled-opacity` and `--vib-disabled-bg`.
- Readonly controls must remain visually distinct from disabled controls.
- Skeletons use `--vib-border-subtle` and pulse animation.
- Loading states must not shift layout.
