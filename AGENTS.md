# AGENTS.md

## Project Overview

This repository is a single-package Vue 3 + Vite + TypeScript application for a personal site and digital garden.

- Framework: Vue 3 with Vue Router
- Build tool: Vite
- Language: TypeScript
- Styling: Tailwind CSS + PostCSS
- Tests: Vitest (`jsdom` environment)
- Deployment target: Netlify (SPA redirect to `index.html`)

High-level structure:

- App and pages: `src/pages`, `src/components`
- Router: `src/router/index.ts`
- Markdown garden content: `src/content/garden/*.md`
- Static post assets: `public/garden/<slug>/...`
- Build output: `dist/`

## Setup Commands

Use the repo root for all commands.

1. Node version (required):

```bash
nvm use
```

This reads `.nvmrc` (`24.18.0`).

1. Install dependencies:

```bash
yarn install
```

1. Start dev server:

```bash
yarn dev
```

## Development Workflow

Common commands:

```bash
yarn dev            # local dev server
yarn build          # production build to dist/
yarn build:dev      # development-mode build
yarn preview        # serve built output locally
```

Quality commands:

```bash
yarn lint           # eslint with --fix (mutates files)
yarn typecheck      # vue-tsc --noEmit
yarn test           # vitest run
yarn test:watch     # vitest watch mode
yarn prettier       # prettier --write for ts/vue/json/md
```

Notes for agents:

- `yarn lint` auto-fixes files. Use it when edits are intended.
- For CI-like read-only lint checks, run:

```bash
yarn eslint '**/*.{ts,vue}'
```

## Testing Instructions

Test framework and config:

- Runner: Vitest
- Config file: `vitest.config.ts`
- Environment: `jsdom`
- Test include pattern: `src/**/*.{test,spec}.{ts,vue}`

Run tests:

```bash
yarn test
```

Run a focused test by name:

```bash
yarn vitest run -t "<test name>"
```

Run a focused test file:

```bash
yarn vitest run src/test/example.test.ts
```

Before finishing changes, ensure at minimum:

```bash
yarn eslint '**/*.{ts,vue}' && yarn typecheck && yarn test && yarn build
```

## Code Style and Conventions

- ESLint config: `eslint.config.js` (flat config, `typescript-eslint`, `eslint-plugin-vue`).
- Prettier is used for formatting (`.ts`, `.vue`, `.json`, `.md`).
- Keep changes scoped; avoid unrelated refactors.
- Preserve existing naming and file organization patterns.
- Prefer TypeScript in `src/` and keep imports consistent with existing alias usage (`@` -> `src`).

Content conventions:

- Garden posts are markdown files in `src/content/garden/`.
- Post slug is the markdown filename (without extension).
- Related static images belong in `public/garden/<slug>/`.

## Build and Deployment

Netlify config is in `netlify.toml`:

- Build command: `yarn build`
- Publish directory: `dist`
- SPA redirect: `/*` -> `/index.html` (200)

Local production check:

```bash
yarn build && yarn preview
```

## CI/CD

GitHub Actions workflow: `.github/workflows/ci.yml`

Current pipeline runs on push/PR to `main` and executes:

1. Install dependencies (`yarn install --frozen-lockfile`)
2. Lint (`yarn eslint '**/*.{ts,vue}'`)
3. Typecheck (`yarn typecheck`)
4. Test (`yarn test`)
5. Build (`yarn build`)

Treat these as required pre-merge checks.

## Security and Secrets

- Never commit secrets or API keys.
- Use environment variables for runtime secrets (if introduced later).
- Do not modify workflow permissions to broader scopes without clear need.

## Pull Request Guidance

Before opening or updating a PR:

1. Run the full local quality gate:

```bash
yarn eslint '**/*.{ts,vue}' && yarn typecheck && yarn test && yarn build
```

1. If formatting/lint fixes are required, run:

```bash
yarn lint && yarn prettier
```

1. Keep PRs focused and include tests for behavior changes.

## Troubleshooting

- If Node/tooling versions mismatch, run `nvm use` and reinstall dependencies.
- If Vite cache issues appear after dependency changes:

```bash
rm -rf node_modules dist && yarn install
```

- If tests fail due to environment assumptions, confirm `jsdom` expectations and file placement matches Vitest include globs.
