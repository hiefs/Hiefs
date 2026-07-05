// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://hiefs.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Oswald",
			cssVariable: "--font-oswald",
		},
		{
			provider: fontProviders.fontsource(),
			name: "JetBrains Mono",
			cssVariable: "--font-jet-brains",
		},
		{
			provider: fontProviders.fontsource(),
			name: "Bebas Neue",
			cssVariable: "--font-bebas-neue",
		}
	],
});
