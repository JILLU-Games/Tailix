#!/usr/bin/env python3
"""Static checks for VibTools v2.1.2 Single Token Foundation Audit Freeze package."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
VERSION = 'v2.1.2'


def require(path_or_text, needle, label):
    text = path_or_text.read_text(encoding='utf-8') if isinstance(path_or_text, Path) else path_or_text
    if needle not in text:
        raise SystemExit(f'FAIL: missing {label}: {needle}')

required_files = [
    'Sandbox/assets/css/foundation/_tokens.css',
    'Sandbox/assets/css/foundation/_typography.css',
    'Sandbox/assets/css/foundation/_spacing.css',
    'Sandbox/assets/css/foundation/_surfaces.css',
    'Sandbox/assets/css/foundation/_motion.css',
    'Sandbox/assets/css/vibtools-theme.css',
    'CHANGELOG_v2_1_0.md',
    'CHANGELOG_v2_1_1.md',
    'CHANGELOG_v2_1_2.md',
    'forensic-audit/FORENSIC_AUDIT_REPORT_v2_1_0.md',
    'forensic-audit/FORENSIC_AUDIT_REPORT_v2_1_1.md',
    'forensic-audit/FORENSIC_AUDIT_REPORT_v2_1_2.md',
    'forensic-audit/DOCUMENT_MISMATCH_AUDIT_v2_1_0.json',
    'forensic-audit/DOCUMENT_MISMATCH_AUDIT_v2_1_1.json',
]
for rel in required_files:
    if not (ROOT / rel).exists():
        raise SystemExit(f'FAIL: required file missing: {rel}')

# Version sync in runtime badges
for html in [ROOT/'Sandbox/index.html', *sorted((ROOT/'Sandbox/pages').glob('*.html'))]:
    require(html, VERSION, f'{html.relative_to(ROOT)} version badge/title sync')
    if 'vibtools-sandbox.css' in html.read_text(encoding='utf-8'):
        require(html, 'vibtools-theme.css', f'{html.relative_to(ROOT)} theme link')

navjs = ROOT/'Sandbox/js/sandbox-nav.js'
require(navjs, "var VERSION = 'v2.1.2';", 'runtime JS version')

css = (ROOT/'Sandbox/css/vibtools-sandbox.css').read_text(encoding='utf-8')
for needle in [
    '@import url("../assets/css/vibtools-theme.css")',
    'v2.1.2 Single Token Foundation Engine Enforcement',
    '--vib-surface: var(--bg-surface-card)',
    '--vib-input-focus-border: var(--border-focus)',
    '--vib-nav-active-border: var(--border-focus)',
    '--vib-table-toolbar-bg: var(--component-card-bg)',
    'v2.1.2 Foundation Audit Alias Completion',
    '--vib-active-bg: var(--component-active-bg)',
]:
    if needle not in css:
        raise SystemExit(f'FAIL: CSS foundation alias missing: {needle}')

tokens = (ROOT/'Sandbox/assets/css/foundation/_tokens.css').read_text(encoding='utf-8')
for needle in ['--color-cyan-500', '--bg-surface-card', '--border-focus', '--text-accent', '--component-card-bg', '--component-active-bg', '--state-success-bg', '--upload-progress-fill']:
    if needle not in tokens:
        raise SystemExit(f'FAIL: foundation token missing: {needle}')

theme = (ROOT/'Sandbox/assets/css/vibtools-theme.css').read_text(encoding='utf-8')
for needle in ["@import url('./foundation/_tokens.css')", '.ui-card', '.ui-input', '.ui-btn', '.ui-badge', '--vib-secondary: var(--text-accent)', 'v2.1.2 expanded legacy alias bridge']:
    if needle not in theme:
        raise SystemExit(f'FAIL: theme aggregator contract missing: {needle}')

config = (ROOT/'Sandbox/js/tailwind-config.js').read_text(encoding='utf-8')
for needle in ['v2.1.2 single token foundation engine baseline', "ui: {", "bgApp: 'var(--bg-app)'", "textAccent: 'var(--text-accent)'", "text: 'var(--text-primary)'", "boxShadow: { 'vib-focus': 'var(--shadow-focus)' }"]:
    if needle not in config:
        raise SystemExit(f'FAIL: Tailwind foundation alias missing: {needle}')

j = json.loads((ROOT/'design-tokens/vibtools.compact.tokens.json').read_text(encoding='utf-8'))
if j.get('currentRelease') != 'v2.1.2 Single Token Foundation Audit Freeze':
    raise SystemExit('FAIL: token JSON currentRelease mismatch')
if 'singleTokenFoundationEngine' not in j:
    raise SystemExit('FAIL: token JSON missing singleTokenFoundationEngine contract')

print('PASS: v2.1.2 single token foundation audit freeze verified')
