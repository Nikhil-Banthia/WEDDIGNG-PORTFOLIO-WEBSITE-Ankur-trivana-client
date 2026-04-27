# AI_CONTEXT.md

> Purpose: Fast contextual briefing for any AI agent entering this repository.

## Mandatory Read Order (Before Any Code Change)

1. `README.md` (master control)
2. `AI_CONTEXT.md` (this file)
3. `TASKS.md` (current execution board)
4. `CHANGELOG.md` (latest updates)
5. `PROJECT_MEMORY.md` (decisions and architecture memory)
6. `AGENT_RULES.md` (guardrails and workflow constraints)

---

## Project Snapshot

- **Project:** Wedding Portfolio Website (Aura & Ivory)
- **Runtime:** React (`react-scripts` / CRA-style)
- **Styling:** Tailwind + injected global visual styles
- **Port:** `5001` via `.env`
- **Status:** Refactor complete; behavior baseline preserved
- **Graph Layer:** `.graphify/` initialized and populated via Graphify CLI

---

## Architecture at a Glance

- `src/sections/*` → UI page sections
- `src/components/common/*` → reusable primitives (`Reveal`, `PremiumImage`, etc.)
- `src/pages/HomePage.jsx` → section composition
- `src/layouts/MainLayout.jsx` → app shell
- `src/utils/constants.js` → static content/data objects
- `src/utils/injectStyles.js` → global style injection

---

## Current Non-Negotiables

- Preserve visual/functional parity unless user asks otherwise.
- No destructive edits without explicit user confirmation.
- Keep dev port fixed at `5001`.
- Update memory docs after every completed task.
- Use `graphifyy`-backed `graphify` CLI commands (not legacy `graphify` library package).

---

## Graphify Quick Commands

- `npm run graphify:inspect` → inspect current file scope
- `npm run graphify` → refresh project graph artifacts
- `npm run graphify:report` → summarize generated graph

---

## Session Update Protocol (Append-Only)

After every task completion, update:

1. `CHANGELOG.md`
2. `PROJECT_MEMORY.md`
3. `TASKS.md`
4. `AI_CONTEXT.md` (if context changed)

Do **not** remove old logs/history.
