#!/usr/bin/env python3
"""Guardrail check for VibTools compact freeze token JSON and actual CSS rules."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
tokens = json.loads((ROOT / "design-tokens" / "vibtools.compact.tokens.json").read_text(encoding="utf-8"))

layout = tokens["compactLayoutPx"]
type_scale = tokens["compactTypeScalePx"]

checks = [
    ("headerHeightDefault", layout["headerHeightDefault"], layout["headerHeightMax"]),
    ("buttonHeightDefault", layout["buttonHeightDefault"], layout["buttonHeightMax"]),
    ("inputHeightDefault", layout["inputHeightDefault"], layout["inputHeightMax"]),
    ("cardPaddingDefault", layout["cardPaddingDefault"], layout["cardPaddingMax"]),
    ("sidebarDefault", layout["sidebarDefault"], layout["sidebarMax"]),
    ("tocDefault", layout["tocDefault"], layout["tocMax"]),
    ("avatarDefault", layout["avatarDefault"], layout["avatarMax"]),
    ("logoWordmarkDefault", layout["logoWordmarkDefault"], layout["logoWordmarkMax"]),
    ("heroDisplayDefault", type_scale["heroDisplayDefault"], type_scale["heroDisplayMax"]),
    ("pageH1Default", type_scale["pageH1Default"], type_scale["pageH1Max"]),
    ("h2Default", type_scale["h2Default"], type_scale["h2Max"]),
    ("h3Default", type_scale["h3Default"], type_scale["h3Max"]),
    ("bodyDefault", type_scale["bodyDefault"], type_scale["bodyMax"]),
]

violations = [(name, value, cap) for name, value, cap in checks if value > cap]
if violations:
    for name, value, cap in violations:
        print(f"FAIL {name}: {value} > {cap}")
    raise SystemExit(1)

# Real CSS guardrail checks (Phase 03 upgrade)
css_targets = [
    ROOT / "Sandbox/css/vibtools-sandbox.css",
    ROOT / "Sandbox/css/sandbox-only.css",
]
for css_file in css_targets:
    text = css_file.read_text(encoding="utf-8")
    rel = css_file.relative_to(ROOT)
    hexes = re.findall(r"#[0-9a-fA-F]{3,8}\b", text)
    if hexes:
        raise SystemExit(f"FAIL {rel}: hardcoded hex colors found: {hexes[:5]}")
    for line in text.splitlines():
        if "box-shadow:" in line and "box-shadow: none" not in line and "var(--vib-focus)" not in line:
            raise SystemExit(f"FAIL {rel}: forbidden box-shadow: {line.strip()}")
        if re.search(r"font-weight:\s*(600|650|700|750|800|bold)\b", line):
            raise SystemExit(f"FAIL {rel}: forbidden heavy font-weight: {line.strip()}")

typo_css = (ROOT / "Sandbox/assets/css/foundation/_typography.css").read_text(encoding="utf-8")
if re.search(r"--font-sans:\s*['\"]?Inter\b", typo_css):
    raise SystemExit("FAIL _typography.css: --font-sans must use Segoe UI stack, not Inter")

print("PASS: all compact defaults <= caps and Sandbox CSS bounds verified")

