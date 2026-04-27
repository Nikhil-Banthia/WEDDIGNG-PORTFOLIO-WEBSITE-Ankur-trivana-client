# TASKS.md

> Operational board for humans + AI agents. Keep this file current.

## Pending

- [ ] Add smoke tests for primary UI flows
- [ ] Add CI pipeline for build + lint verification
- [ ] Add deployment environment documentation

## In Progress

- [ ] None

## Completed

- [x] Refactored monolithic app into modular React architecture
- [x] Added floating WhatsApp button (`https://wa.me/917737671719`)
- [x] Standardized local dev port to `5001`
- [x] Created AI shared memory + multi-agent continuation system files
- [x] Integrated working Graphify CLI (`graphifyy`) and generated `.graphify` knowledge artifacts
- [x] Added Graphify project config (`graphify.yaml`, `.graphify.json`) and npm scripts

## Bugs

- [ ] Legacy `graphify` dependency is library-only; do not use it for CLI commands

## Ideas

- [ ] Add visual regression snapshots for key sections
- [ ] Add performance budget checks for image-heavy sections
- [ ] Add route-based code splitting when additional pages are introduced

## Maintenance Rules

- Move tasks between sections; do not delete history blindly.
- Keep status factual and concise.
- Append dated notes for major transitions.

## Dated Notes

- 2026-04-27: Graphify CLI successfully enabled via `graphifyy@0.4.33`; baseline graph generated in `.graphify/`.
