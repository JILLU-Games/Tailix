# Documentation Directory — A-Z System & User Guidelines

## Purpose & Scope
The `docs/` directory is the comprehensive, official documentation repository for the project. It provides complete, verified, real-world operational guidelines for both **end-users** and **developers**.

## Core Directives
1. **Zero Guesswork / No Hallucinations**: Every guideline, selector, property, and interaction documented here must be 100% verified against the real codebase. Speculative or assumed information is strictly prohibited.
2. **Exhaustive Detail**: Document all features, buttons, controls, and workflows without skipping or omitting steps.
3. **Dual Audience Structure**:
   - **User Guides (`user-guide/`)**: How to navigate, use dashboards, trigger actions, filter data tables, and interact with all pages.
   - **Developer Guides (`developer-guide/`)**: How to write token-compliant components, extend themes, use Tailwind CDN classes, and wire event bus interactions.
   - **Freeze Baselines (`00_*` to `09_*`)**: Historical architectural locks and frozen size guardrails.

## Directory Structure
- `user-guide/` — A-Z guide for using the web application, pages, and interactive UI controls.
- `developer-guide/` — Developer guidelines for extending tokens, components, and layout shells.
- `00_SCOPE_LOCK_COMPACT.md` through `09_FINAL_LOCK_SUMMARY_v1_3.md` — Frozen baseline specifications and size guardrails.
