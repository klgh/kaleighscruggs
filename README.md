<div align="center">

<img src="./src/assets/kslogo.svg" alt="Kaleigh Scruggs" width="96" />

# Kaleigh Scruggs

[![Site](https://img.shields.io/badge/site-kaleigh.dev-2A4A3C?style=flat-square)](https://kaleigh.dev/)
[![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Netlify](https://api.netlify.com/api/v1/badges/48671009-7c68-4ba2-b955-512669493300/deploy-status)](https://app.netlify.com/projects/kaleigh/deploys)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Overview](#overview) • [Getting started](#getting-started) • [Scripts](#scripts) • [Garden posts](#garden-posts) • [Project structure](#project-structure)

</div>

Personal site and digital garden for [Kaleigh Scruggs](https://kaleigh.dev/) — a Vue 3 + Vite app with markdown notes, a `/now` page, and a `/uses` page. Deployed on Netlify.

## Overview

This site is a small SPA that treats writing as a garden: notes grow over time, get featured on the home page, or stay as drafts until ready.

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, featured garden notes, about |
| `/garden` | All published garden posts |
| `/garden/:slug` | Individual markdown post |
| `/now` | What I'm up to |
| `/uses` | Tools and setup |

**Stack:** Vue 3, Vue Router, TypeScript, Vite, Tailwind CSS, Vitest. Garden posts live as markdown in `src/content/garden/` and are loaded at build time via `import.meta.glob`.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) matching [`.nvmrc`](.nvmrc)— [nvm](https://github.com/nvm-sh/nvm) recommended
- [Yarn](https://yarnpkg.com/)

```bash
git clone https://github.com/klgh/kaleighscruggs.git
cd kaleighscruggs
nvm use
yarn install
yarn dev
```

The app runs at [http://localhost:8080](http://localhost:8080).

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start Vite dev server |
| `yarn build` | Production build → `dist/` |
| `yarn preview` | Preview the production build |
| `yarn test` | Run Vitest once |
| `yarn test:watch` | Vitest in watch mode |
| `yarn lint` | ESLint on TypeScript and Vue files |
| `yarn typecheck` | `vue-tsc` type check |
| `yarn prettier` | Format TS, Vue, JSON, and Markdown |

## Garden posts

Add a new note by creating a markdown file in `src/content/garden/`. The filename (without `.md`) becomes the URL slug.

```md
---
title: "My note title"
excerpt: Short summary for cards and lists
category: tech
featured: true
date: '2026-08-07'
readTime: 5 min
draft: false
---

Your markdown content here.
```

| Frontmatter | Notes |
| --- | --- |
| `title` | Display title |
| `excerpt` | Short blurb for cards |
| `category` | `tech` \| `travel` \| `life` \| `baking` |
| `featured` | Show on the home garden preview when `true` |
| `date` | ISO date string; used for sorting |
| `readTime` | Optional reading-time label |
| `draft` | Hidden from lists and routes when `true` |

### Images

Put images under `public/garden/<slug>/` and reference them from the post:

```md
![Short description](/garden/<slug>/photo.jpg)
```

See [`public/garden/README.md`](public/garden/README.md) for the folder convention.

## Project structure

```text
├── public/garden/          # Static images per post slug
├── src/
│   ├── assets/             # Brand mark and static assets
│   ├── components/         # Layout and section components
│   ├── content/garden/     # Markdown garden posts
│   ├── data/               # Typed data for /now and /uses
│   ├── lib/garden.ts       # Frontmatter parsing and post helpers
│   ├── pages/              # Route-level Vue pages
│   └── router/             # Vue Router config
├── netlify.toml            # Build + SPA redirects
└── vite.config.ts
```

## Deploy

Builds with `yarn build` and publishes `dist/`. SPA routing is handled by the Netlify redirect in [`netlify.toml`](netlify.toml) (`/*` → `/index.html`).

Live site: [https://kaleigh.dev/](https://kaleigh.dev/)
