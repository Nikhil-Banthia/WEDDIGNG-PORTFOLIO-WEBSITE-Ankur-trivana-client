# .ai-memory/architecture.md

> Technical architecture snapshot for fast onboarding.

## Runtime

- React 18 + `react-scripts`
- Tailwind CSS + custom injected styles

## Composition

- `App.jsx` orchestrates global state + loader behavior.
- `HomePage.jsx` composes all sections in order.
- Sections live in `src/sections`.
- Reusable primitives live in `src/components/common`.

## Data Flow

- Static content stored in `src/utils/constants.js`.
- UI behavior state localized in top-level app/page composition.

## UX Invariants

- Preserve hero slider cadence and loader sequence.
- Preserve gallery filter/lightbox behavior.
- Preserve story modal interactions.
