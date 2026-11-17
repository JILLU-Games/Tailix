# Agent Instructions and Behavioral Rules

The following rules dictate the required workflow and responsibilities for all AI agents working on this project. These are mandatory checks that MUST be performed during every development session.

## Core Rules

1. **Follow AI_INSTRUCTIONS.md**: You MUST read, understand, and strictly follow all guidelines present in `AI_INSTRUCTIONS.md`. It acts as the definitive behavioral manual for this repository.

2. **Real-time Memory Sync**: Every time an update, fix, or architectural change is made, you MUST immediately update the real-time AI memory documents (e.g., `MEMORY.md`, `MANIFEST.md`, `README.md`) to reflect the current state. The memory must never become stale.

3. **Changelog and Project Markdown Maintenance**: After every update or fix, you MUST update the project's changelog files and any relevant root-level markdown files to accurately describe the latest changes.

4. **Synchronize `docs/` Directory**: Every time a change is introduced that affects the design, tokens, components, or architecture, you MUST update all relevant documentation files inside the `docs/` directory to match the new implemented baseline. The documentation must always reflect the exact implemented state of the runtime.

5. **Strict Non-Destructive Scope Lock**: When adding, editing, or updating a feature on any page, you MUST strictly lock your scope to only the explicitly requested feature. The new or updated feature must perfectly match the existing design conventions and be integrated in the exact requested location. You MUST NOT remove, replace, or modify any existing features, UI sections, or layouts unless explicitly instructed to do so. All pre-existing features must remain completely unchanged and intact.

6. **Mandatory Sandbox Overview Linking**: Whenever a new page or module is created within the `Sandbox/` directory, it MUST immediately be linked and categorized within the Sandbox overview page (`Sandbox/index.html`). This ensures all pages remain accessible and discoverable.

7. **Strict Adherence to DESIGN_SYSTEM.md**: You MUST strictly and rigorously follow the rules defined in `DESIGN_SYSTEM.md` when creating, updating, or designing any page or component. All HTML structures, CSS tokens, and component rendering patterns must 100% mirror the approved architecture (as defined by the `cards.html` baseline). Hardcoding arbitrary tailwind values or deviating from the design system is STRICTLY PROHIBITED.

8. **Strict Factual Reporting (No Hallucinations/Guessing)**: At the end of every update, audit, or fix session, you MUST provide an exact, factual, and strictly accurate report of what was actually changed or accomplished. If any task is incomplete, broken, or missing, you MUST report it truthfully. You are strictly FORBIDDEN from guessing, assuming, or hallucinating data in your reports. If you cannot find the necessary data or verify a change, you MUST explicitly state that you could not find or verify it. Never fabricate or assume success without concrete factual evidence.
