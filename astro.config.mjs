import image from '@astrojs/image'
import prefetch from '@astrojs/prefetch'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'

export default defineConfig({
  site: 'https://ronnyhaase.com',
  integrations: [
    prefetch(),
    react(),
    sitemap({ lastmod: new Date() }),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    compress(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
  ]
});
