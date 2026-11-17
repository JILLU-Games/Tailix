---
name: project-memory-sync
description: Keep the project memory aligned with the repo state and ensure MEMORY.md is updated whenever a meaningful change occurs.
---

# Project Memory Sync

Use this skill whenever the repository changes in a way that affects the working assumptions, architecture, runtime, documentation, validation flow, or design-system state.

## Core responsibility

Treat [MEMORY.md](MEMORY.md) as the canonical working summary for this repository. When a meaningful change occurs, update it before concluding the work or handing off context.

## Required behavior

- Preserve the project’s frozen/static UI baseline unless the user explicitly asks for a broader change.
- Keep documentation, runtime behavior, and memory notes aligned with one another.
- Record only meaningful repository state changes, not broad speculative notes.
- Prefer concise, factual bullets over long narrative updates.
- If a change touches the stack, architecture, folder responsibilities, validation flow, token system, or feature module structure, update memory immediately.

## Update workflow

1. Identify whether the change is material.
   - Stack or dependency changes
   - Architecture or folder responsibility changes
   - Feature or UI flow changes
   - Naming conventions or token system changes
   - Validation flow or documentation changes
2. Update [MEMORY.md](MEMORY.md) with the relevant fact, status, or new working assumption.
3. Keep the memory change short and directly tied to the repo’s current state.
4. If a task is complete, ensure memory is not stale before finalizing.

## Scope

This project is a static front-end UI sandbox, not a full application backend. The memory file should reinforce that baseline and avoid introducing app-architecture assumptions that do not match the repository reality.

## Guardrails

- Do not redesign the project or migrate the stack without explicit permission.
- Do not add unrelated cleanup or broad audits when the task is narrow.
- Do not leave memory stale after edits, bug fixes, or feature work.
- Keep the memory summary anchored in the repository’s actual structure and current version baseline.

## Quick checklist

Before finishing any task, ask:

- Did this change affect the runtime, docs, stack, tokens, or repo structure?
- If yes, is [MEMORY.md](MEMORY.md) updated?
- Is the new note concise and consistent with the project’s frozen baseline?
