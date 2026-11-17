# Baseline Freeze Snapshot — Pre-Update State (`2026-11-17`)

> **Freeze Status**: **LOCKED** (Zero source edits applied prior to Phase 01 approval)  
> **Reference Forensic Audit**: `notes/planning/FORENSIC_AUDIT_REPORT.md`  
> **Timestamp**: `2026-11-17T13:33:54-08:00`

---

## 1. Frozen Baseline Inventory & Cryptographic Fingerprints

| File Path | Size (Bytes) | SHA256 (Prefix 16 hex) | Role in Baseline | Verified Condition |
|---|---:|---|---|---|
| `package.json` | 467 | `077e2d608c732556` | Sandbox Express server config (`v2.2.0`) | Clean |
| `server.js` | 704 | `1218433b5bcee450` | Static server + `/` redirect + 404 fallback | Clean (404 uses static `Sandbox/pages/404.html`) |
| `DESIGN_SYSTEM.md` | 8,252 | `a01a7d1244252995` | UI Architecture rules | Stale (`L35` shows `v2.1.2`, pre-`shell-manager` HTML) |
| `framework/css/tokens.css` | 11,395 | `4575e285518f9421` | Standalone Dark/Light token engine (`344` lines) | Missing Light overrides for `--focus-outline-color`, `--selection-*`; `44` unused tokens |
| `framework/css/tailix.css` | 30,903 | `7d536ea7772c86b2` | Standalone `.tx-*` CSS (`1,325` lines, `175` classes) | `#FFFFFF` ×4, `rgba(8,11,17,0.72)`, `blur(8px)`, `font-weight-bold`, mobile inline sidebar |
| `framework/css/tailix.min.css` | 33,756 | `8558621c9b60b8af` | Bundled standalone CSS | Matches unminified classes; carries same CSS defects |
| `framework/js/tailix.js` | 34,228 | `ac3e77d032745e91` | Zero-dep JS runtime (`963` lines) | Dropdown early-return bug, no modal Tab trap, table sort/pagination gaps |
| `framework/js/tailix.min.js` | 24,781 | `2ebf59c381d75233` | Minified JS runtime | Mirrors `tailix.js` bugs |
| `framework/examples/static.html` | 16,026 | `0224e54e69a953ea` | Standalone hub example (`299` lines) | Uses inline SVG + `Tailix` |
| `Sandbox/index.html` | 19,982 | `46a5532049b2c83a` | Main overview page | Static shell, `8× stroke-[var(--icon-stroke)]`, `140` arbitrary TW classes |
| `Sandbox/pages/cards.html` | 5,535 | `2bd082e0ee7b2559` | Baseline component playground | `L6` mojibake (`â€”`), static shell |
| `Sandbox/pages/settings.html` | 3,980 | `ef944eb41060977d` | Settings page | **CORRUPTED** (`L1–2` tool header, `L92` empty `<main>`, `width="28"`) |
| `Sandbox/pages/plugins.html` | 19,079 | `0d17d2f2db57bb9c` | Plugins module | `1` of `2` dynamic `data-vib-shell` pages |
| `Sandbox/pages/forms/settings-components.js` | 14,402 | `1aab753a869e7feb` | Settings section registry | **BROKEN** (`6` empty modules, `showToast` undefined, mojibake, `stroke-[var(--icon-stroke)]`) |
| `Sandbox/assets/css/vibtools-theme.css` | 10,110 | `5303ff40b670a6ca` | 8-module token aggregator | Imports `_typography` (`Inter` first) & `_radius` (`3px–9999px`) |
| `Sandbox/css/vibtools-sandbox.css` | 142,886 | `82d731d6119cf3b7` | Monolithic Sandbox CSS (`2,869` lines, `431` `.vib-*`) | Triple `:root` rewrite, `270` hexes (`75` >= L330 without Light overrides), `46` bold weights |
| `Sandbox/css/sandbox-only.css` | 2,180 | `055ca854ae134059` | Sandbox layout helpers | `L33` `box-shadow: 0 0 0 2px ...` violation |
| `Sandbox/js/tailwind-config.js` | 7,345 | `b6f77961d0c22669` | Sandbox CDN config (`--vib-*`) | Conflicts with `design-tokens/vibtools.tailwind-cdn.config.js` |
| `Sandbox/js/sandbox-nav.js` | 22,035 | `2920673bf7683058` | Legacy static shell controller | No theme toggle, no sidebar collapse |
| `Sandbox/js/framework/shell-manager.js` | 19,654 | `17987e1e1c144479` | Dynamic shell (`27` links, `5` groups) | Only active on `_template.html` & `plugins.html` |
| `design-tokens/vibtools.compact.tokens.json` | 40,363 | `61cbba6fa13a2fe1` | Token JSON spec | Font stack `Inter` first; radius mismatch |
| `design-tokens/vibtools.tailwind-cdn.config.js` | 6,431 | `af401632ffce32` | Official Tailwind mirror (`--bg-*`) | Diverges from `Sandbox/js/tailwind-config.js`; stamped `v2.1.2` |
| `validation/no_growth_check.py` | 1,665 | `4d29751fc0a93167` | Compact cap check | Checks JSON only, ignores CSS/HTML |
| `validation/sandbox_static_check.py` | 4,445 | `d6b72fd8baf220d6` | Static HTML/CSS check | Misses sub-fragments, `framework/`, mojibake, corrupted `settings.html` |

---

## 2. Baseline ↔ Forensic Audit Match Verification

- **Root Changelogs**: `44` files (`CHANGELOG_v1_2.md` – `CHANGELOG_v2_2_0.md`); `8` header mismatches verified.
- **Sandbox HTML Count**: `28` top-level (`Sandbox/index.html` + `27` in `Sandbox/pages/*.html`) + `34` fragment partials (`cards/`, `forms/`, `Navigation/`, `upload/`) = `62` HTML files.
- **Standalone Framework Count**: `framework/` contains `14` files across `framework/`, `framework/css/`, `framework/js/`, `framework/examples/` (including `README.md` + `MANIFEST.md` per folder).
- **Validation State**: `validation/CHECKSUMS.sha256` (`264` entries) has `203` matching, **`59` mismatched**, and **`2` missing** files (`_surfaces.css`, `_tokens.css`).
- **PWA / Tests Status**: `0` PWA files (`manifest.json`, `sw.js`) and `0` automated test files (`tests/` absent).

All subsequent phases **MUST** verify starting state against this frozen baseline and preserve unrelated working pages/APIs untouched under strict **Scope Lock**.
