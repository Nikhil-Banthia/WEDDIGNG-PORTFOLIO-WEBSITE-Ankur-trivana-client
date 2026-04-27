# AGENT_RULES.md

> Mandatory guardrails for all AI agents working in this repository.

## 1) Startup Protocol (Must Follow)

Before coding:
1. Read `README.md` fully
2. Read `AI_CONTEXT.md`
3. Read `TASKS.md`
4. Read latest `CHANGELOG.md`
5. Review `PROJECT_MEMORY.md`

If any conflict exists, `README.md` is source-of-truth and must be updated.

## 2) Safety Rules

1. Do not delete files without explicit user confirmation.
2. Do not remove working logic unless requested.
3. Prefer incremental edits over full rewrites.
4. Preserve UI/animations/responsiveness by default.
5. Keep changes reversible and traceable.

## 3) Engineering Rules

- Preserve imports and module boundaries.
- Keep sections/components reusable.
- Maintain backward compatibility unless told otherwise.
- Run relevant checks after edits.

## 4) Documentation Update Rules (After Task)

Always update these files when task completes:
1. `CHANGELOG.md`
2. `PROJECT_MEMORY.md`
3. `TASKS.md`
4. `AI_CONTEXT.md` (if contextual changes occurred)

Do not rewrite history; append new entries.

## 5) Port + Runtime Invariant

- Development must run on port `5001`.
- Current runtime is CRA-style (`react-scripts`).
