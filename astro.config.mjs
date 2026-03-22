import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://ryota2425-murakami.github.io',
  outDir: './dist',
  trailingSlash: 'ignore',
});
