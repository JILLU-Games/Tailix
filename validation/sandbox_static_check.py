#!/usr/bin/env python3
"""Static checks for VibTools v2.2.0 8-Module Token Foundation Baseline."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
VERSION = 'v2.2.0'


def require(path_or_text, needle, label):
    text = path_or_text.read_text(encoding='utf-8') if isinstance(path_or_text, Path) else path_or_text
    if needle not in text:
        raise SystemExit(f'FAIL: missing {label}: {needle}')


foundation_modules = [
    '_colors.css',
    '_typography.css',
    '_spacing.css',
    '_radius.css',
    '_shadows.css',
    '_icons.css',
    '_breakpoints.css',
    '_motion.css',
]

required_files = [
    *(f'Sandbox/assets/css/foundation/{mod}' for mod in foundation_modules),
    'Sandbox/assets/css/vibtools-theme.css',
    'Sandbox/css/vibtools-sandbox.css',
    'Sandbox/js/tailwind-config.js',
    'Sandbox/js/sandbox-nav.js',
    'CHANGELOG_v2_2_0.md',
    'DESIGN_SYSTEM_GUIDE.md',
]
for rel in required_files:
    if not (ROOT / rel).exists():
        raise SystemExit(f'FAIL: required file missing: {rel}')

# Version sync in runtime badges and theme links
for html in [ROOT / 'Sandbox/index.html', *sorted((ROOT / 'Sandbox/pages').glob('*.html'))]:
    text = html.read_text(encoding='utf-8')
    require(text, VERSION, f'{html.relative_to(ROOT)} version badge/title sync')
    if '<span class="vib-badge">v2.1.2</span>' in text or 'class="vib-badge">v2.1.2</span>' in text:
        raise SystemExit(f'FAIL: stale v2.1.2 badge remains in {html.relative_to(ROOT)}')
    if 'vibtools-sandbox.css' in text:
        require(text, 'vibtools-theme.css', f'{html.relative_to(ROOT)} theme link')

navjs = ROOT / 'Sandbox/js/sandbox-nav.js'
require(navjs, "var VERSION = 'v2.2.0';", 'runtime JS version')

css = (ROOT / 'Sandbox/css/vibtools-sandbox.css').read_text(encoding='utf-8')
for needle in [
    '@import url("../assets/css/vibtools-theme.css")',
    '--vib-surface: var(--bg-surface-card)',
    '--vib-input-focus-border: var(--border-focus)',
    '--vib-nav-active-border: var(--border-focus)',
    '--vib-table-toolbar-bg: var(--component-card-bg)',
    '--vib-active-bg: var(--component-active-bg)',
    '--vib-topbar-bg:',
    'html[data-theme="light"]',
    '.vib-btn-primary',
]:
    if needle not in css:
        raise SystemExit(f'FAIL: CSS foundation alias missing: {needle}')

colors = (ROOT / 'Sandbox/assets/css/foundation/_colors.css').read_text(encoding='utf-8')
for needle in [
    '--color-cyan-500',
    '--bg-surface-card',
    '--border-focus',
    '--text-accent',
    '--component-card-bg',
    '--component-active-bg',
    '--state-success-bg',
    '--upload-progress-fill',
    'html[data-theme="light"]',
]:
    if needle not in colors:
        raise SystemExit(f'FAIL: foundation color token missing: {needle}')

theme = (ROOT / 'Sandbox/assets/css/vibtools-theme.css').read_text(encoding='utf-8')
for mod in foundation_modules:
    require(theme, f"@import url('./foundation/{mod}')", f'theme module import {mod}')
for needle in [
    '.ui-card',
    '.ui-input',
    '.ui-btn',
    '.ui-badge',
    '--vib-secondary: var(--text-accent)',
    '--vib-radius-full: var(--radius-pill)',
]:
    if needle not in theme:
        raise SystemExit(f'FAIL: theme aggregator contract missing: {needle}')

config = (ROOT / 'Sandbox/js/tailwind-config.js').read_text(encoding='utf-8')
for needle in [
    'v2.2.0 single token foundation engine baseline',
    'ui: {',
    "bgApp: 'var(--vib-background)'",
    "textAccent: 'var(--vib-secondary)'",
    "text: 'var(--vib-text)'",
    "surfaceSoft: 'var(--vib-surface-soft)'",
    "surfaceHover: 'var(--vib-surface-hover)'",
    "textMuted: 'var(--vib-muted)'",
    "boxShadow: { 'vib-focus': 'var(--vib-focus)' }",
]:
    if needle not in config:
        raise SystemExit(f'FAIL: Tailwind foundation alias missing: {needle}')

# Phase 03 regression checks across top-level HTMLs, 34 sub-fragments, JS & Light-mode tokens
for needle in ['--topbar-bg', '--modal-backdrop-bg', '--text-on-accent']:
    require(colors, needle, f'_colors.css light/dark token {needle}')

mojibake_markers = ['â€”', 'â€¢', 'â€“', 'Ã']
for html in [ROOT / 'Sandbox/index.html', *sorted((ROOT / 'Sandbox/pages').glob('*.html'))]:
    raw = html.read_text(encoding='utf-8')
    rel = html.relative_to(ROOT)
    if raw.startswith('\ufeff'):
        raise SystemExit(f'FAIL: UTF-8 BOM present in {rel}')
    if 'format: <line_number>' in raw or 'shows the entire, complete file contents' in raw:
        raise SystemExit(f'FAIL: corrupted pasted wrapper text in {rel}')
    for m in mojibake_markers:
        if m in raw:
            raise SystemExit(f'FAIL: UTF-8 mojibake ({m}) in {rel}')
    if 'stroke-[var(--icon-stroke)]' in raw:
        raise SystemExit(f'FAIL: broken SVG stroke-[var(--icon-stroke)] class in {rel}')
    if 'font-semibold' in raw:
        raise SystemExit(f'FAIL: forbidden font-semibold utility in {rel}')
    if 'width="28"' in raw or 'height="28"' in raw:
        raise SystemExit(f'FAIL: hardcoded 28px icon attribute in {rel}')
    require(raw, 'sandbox-nav.js', f'{rel} sandbox-nav.js script')

sub_fragments = sorted((ROOT / 'Sandbox/pages').glob('*/*.html'))
if len(sub_fragments) < 34:
    raise SystemExit(f'FAIL: expected >= 34 partial HTML snippet fragments, found {len(sub_fragments)}')
for frag in sub_fragments:
    raw = frag.read_text(encoding='utf-8')
    rel = frag.relative_to(ROOT)
    if not raw.strip():
        raise SystemExit(f'FAIL: empty snippet fragment {rel}')
    if raw.startswith('\ufeff'):
        raise SystemExit(f'FAIL: UTF-8 BOM present in snippet {rel}')
    for m in mojibake_markers:
        if m in raw:
            raise SystemExit(f'FAIL: UTF-8 mojibake ({m}) in snippet {rel}')
    if 'stroke-[var(--icon-stroke)]' in raw or 'font-semibold' in raw:
        raise SystemExit(f'FAIL: invalid utility class in snippet {rel}')

for js_rel in [
    'Sandbox/js/sandbox-nav.js',
    'Sandbox/js/framework/shell-manager.js',
    'Sandbox/js/framework/table-controller.js',
    'Sandbox/js/components/toast-manager.js',
    'Sandbox/js/components/modal-manager.js',
    'Sandbox/pages/forms/settings-components.js',
]:
    js_text = (ROOT / js_rel).read_text(encoding='utf-8')
    if 'stroke-[var(--icon-stroke)]' in js_text:
        raise SystemExit(f'FAIL: broken SVG stroke-[var(--icon-stroke)] class in {js_rel}')
    if 'font-semibold' in js_text:
        raise SystemExit(f'FAIL: forbidden font-semibold utility in {js_rel}')
    if 'showToast(' in js_text:
        raise SystemExit(f'FAIL: undefined showToast( call in {js_rel}')

nav_text = navjs.read_text(encoding='utf-8')
for needle in ['LS_KEY_THEME', 'vib-theme-toggle', 'vib-sidebar-toggle', 'Users', 'Billing', 'Plugins', '404 Error', '500 Error']:
    require(nav_text, needle, f'sandbox-nav.js unified shell/nav marker {needle}')

j = json.loads((ROOT / 'design-tokens/vibtools.compact.tokens.json').read_text(encoding='utf-8'))
if j.get('version') != '2.2.0':
    raise SystemExit('FAIL: token JSON version mismatch (expected 2.2.0)')
if 'v2.2.0' not in str(j.get('currentRelease', '')):
    raise SystemExit('FAIL: token JSON currentRelease mismatch')
engine = j.get('singleTokenFoundationEngine', {})
if engine.get('version') != 'v2.2.0' or engine.get('files') != foundation_modules:
    raise SystemExit('FAIL: token JSON singleTokenFoundationEngine mismatch')

print('PASS: v2.2.0 8-module token foundation baseline verified')

