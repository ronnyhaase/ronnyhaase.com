import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import compress from "astro-compress"

export default defineConfig({
	site: "https://ronnyhaase.com",
	prefetch: true,
	integrations: [
		react(),
		sitemap({ lastmod: new Date() }),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		compress(),
	],
})
