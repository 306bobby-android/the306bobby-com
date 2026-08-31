import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Sorts the index; also rendered on the project page.
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
    status: z.enum(['active', 'maintained', 'archived']).default('active'),
    // Groups the projects index; order of sections is fixed in the page.
    category: z.enum(['android', 'tooling', 'side']).default('android'),
    // Pins an entry to the top of the home page.
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// The Cherrygram Next privacy policy is maintained in that project's repository so
// there is one copy to edit. Fetched at build time; a failure fails the build
// rather than silently serving a stale policy.
const PRIVACY_URL =
  'https://git.306bobbyandroid.download/306bobby/Cherrygram-Next/raw/branch/main/PRIVACY.md';

const cherrygramNextPrivacy = defineCollection({
  loader: {
    name: 'cherrygram-next-privacy',
    async load({ store, renderMarkdown, logger }) {
      logger.info(`Fetching ${PRIVACY_URL}`);
      const res = await fetch(PRIVACY_URL);
      if (!res.ok) {
        throw new Error(`Could not fetch the Cherrygram Next privacy policy: HTTP ${res.status}`);
      }
      const body = await res.text();
      if (!body.trim()) {
        throw new Error('The Cherrygram Next privacy policy came back empty.');
      }
      store.clear();
      store.set({
        id: 'cherrygram-next',
        data: { source: PRIVACY_URL },
        body,
        rendered: await renderMarkdown(body),
      });
    },
  },
  schema: z.object({ source: z.string().url() }),
});

export const collections = { projects, cherrygramNextPrivacy };
