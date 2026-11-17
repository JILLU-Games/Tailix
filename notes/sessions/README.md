# Sessions Directory — Live Session Logs & Phase Checkpoints

## Purpose
The `notes/sessions/` directory contains chronological developer and agent session logs. These files record real-time progress, commands executed, test results, and timestamped changes made during an active work session.

## Log Structure
Each session file should follow the format:
- `session-YYYY-MM-DD-HHMM.md`
- Fields:
  - **Timestamp**: ISO 8601 or local time.
  - **Task / Goal**: Current user request or internal goal.
  - **Phase Logs**: Step 1, Step 2, test output.
  - **Modified Files**: Exact list of files created or edited.
  - **Outcome**: Successful completion or blocker details.
