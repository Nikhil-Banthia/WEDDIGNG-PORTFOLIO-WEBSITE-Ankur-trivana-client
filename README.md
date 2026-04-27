# WEDDING PORTFOLIO WEBSITE — Master Project Memory & AI Workflow Guide

> [!IMPORTANT]
> **This README is the single source of truth for humans and AI agents.**
> Every AI agent (Copilot, Cursor, Claude Code, Gemini CLI, etc.) **must read this file fully before making any code change**.

---

## Final Reminder (Read First)

> **Before starting any new task, read this README completely. After completing task, update this README with all new changes.**

### Mandatory Startup Read Sequence (All AI Agents)

1. `README.md` (this file)
2. `AI_CONTEXT.md`
3. `TASKS.md`
4. `CHANGELOG.md`
5. `PROJECT_MEMORY.md`
6. `AGENT_RULES.md`

### Shared Memory Files

- Root memory docs:
  - `README.md`
  - `AI_CONTEXT.md`
  - `PROJECT_MEMORY.md`
  - `TASKS.md`
  - `CHANGELOG.md`
  - `AGENT_RULES.md`
- Internal continuity docs:
  - `.ai-memory/session-log.md`
  - `.ai-memory/handoff.md`
  - `.ai-memory/architecture.md`
  - `.ai-memory/decisions.md`
  - `.ai-memory/bugs.md`

---

## 1) Project Name

**Project:** Wedding Portfolio Website  
**Brand/UI Theme:** Aura & Ivory (luxury wedding showcase)

---

## 2) Project Overview

This project is a production-oriented React front-end for a premium wedding portfolio website.

Core behavior includes:
- Hero background image slider
- Preloader sequence
- Smooth reveal animations
- Mobile menu overlay
- Gallery filtering + lightbox
- Editorial stories + immersive story modal
- Contact form UI section
- Floating WhatsApp CTA button

### Current Priority
- Preserve visual identity and behavior exactly unless user explicitly asks for changes.

---

## 3) Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build/Runtime | CRA-style via `react-scripts` |
| Styling | Tailwind CSS + custom injected global styles |
| Icons | `lucide-react` |
| Language | JavaScript (JSX) |
| Package Manager | npm |

---

## 4) Folder Structure

```text
WEDDIGNG-PORTFOLIO-WEBSITE/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  └─ common/
│  │     ├─ FloatingWhatsAppButton.jsx
│  │     ├─ PremiumImage.jsx
│  │     ├─ QuoteIcon.jsx
│  │     └─ Reveal.jsx
│  ├─ layouts/
│  │  └─ MainLayout.jsx
│  ├─ pages/
│  │  └─ HomePage.jsx
│  ├─ routes/
│  │  └─ AppRouter.jsx
│  ├─ sections/
│  │  ├─ AboutSection.jsx
│  │  ├─ ContactSection.jsx
│  │  ├─ CtaBannerSection.jsx
│  │  ├─ FooterSection.jsx
│  │  ├─ GallerySection.jsx
│  │  ├─ HeroSection.jsx
│  │  ├─ Navigation.jsx
│  │  ├─ PackagesSection.jsx
│  │  ├─ ServicesSection.jsx
│  │  ├─ StoriesSection.jsx
│  │  └─ WhyChooseUsSection.jsx
│  ├─ styles/
│  │  └─ index.css
│  ├─ utils/
│  │  ├─ constants.js
│  │  └─ injectStyles.js
│  ├─ App.jsx
│  └─ index.js
├─ CODE.jsx                (legacy single-file source kept for reference)
├─ .env                    (PORT=5001)
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ README.md
```

---

## 5) Run Instructions

```bash
npm install
npm run dev
```

For this project, `npm run dev` maps to CRA start (`react-scripts start`).

---

## 6) Build Instructions

```bash
npm run build
```

---

## 7) Port Setup (MANDATORY: 5001)

**Required development port:** `5001`

### CRA (`react-scripts`) — current setup
- `.env` contains:
  - `PORT=5001`

### Vite setup (if ever migrated later)
Use one of the following:

```bash
# package.json script example
vite --port 5001
```

or

```js
// vite.config.js example
export default defineConfig({
  server: { port: 5001 }
})
```

### Custom React setup (Webpack/custom server)
- Ensure dev server config uses `port: 5001`.
- Do not change port unless user explicitly requests.

---

## 8) AI Agent Mandatory Rules

1. Read this README fully before coding.
2. Understand current architecture before editing.
3. Review completed work history and pending tasks first.
4. Respect file safety rules (below) before any modification.
5. After finishing any task, append updates to this README.
6. Preserve working UI/functionality unless user requests change.

---

## 9) Critical File Safety Rules (Very Strict)

> [!WARNING]
> Destructive edits are prohibited without user confirmation.

1. NEVER delete old code directly.
2. NEVER delete any file without user confirmation.
3. NEVER remove components blindly.
4. NEVER replace working logic unnecessarily.
5. MODIFY existing code carefully instead of deleting.
6. Preserve working functionality at all costs.
7. Before destructive change, ask user first.
8. If refactor required, move code safely.
9. Maintain backward compatibility.
10. Every change should be reversible.

---

## 10) Code Editing Rules

1. Prefer modify over rewrite.
2. Prefer extend over replace.
3. Keep UI same unless user requests redesign.
4. Keep functionality same unless user requests feature change.
5. Preserve responsiveness.
6. Preserve animations.
7. Preserve routes.
8. Preserve API integrations.
9. Avoid breaking imports.
10. Test after edits.

---

## 11) Code Style & Architecture Rules

- Use functional components.
- Keep sections modular under `src/sections`.
- Keep shared UI primitives under `src/components/common`.
- Keep static content in `src/utils/constants.js`.
- Keep cross-cutting visual CSS injections in `src/utils/injectStyles.js`.
- Preserve current classNames unless change is requested.
- Keep imports clean and relative-path safe.
- Do not introduce dead code or unused modules.

---

## 12) Important Commands

```bash
# install
npm install

# run dev on 5001
npm run dev

# production build
npm run build

# run tests (if/when tests are added)
npm test

# graphify scope inspection
npm run graphify:inspect

# graphify graph refresh
npm run graphify

# graphify summary from persisted graph
npm run graphify:report
```

---

## 13) Completed Tasks (Chronological Summary)

### 2026-04-27
- Converted monolithic single-file app into structured multi-file React architecture.
- Preserved existing UI/UX behavior and animations.
- Organized code into reusable components, sections, layout, page, route wrapper, utilities.
- Added production-ready project scaffolding (CRA-style runtime + Tailwind wiring).
- Added floating WhatsApp button (bottom-right, responsive, premium hover style) linking to:
  - `https://wa.me/917737671719`
- Ensured WhatsApp CTA does not disturb existing UI layout.
- Added `.env` with `PORT=5001`.
- Verified `npm install` success.
- Verified `npm run build` success.

---

## 14) Changed Files (Latest Major Refactor)

- `package.json`
- `postcss.config.js`
- `tailwind.config.js`
- `public/index.html`
- `.env`
- `README.md`
- All files currently present under `src/` as listed in folder structure.

---

## 15) Pending Tasks

- [ ] Add automated tests (smoke + key UI behavior snapshots/interactions).
- [ ] Add ESLint/Prettier enforcement (if requested by owner).
- [ ] Add CI pipeline for build verification.
- [ ] Add deployment-specific environment documentation once hosting target is finalized.

---

## 16) Known Issues / Risks

- Dependency ecosystem may show transitive npm deprecation/vulnerability warnings from upstream packages.
- No automated test suite yet; currently validated by build success and manual behavior preservation.

---

## 17) Future Improvements (Only if approved)

- Add route-level code splitting for performance.
- Add image optimization pipeline and lazy loading enhancements.
- Add accessibility audit and fixes (ARIA/keyboard focus checks).
- Introduce typed migration path (TypeScript) gradually.
- Add analytics and event instrumentation with consent flow.

---

## 18) Deployment Notes

- Build output directory: `build/`
- Static deployment command example:

```bash
npm run build
```

- Ensure hosting rewrite rules support SPA routing if additional routes are introduced later.
- Preserve environment expectations (especially `PORT=5001` for local development consistency).

---

## 19) Ownership & Decision Notes

- Product owner controls design/feature change approvals.
- AI agents are maintainers/executors, not product decision-makers.
- In ambiguous cases, ask for user confirmation before behavior changes.

---

## 20) Agent Workflow Checklist (Must Follow Every Session)

### Before Coding
- [ ] Read this README completely.
- [ ] Review latest Change Log + Completed + Pending sections.
- [ ] Confirm non-destructive approach.
- [ ] Confirm port and run context (`5001`).
- [ ] Confirm acceptance criteria from user.

### During Coding
- [ ] Prefer smallest safe change.
- [ ] Keep UI/functionality unchanged unless requested.
- [ ] Avoid deleting files/components without confirmation.
- [ ] Validate imports and build after edits.

### After Coding
- [ ] Run build/tests relevant to change.
- [ ] Append a new entry in Change Log.
- [ ] Update Completed/Pending/Known Issues sections.
- [ ] Document changed files.
- [ ] Keep old history intact (append-only, do not erase).

---

## 21) README Self-Updating Rules (Append-Only Policy)

After every completed task, the agent **must** update this README:

1. Add newly completed tasks.
2. Add changed files.
3. Add new features.
4. Add bug fixes.
5. Add pending issues.
6. Add architecture notes if impacted.
7. Keep old history.
8. Do NOT erase previous logs.
9. Append updates chronologically.
10. Keep README clean and organized.

---

## 22) Change Log (Append New Entries Below)

> Format:
> `YYYY-MM-DD | Agent/Author | Scope | Files | Validation | Notes`

- 2026-04-27 | AI Agent | Initial architecture split + documentation baseline | `src/**`, `package.json`, config files, `.env`, `README.md` | `npm install`, `npm run build` passed | Preserved behavior; added WhatsApp floating CTA; set port 5001.
- 2026-04-27 | AI Agent | Multi-agent shared memory system setup | `AI_CONTEXT.md`, `PROJECT_MEMORY.md`, `TASKS.md`, `CHANGELOG.md`, `AGENT_RULES.md`, `.ai-memory/*`, `README.md` | File creation + workspace verification | Added append-only continuation framework and startup protocol.

---

## 23) Strict Non-Regression Directive

- Existing UI/UX, responsiveness, transitions, and flow are considered **stable baseline**.
- Any intentional visual/functional change requires explicit user request.
- If unsure: pause and ask instead of guessing.

---

## 24) Final Reminder

> [!IMPORTANT]
> **Before starting any new task, read this README completely. After completing task, update this README with all new changes.**
