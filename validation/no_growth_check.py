#!/usr/bin/env python3
"""Simple guardrail check for VibTools compact freeze token JSON."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
tokens = json.loads((ROOT / "design-tokens" / "vibtools.compact.tokens.json").read_text())

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

print("PASS: all compact defaults are <= source/reference caps")
