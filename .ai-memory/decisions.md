# .ai-memory/decisions.md

> Major decisions and rationale (append-only).

## Decision Log

### 2026-04-27 — Keep CRA-style runtime (No Vite)
- Reason: explicit project requirement to avoid Vite.
- Impact: scripts and configs aligned to `react-scripts`.

### 2026-04-27 — Port standardization to 5001
- Reason: consistent multi-agent local workflow.
- Impact: `.env` includes `PORT=5001`.

### 2026-04-27 — Graphify fallback strategy
- Reason: installed `graphify` package exposes no CLI binary.
- Impact: implemented markdown-based local memory system as primary continuation layer.
