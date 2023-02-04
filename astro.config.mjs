import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import { defineConfig } from 'astro/config';
import compress from "astro-compress";

export default defineConfig({
  site: 'https://ronnyhaase.com',
  integrations: [
    prefetch(),
    react(),
    sitemap({
      lastmod: new Date(),
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    compress(),
  ]
});