// @ts-check
import { defineConfig } from 'astro/config';

import sanityIntegration from '@sanity/astro'
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://hyper-dating.xyz',
  integrations: [
    sanityIntegration({
      projectId: '43yqz7yr',
      dataset: 'production',
      apiVersion: '2023-02-08',
      useCdn: false,
    }), 
    react(),
    sitemap(),
    compress(),
    robotsTxt(),
  ],
  devToolbar: {
    enabled: false
},
});