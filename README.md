# the306bobby.com

Source for [the306bobby.com](https://the306bobby.com) — a static [Astro](https://astro.build)
site served from Cloudflare Workers' asset storage.

## Stack

| Piece | What it does |
| --- | --- |
| Astro 7 | Static-generates every page at build time. No client JS shipped by default. |
| Content collections | One Markdown file per project in `src/content/projects/`, frontmatter validated at build time. |
| Cloudflare Workers | Serves `dist/` via the native `assets` binding — no adapter, no server rendering. |

## Local development

```bash
npm install
npm run dev        # Astro dev server → http://localhost:4321
```

Other scripts:

```bash
npm run build      # static output to dist/
npm run preview    # serve the built dist/ through Workers locally (wrangler dev)
npm run check      # astro check — type + template diagnostics
npm run deploy     # build, then wrangler deploy
```

`npm run dev` is what you want while writing. Use `npm run preview` when you specifically
want to test Workers behavior (404 handling, trailing-slash resolution, headers).

## Adding a project

Copy `src/content/projects/_template.md` to a new file in the same directory. The filename
becomes the URL slug (`foo-bar.md` → `/projects/foo-bar/`).

```yaml
---
title: Project name          # required
summary: One sentence.       # required — shown on cards and as the meta description
date: 2026-01-15             # required — sorts the index, newest first
tags: ["kernel", "aosp"]     # optional
repo: https://github.com/... # optional — renders a "Source" link
link: https://example.com    # optional — renders a "Live" link
status: active               # active | maintained | archived  (default: active)
category: android            # android | tooling | side — groups the projects index
featured: false              # true pins it to the home page
draft: false                 # true keeps it out of the build entirely
---

Markdown body goes here.
```

The index pages pick it up automatically — nothing else to register.

## Deploying

First time, authenticate wrangler against your Cloudflare account:

```bash
npx wrangler login
npm run deploy
```

That publishes a Worker named `the306bobby-com` serving the contents of `dist/`. To attach
the real domain, add `the306bobby.com` as a custom domain on the Worker in the Cloudflare
dashboard (Workers & Pages → the306bobby-com → Settings → Domains & Routes). The domain's
nameservers need to be on Cloudflare for that to work.

## Layout

```
src/
├── components/ProjectCard.astro   card used on the home and index pages
├── content/projects/*.md          one file per project
├── content.config.ts              frontmatter schema
├── layouts/Base.astro             HTML shell, header, footer, meta tags
├── pages/
│   ├── index.astro                home
│   ├── projects/index.astro       all projects
│   ├── projects/[...slug].astro   one project
│   ├── 404.astro
│   └── sitemap.xml.ts             generated sitemap
├── styles/global.css              design tokens + base styles
└── consts.ts                      site title, domain, links
```

Colors and spacing are CSS custom properties at the top of `global.css`, with a
`prefers-color-scheme: dark` block overriding the palette. Change them in one place.
