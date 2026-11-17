# Notes Directory — Development Time Notes & Planning

## Purpose & Scope
The `notes/` directory is the dedicated workspace for **development-time planning, execution notes, and phase-by-phase logging**. It captures the thought process, pre-implementation plans, live session notes, and audit records before and during code changes.

## Core Rules for Agents & Developers
1. **Plan Before Touching Code**: Before starting any update, feature addition, refactor, or fix, a detailed plan and task report must be recorded here.
2. **Phase & Step Logs**: During implementation, record each step/phase, noting what was tested, what worked, and any blockers encountered.
3. **Implementation Registry**: Document exactly what was implemented, why it was done, the timestamp, and which files were touched.
4. **No Direct Production Code**: This directory contains only markdown, JSON logs, or scratch audit files—never executable runtime application code.

## Directory Structure
- `planning/` — Pre-implementation roadmaps, architectural planning, and feature scopes.
- `sessions/` — Live developer/agent session logs, step-by-step progress notes, and execution checkpoints.
- `changelog-drafts/` — Draft release notes and changelog staging before merging into root changelogs.

## Usage Workflow
```
[User Request]
       │
       ▼
1. Create Plan in notes/planning/ (Scope, steps, risk assessment)
       │
       ▼
2. Record Live Steps in notes/sessions/ (Phase logs, terminal checks)
       │
       ▼
3. Implement in Codebase (Strict scope lock)
       │
       ▼
4. Update project/ & docs/ (Synchronize documentation)
       │
       ▼
5. Record Completion in notes/ (Summary, timestamp, verification output)
```
