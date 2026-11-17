# Copilot Instructions for VibTools Web UI

## Project context

This repository is a frozen, static web UI design and validation sandbox for VibTools. It is not a standard full-stack application. The active runtime is in `Sandbox/`, with theme and token foundations defined in `Sandbox/assets/css/` and supporting design docs in `docs/`, `components/`, and `design-tokens/`.

The project is a v2.2.0 baseline and should be treated as a documentation-aligned, runtime-frozen UI system unless the user explicitly requests a broader change.

## Core working rules

1. Respect the existing stack and architecture.
   - This project is based on static HTML, CSS, and vanilla JavaScript.
   - Do not introduce a framework, backend, or app architecture migration unless explicitly requested.

2. Preserve the frozen design system.
   - Keep the existing visual structure, component names, token foundation, and CSS-variable architecture intact.
   - Avoid unrelated redesigns or broad cleanup.

3. Follow the smallest-correct-change principle.
   - Make only the file and logic changes necessary for the requested task.
   - Do not expand scope into unrelated refactors or audits.

4. Validate relevant runtime behavior.
   - Prefer the repo’s existing validation scripts and simple syntax checks before concluding a change.
   - If no direct validation exists for the task, keep the change narrow and explain the limitation clearly.

5. Keep memory and context current.
   - Treat `MEMORY.md` as the project’s canonical working memory.
   - Update it whenever a meaningful change occurs.

## Mandatory memory-update rule

CRITICAL RULE: Whenever a change, update, bug fix, or new feature is implemented in this project during our conversation, you (the AI) must automatically prompt me to update the `MEMORY.md` file, or directly write/suggest the exact markdown updates needed to keep the project memory 100% up-to-date in real-time.

## Required conversation behavior

- Before finalizing work, check whether the change materially affects any of the following:
  - stack or dependencies
  - architecture or folder responsibilities
  - feature modules or UI flows
  - naming conventions or token system
  - validation flow or documentation
- If yes, update the memory file or explicitly propose the exact markdown additions/edits needed.
- Do not silently leave project memory stale after a change.

## Documentation and AI hygiene

- Prefer the existing project docs and runtime conventions over inventing a new pattern.
- Keep explanations grounded in the actual repository structure and versioned baseline.
- If a change touches the visual system, token foundation, or runtime behavior, confirm alignment with the baseline and docs before finalizing.

## Stop conditions

- Stop once the user-requested task is complete and verified.
- Avoid unrelated exploration, broad audits, or speculative fixes.
- If an unrelated issue blocks the task, mention it briefly and do not fix it unless explicitly required.
