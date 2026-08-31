// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://the306bobby.com',
  // Workers' asset server resolves /projects/foo/ to the directory's index.html,
  // so directory format keeps URLs extensionless without a redirect rule.
  build: { format: 'directory' },
});
