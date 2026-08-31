---
title: the306bobby.com
summary: This site — a static Astro build served from Cloudflare Workers' asset storage.
date: 2026-08-31
tags: ["astro", "cloudflare", "workers", "meta"]
repo: https://github.com/306bobby-android/the306bobby-com
link: https://the306bobby.com
status: active
featured: false
---

The site you're reading. It exists so the projects below have somewhere to live that
isn't a README buried three repos deep.

## How it's built

Astro static-generates every page at build time, so there's no server rendering and no
client-side JavaScript shipped by default. The output in `dist/` is uploaded to
Cloudflare's asset storage and served by a Worker.

Each project is one Markdown file in `src/content/projects/`. A
[content collection](https://docs.astro.build/en/guides/content-collections/) validates
the frontmatter at build time, which means a typo in a field name fails the build instead
of silently rendering an empty page.

## Adding a project

Drop a new `.md` file in `src/content/projects/`, fill in the frontmatter, and push. The
index pages pick it up automatically, sorted by `date`.

```bash
npm run dev      # local preview at localhost:4321
npm run build    # static output to dist/
npm run deploy   # build, then wrangler deploy
```

Set `featured: true` to pin an entry to the home page, or `draft: true` to keep it out of
the build entirely.
