# Project Architecture

## Purpose
This folder documents the high-level system architecture of the application:
1. **8-Module Token Foundation Engine**:
   - `_colors.css` -> `_typography.css` -> `_spacing.css` -> `_radius.css` -> `_shadows.css` -> `_icons.css` -> `_breakpoints.css` -> `_motion.css`
   - Cascaded into `vibtools-theme.css` and bridged via `vibtools-sandbox.css`.
2. **Client Runtime & Shell Injection**:
   - `shell-manager.js` dynamic layout engine (opt-in via `data-vib-shell` on `<body>`).
   - `event-bus.js` global pub/sub channel system for toasts, modals, and navigation.
3. **Tailwind CDN Utility Layer**:
   - `tailwind-config.js` maps CSS Custom Properties to semantic Tailwind classes with zero arbitrary values.
4. **Server Runtime Architecture**:
   - Express server (`server.js`) binding to `0.0.0.0:3000` with static directory serving and routing fallbacks.
