# Project Directory — Complete System Architecture & Deep Technical Reference

## Purpose & Vision
The `project/` directory is the permanent, living technical brain of the application committed to Git. It contains the exhaustive anatomical breakdown ("sokol narivuri, khutinati logs, and features") of the entire codebase.

Unlike ephemeral notes, `project/` stays in sync with every single code change, documenting:
1. **Functions & Controllers**: Every function, what it does, inputs/outputs, caller references, and implementation location.
2. **File Mapping**: Every file, its exact path, why it exists, and its dependencies.
3. **Setup & Runtime**: How each subsystem is initialized, configured, and bound.
4. **Logic Tracing**: Where business logic, token resolution, and event pipelines reside.
5. **Module Registry**: Why each module was chosen, where it is used, and what depends on it.
6. **Chronological Update & Fix Logs**: Exact step-by-step records of every fix/feature implemented with timestamps.

## Directory Structure
- `architecture/` — High-level technical architecture, token foundation cascade, shell manager injection, and event pipeline.
- `modules/` — Module-by-module breakdown of all CSS, JS, and foundation components.
- `functions/` — Comprehensive function registry (inputs, outputs, purpose, call paths).
- `pages/` — Detailed catalog of all application pages, structure, layout, and component bindings.
- `setup/` — Environment setup, Node/Express dev server configuration, port binding, and build lifecycle.
- `logs/` — Chronological record of all updates, bug fixes, phase completions, and timestamped changes.

## Maintenance Mandate for AI Agents & Developers
- Whenever any code, style, or configuration is added, edited, or fixed:
  1. Update the corresponding file in `project/` immediately.
  2. Document the logic change, function signatures, and file references.
  3. Add an entry into `project/logs/` documenting what was changed, why, and when.
- Never allow `project/` to become stale or desynchronized from the actual codebase.
