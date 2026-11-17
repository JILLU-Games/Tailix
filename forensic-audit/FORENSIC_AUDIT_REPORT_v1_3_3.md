# Forensic Audit Report — v1.3.3 Sandbox Typography/Density Repair

## Baseline audited

`VibTools_WEB_UI_v1.3.2.zip` was treated as the official baseline freeze.

## Scope lock

Allowed scope only:

- Sandbox Web app UI/UX text color.
- Font size, font weight, line height and hierarchy.
- Section, card, page-header, table and content spacing/density.
- Documents reflecting the updated sandbox design contract.

Not changed:

- Sandbox page list.
- Sandbox architecture.
- Tailwind CDN framework.
- Navigation workflow.
- Component names.
- File/folder architecture.
- Runtime behavior.
- Feature set.

## Source/reference basis

- `vibtools.github.io` source confirms exact brand colors, Inter, JetBrains Mono, border token and focus behavior.
- `ygit-schema` source confirms compact documentation scale and source caps.
- Uploaded Step-1 design report required density calibration without redesigning the app.

## Mismatches found in v1.3.2

- Some body/description text still read too close to primary text.
- Hero/page titles were still at the high end of the compact range.
- Several headings had heavier weight than required for compact developer-tool UI.
- Page-header description spacing used 12px where the Step-1 contract requested 6–8px.
- Global gaps used arbitrary 9px instead of the locked 4/6/8/10/12/16/18/24/32 spacing scale.
- Main shell content still had a slightly wide 12px side gutter from the sidebar.
- Typography token sheet still advertised older v1.3.1/v1.3.2 values.
- Dashboard stat values were compact in size but still too visually heavy.

## Fixes applied

- Normal content color: `#C9D1D9`.
- Source docs content token retained: `#D8DEE9` as `--vib-doc-content` / `textDocsContent`.
- Body: 13px / 1.46.
- Hero title: 24–26px / 1.18 / 700.
- H1: 22–24px / 1.18 / 700.
- H2: 16px / 1.28 / 650.
- H3: 14px / 1.34 / 650.
- Card title: 13px / 650.
- Button label: 12px.
- Metadata: 11px.
- Grid/component gap: 8px.
- Section spacing: 16px.
- Page-header description top spacing: 8px.
- Shell gutter: 10px.
- Docs layout columns: 168px / 720px / 156px.
- Dashboard stat weight: 650.
- Version labels: v1.3.3.

## Verification result

- HTML syntax/static link scan: PASS.
- Tailwind CDN link scan: PASS.
- Sandbox CSS link scan: PASS.
- Forbidden oversized Tailwind utility scan: PASS.
- Canonical color token presence: PASS.
- v1.3.3 compact fragment checks: PASS.
- ZIP root-relative layout: PASS.
- Nested ZIP check: PASS.

## Result

The sandbox remains the same visual validation app, but its typography hierarchy and spacing density now better match the locked Step-1 direction: GitHub Docs information density, Cloudflare-like restraint, GitLab-like compactness, and VibTools dark-first brand tokens.
