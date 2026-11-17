# Changelog v1.4.1 — Surface Color System Repair

- Baseline: `VibTools_WEB_UI_v1.4.0`.
- Scope: Sandbox Web app Card / Section / Form / Table / Container Background & Surface Color System only, plus visible app-version mismatch correction.
- Retained main canvas `#0D1117`, sidebar/deep surface `#0B0F17`, card/panel surface `#161B22`, and nested/subtle panel surface `#11161D`.
- Updated form-control inset fill from `#11161D` to `#0B0F17` for `.vib-input`, `.vib-select`, and `.vib-textarea` through `--vib-field`.
- Updated form-control hover/focus fill from `#161B22` to `#11161D` through `--vib-field-hover`.
- Kept `.vib-card-subtle`, `.vib-code-inner`, `.vib-auth-context`, and `.vib-field-surface` on the solid inset panel token `#11161D`.
- Updated table header background from `#11161D` to `rgba(13, 17, 23, .60)` and table header divider to `#30363D`.
- Updated table row hover from `rgba(33, 38, 45, .74)` to `rgba(255, 255, 255, .03)`.
- Solidified alert feedback background from `rgba(17, 22, 29, .78)` to `#11161D`.
- Added semantic left border color for `.vib-alert[data-state]` while retaining compact alert geometry.
- Synchronized visible app version from `v1.4.0` to `v1.4.1` through static included HTML pages and runtime normalization in `sandbox-nav.js`.
- Preserved routes, workflow, layout architecture, sidebar width, topbar height, typography scale, spacing/density system, radius system, card/button dimensions, Tailwind CDN architecture, shadows/gradients policy and external dependency policy.
