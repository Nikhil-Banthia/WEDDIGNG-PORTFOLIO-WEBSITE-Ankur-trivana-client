# PROJECT_MEMORY.md

> Long-term project memory for architectural continuity and decision tracking.

## 1) Core Decisions

- The project was migrated from one monolithic file to modular React architecture.
- Runtime uses `react-scripts` (non-Vite), keeping compatibility with current setup.
- Development port is standardized to `5001` via `.env`.
- UI parity is treated as a strict baseline.

## 2) Components Added/Organized

### Common Components
- `FloatingWhatsAppButton.jsx`
- `Reveal.jsx`
- `PremiumImage.jsx`
- `QuoteIcon.jsx`

### Layout/Page
- `MainLayout.jsx`
- `HomePage.jsx`
- `AppRouter.jsx`

### Sections
- Navigation, Hero, About, Services, Gallery, Stories, WhyChooseUs, Packages, CTA, Contact, Footer

## 3) Routes Created

- Current route wrapper: `src/routes/AppRouter.jsx`
- Current app path: single primary page composition (`HomePage`)

## 4) Styling Rules

- Preserve existing Tailwind class structures for visual parity.
- Keep global brand visuals in `injectStyles.js` unless redesign is requested.
- Do not alter animation timing/interaction behavior without explicit request.

## 5) Important Dependencies

- `react`, `react-dom`, `react-scripts`
- `tailwindcss`, `postcss`, `autoprefixer`
- `lucide-react`
- `graphifyy` (active Graphify CLI provider)

## 6) Warnings / Risks

- Upstream npm deprecation and vulnerability warnings may appear.
- No full automated UI regression suite yet.
- Avoid replacing wrapper component props forwarding (`...rest`) behavior.

## 7) Known Issues

- `graphify` npm package installed is library-only and does not expose CLI binary for `npx graphify ...`.

## 7.1) Graphify Operational Notes

- Working CLI command is `graphify` via package `graphifyy`.
- Project scripts:
	- `npm run graphify`
	- `npm run graphify:inspect`
	- `npm run graphify:report`
- Graph outputs are persisted in `.graphify/` for multi-agent continuity.

## 8) Pending Upgrades

- Add automated smoke/regression tests.
- Add linting/formatting CI.
- Optional TS migration path.

## 9) Update Log (Append Only)

- 2026-04-27: Established project memory system and multi-agent continuation files.
- 2026-04-27: Installed/configured Graphify CLI (`graphifyy`) and generated baseline graph artifacts.
