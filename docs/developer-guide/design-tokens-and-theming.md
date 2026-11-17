# Design Tokens & Dark/Light Theming Architecture

This document explains the **exact CSS token contracts** verified across both the `Sandbox/` 8-module foundation and the `framework/css/` standalone package (`v2.2.0`).

---

## 1. Single Token Foundation
1. **Contract Source**: `design-tokens/vibtools.compact.tokens.json` (`version: "2.2.0"`).
2. **Sandbox 8-Module CSS Foundation (`Sandbox/assets/css/foundation/`)**:
   - `_colors.css` — Dark defaults (`:root, html[data-theme="dark"]`) + full Light theme parity (`html[data-theme="light"]`) for backgrounds, surfaces, borders, text hierarchy, accent, state badges, logs, charts, docs, HTTP methods, settings, and file upload zones.
   - `_typography.css` — `"Segoe UI", "Segoe UI Web", system-ui, -apple-system, "Helvetica Neue", sans-serif` stack; compact font scale (`--text-2xs: 0.625rem`, `--text-xs: 11px`, `--text-sm: 12px`, `--text-base: 13px`, `--text-md: 14px`, `--text-lg: 15px`); heading weight `<= 500`.
   - `_spacing.css` — `2px` (`--space-1`) through `24px` (`--space-12`), `--height-topbar: 44px`, `--width-sidebar: 196px`, `--width-sidebar-collapsed: 52px`, `--height-btn-sm: 28px`, `--height-btn-md: 32px`, `--height-input-sm: 30px`, `--height-input-md: 34px`, `--height-input-lg: 36px`.
   - `_radius.css` — Subtle crisp geometry (`--radius-xs`..`--radius-pill`).
   - `_shadows.css` — Flat zero-shadow elevation (`--shadow-none: none`).
   - `_icons.css` — Standard `14px`/`16px`/`18px` sizes and `--icon-stroke: 1.5`.
   - `_breakpoints.css` — Desktop/tablet/mobile collapse thresholds (`1024px`, `768px`).
   - `_motion.css` — Crisp transitions (`--motion-duration-fast/base/slow`).
3. **Standalone Extracted Tokens (`framework/css/tokens.css` & `vib-compat.css`)**:
   - Exposes `--tx-*` primary semantic vars (plus `--height-*`, `--width-*`, `--space-*`, `--text-*`, `--text-on-accent`, `--modal-backdrop-bg`, `--focus-outline-color`, `--selection-bg/text`), with `0` undefined references inside `framework/css/tailix.min.css` (`43,199 B`).
   - `framework/css/vib-compat.css` (`7,540 B`) maps `.vib-*` layout, card, button, input, badge, alert, and table classes onto `--tx-*` tokens with `0` hardcoded hexes and `0` shadows.

---

## 2. Theme Parity & Flat Geometry Rules (Verified Invariant)
- Switching between `data-theme="dark"` and `data-theme="light"` changes **only colors** (backgrounds, borders, foreground text, soft status tints) — never font sizes, heights, spacing, border radius, or shadows.
- Setting `html[data-radius="sharp"]` (or `"flat"` / `"0"`) switches `--radius-xs` through `--radius-pill` to `0rem` across both `Sandbox/` and `framework/`, while keeping `.tx-spinner` circular.
- Arbitrary inline hex utility classes (like `bg-[#635BFF]`) and drop-shadows (`shadow-sm`) are forbidden; use semantic CSS variables or `.tx-*` / `.vib-*` token classes.
- For SVG icons using stroke attributes, always use standard HTML `stroke-width="1.5"` or `stroke-width="var(--icon-stroke)"` (never Tailwind `stroke-[var(--icon-stroke)]`, which emits `stroke: 1.5` instead of `stroke-width`).
