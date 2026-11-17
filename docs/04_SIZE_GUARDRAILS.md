# Size Guardrails — v2.2.0

## Rule

The v2.2.0 UI remains compact. No document or component should authorize growth beyond the current foundation token caps.

## Foundation size tokens

| Token | Value | Meaning |
|---|---:|---|
| `--height-topbar` | `44px` | Locked shell topbar height. |
| `--width-sidebar` | `196px` | Locked shell sidebar width. |
| `--height-button-sm` | `28px` | Compact button height. |
| `--height-button-md` | `32px` | Pagination / medium action height. |
| `--height-input-sm` | `30px` | Compact input/select height. |
| `--height-input-md` | `34px` | Medium input/select height. |
| `--content-max-width` | `1280px` | Main content max width. |
| `--docs-shell-max-width` | `1280px` | Docs shell max width. |
| `--card-padding-y` | `10px` | Default compact card vertical padding. |
| `--card-padding-x` | `12px` | Default compact card horizontal padding. |

## Typography caps

| Role | Cap |
|---|---:|
| Large page title | `20px` |
| Standard page title / major section | `16px` |
| Card/section title | `14px` |
| Primary UI text | `13px` |
| Button/control/helper text | `12px` |
| Badge/micro-label text | `11px` |

## No-growth statement

The v2.2.0 freeze preserves all previous compact-density decisions. New pages/components must use the foundation size tokens instead of hardcoded larger dimensions.
