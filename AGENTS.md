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

9. **Development-Time Planning & Notes Mandate (`notes/`)**:
   - The `notes/` directory is strictly reserved for development-time thinking, planning, and task execution notes.
   - **Before starting any update, change, or addition**, the agent MUST write a pre-execution report/plan inside `notes/` (under `notes/planning/` or `notes/sessions/`).
   - Step-by-step update and fix phase logs must be recorded during the task.
   - When an update/fix is completed, the agent MUST log what was implemented, how it was executed, and the exact timestamp.

10. **Living Project Anatomy & Technical Truth Mandate (`project/`)**:
   - The `project/` directory stays permanently committed in Git and serves as the exhaustive anatomical breakdown ("sokol narivuri, khutinati logs, and feature details") of the entire project.
   - With every code modification, feature addition, or fix, the agent MUST immediately update documentation inside `project/` in real-time.
   - This directory must exhaustively track:
     - Every function: what it does, parameter signatures, where it is implemented, and where/why it is called.
     - Every file: its exact location, purpose, and dependencies.
     - Every module: why it was used, where it is required, and how it is wired.
     - Every logic piece: exactly where it lives and its execution context.
     - Setup and runtime: how the system and each subsystem is initialized and configured.
     - Chronological update/fix phase logs and timestamps of implementation.

11. **Comprehensive A-Z User & Developer Guidelines Mandate (`docs/`)**:
   - The `docs/` directory stays permanently committed in Git and provides exhaustive, verified A-Z guidelines for using and developing the project.
   - Every feature, page, interactive element, and button MUST have an exact operational guideline detailing how, why, where, and when it works.
   - No details may be omitted; all information must be strictly factual, real, and verified against the actual codebase.
   - Zero guesswork, assumptions, or fabricated instructions are tolerated.

12. **Folder-Level README.md and MANIFEST.md Mandate**:
   - Every single folder and subfolder in the project MUST contain:
     - A `README.md` detailing the folder's purpose, why it exists, when to use it, and operating instructions.
     - A `MANIFEST.md` indexing all contained subfolders, files, phases, status, and essential descriptions.
   - Whenever a file is added or removed within any directory, its `MANIFEST.md` MUST be updated immediately.

