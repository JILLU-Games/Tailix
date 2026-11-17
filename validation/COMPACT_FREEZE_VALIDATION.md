# Compact Freeze Validation — v2.2.0

Baseline: `VibTools_WEB_UI_v2.2.0.zip`

## Required validation commands

```bash
python3 validation/no_growth_check.py
python3 validation/sandbox_static_check.py
node --check Sandbox/js/sandbox-nav.js
node --check Sandbox/js/tailwind-config.js
```

## Required packaging checks

- ZIP root extracts directly into project root.
- No wrapper parent folder.
- No nested ZIP package.
- No missing local page/module/file references.

## Required documentation checks

- Active freeze docs state v2.2.0 as the current baseline.
- Component contracts state v2.2.0.
- AI/developer handoff states v2.2.0.
- Design-token JSON metadata states v2.2.0-compatible current release.
- Validation/checksum records are regenerated after documentation updates.
