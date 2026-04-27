# CHANGELOG.md

> Append-only chronological changes. Never erase prior history.

## 2026-04-27

### Added
- Modular React project structure under `src/` (components, sections, layout, routes, utils)
- Floating WhatsApp button component with bottom-right sticky positioning
- `.env` with `PORT=5001`
- Master `README.md` for AI/human workflow guidance
- AI shared memory system files:
  - `AI_CONTEXT.md`
  - `PROJECT_MEMORY.md`
  - `TASKS.md`
  - `CHANGELOG.md`
  - `AGENT_RULES.md`
  - `.ai-memory/*`

### Changed
- `package.json` scripts aligned to CRA-style flow (`react-scripts`)
- Tailwind/PostCSS config compatibility for current runtime

### Verified
- `npm install` completed successfully
- `npm run build` compiled successfully

### Notes
- `graphify` package in dependencies does not provide CLI executable for `npx graphify` usage.

## 2026-04-27 (Graphify Integration Update)

### Added
- Installed maintained Graphify CLI package: `graphifyy@0.4.33` (binary: `graphify`)
- Added Graphify config files:
  - `graphify.yaml`
  - `.graphify.json`
- Generated project knowledge graph artifacts under `.graphify/`:
  - `graph.json`
  - `GRAPH_REPORT.md`
  - `manifest.json`
  - `scope.json`

### Changed
- Updated `package.json` scripts:
  - `graphify`
  - `graphify:inspect`
  - `graphify:report`

### Verified
- `npx graphify --version` => `0.4.33`
- `npx graphify scope inspect . --scope auto` succeeded
- `npm run graphify` succeeded and rebuilt `.graphify` graph
- `npm run build` succeeded
- `npm run dev` served on `http://localhost:5001`

### Notes
- Legacy `graphify` package remains library-only (no CLI `bin`).
- Working CLI path for this repo is via `graphifyy` package (`graphify` command).

## 2026-04-27 (Netlify Build Permission Fix)

### Added
- `postinstall` script in `package.json` to enforce executable permissions on `node_modules/.bin/react-scripts` in Linux/Netlify environments.

### Changed
- `netlify.toml` build environment updated with `NPM_FLAGS = "--include=dev"` as compatibility fallback.

### Verified
- `npm install` ran `postinstall` and printed: `react-scripts executable permission ensured`
- `npm run build` compiled successfully after the fix

### Notes
- This addresses Netlify error: `sh: 1: react-scripts: Permission denied`.
