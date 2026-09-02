# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

Valeros is a reusable, flexible heritage data browser (Angular 22+ SPA). The purpose of this project is to be a standard, reusable solution for two Netwerk Digitaal Erfgoed (NDE) [behavior profiles](https://zenodo.org/records/14938780/files/Gedragprofielen-digitaal-erfgoed.pdf):

1. Targeted search: users arrive with a concrete question and search/filter/sort to it.
2. Browing and discovery: users have no specific query and are drawn along by visual/narrative triggers, related-content links, timelines/maps, etc.

Valeros is pre-1.0 and under active development. Do not overinvest in backward compatibility unless asked.

Valeros as a presentation layer consumes a "data layer", which is the term NDE uses for the API this app talks to. The data layer is currently protocol-agnostic and may end up being GraphQL, REST, or something else. Do not assume or hardcode GraphQL-specific behavior outside `src/app/api/graphql/`, which is today's implementation, not the contract.

Developers currently configure what/how data is shown via config files in `src/app/config/`. An experimental in-app configuration UI (`src/app/config/config-panel/`, `src/app/config/config-page/`, documented in `docs/guide/config-ui.md`) is being built towards replacing this with a fully UI-driven system. Treat the config files as the current contract, not the end state.

## Testing

### Unit tests (Vitest)

The project uses [Vitest](https://vitest.dev/) for unit tests. Test files live alongside the source they cover and use the `.spec.ts` suffix.

- Run all unit tests: `npm run test:unit`
- Run a single file: `npx vitest run <path/to/file.spec.ts>`

### E2E / Accessibility tests (Playwright)

Playwright is used as the project's e2e testing tool. Accessibility checks are part of that suite. Run `npm run test:e2e` to execute (among others) the accessibility specs in `e2e/a11y/`, which scan key pages with `@axe-core/playwright` (WCAG 2.0/2.1/2.2 A+AA tags). Run `npm run test:e2e:install` once to fetch browsers before the first run. Add a spec for any new route/widget you add.

## Accessibility

The app must conform to **WCAG 2.2 Level AA** across the board.

- Treat WCAG 2.2 AA as a blocking requirement for any UI change, not just new features.
- Don't regress existing conformance.
- axe-core misses some checks (e.g. focus-not-obscured, dragging alternatives, reading order). For non-trivial UI changes, also do a manual keyboard-only pass and spot-check with AXE DevTools/Lighthouse.
- Pay particular attention to interactive/custom widgets (`src/app/ui/draggable-list`, map/image viewers, custom presentation widgets) as these are the most likely to silently break keyboard or screen-reader support.

## Documentation

The VitePress site in `docs/guide/` (published at [docs.valeros.nl](https://docs.valeros.nl)) is the source of truth for how to configure and use Valeros, covering the configuration system, widgets, views, facets, styling, etc.

- When a change affects developer-facing behavior (config options, widget/view APIs, presentation config, the data layer contract), update the relevant page(s) in `docs/guide/` in the same change. Don't leave docs to a follow-up.
- Adding a new widget/view/config option needs a corresponding doc update (see `custom-widgets.md`, `custom-views.md`, `configuring-object-presentation.md`, `facets-configuration.md` for the existing shape to follow).
- Validate docs changes with `npm run docs:build` before considering the task done. VitePress will fail on broken links/structure.
- `README.md` and package-level docs should stay minimal (quick start, links). Substantive documentation belongs in `docs/guide/`, not the README.

## Git / PR Conventions

- Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, etc.). Release-please parses commit history to version and changelog automatically.
- `CHANGELOG.md` and the `version` in `package.json` are generated/updated by release-please (`release-please-config.json`, `.release-please-manifest.json`). Don't change these manually.
