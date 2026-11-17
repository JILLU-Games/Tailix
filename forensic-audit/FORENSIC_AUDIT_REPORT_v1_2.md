# Forensic Audit Report — VibTools Web UI Freeze v1.2

## Result

The v1.1 baseline package was audited against live websites, GitHub source files, uploaded ZIP archives and the uploaded brand PDF. v1.2 fixes the remaining design-document mismatches by freezing a **Tailwind CDN compact no-growth** implementation layer.

## Canonical matches

- Core colors match the PDF and `vibtools.github.io`.
- Typography remains Inter + JetBrains Mono.
- Cards remain dark, flat, bordered, 12px radius, minimal/no shadow.
- Links/focus remain cyan `#38BDF8`.
- Primary actions remain `#2563EB`.
- YGIT/docs deeper canvas remains an explicit variant.
- Account portal dashboard shell remains an explicit variant.
- Marketing source remains a variant, not a default.

## Key v1.2 fixes

| Area | Fix |
|---|---|
| Tailwind CDN | Added CDN config, preview and component contracts |
| Oversized hero | Compact defaults reduced; large source values moved to max-only |
| Header | 56px default, 64px max |
| Buttons | 36px default, 44px max |
| Cards | 16px padding default |
| Sidebar | 240px default |
| Logo | 128px wordmark default |
| Avatar | 28px default |
| Motion | 120ms default, 150ms max |
| Marketing source | Restricted to marketing-only emphasis |
| Space Grotesk | Removed from canonical global font rules |

## Validation

Source-token and document-level match: PASS.  
Compact no-growth size policy: PASS.  
ZIP integrity: PASS after packaging.

## Limitation

Live rendered browser pixel-diff screenshots were not produced in this environment. The audit is based on live parsed website structure, GitHub source code, uploaded source ZIPs and uploaded PDF/page renders.
