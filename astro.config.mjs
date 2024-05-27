import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/road-to-cloud',
	integrations: [
		starlight({
			title: 'Road to Cloud',
			social: {
				github: 'https://github.com/road-to-cloud/road-to-cloud',
			},
			sidebar: [
				{
					label: 'Tutorials',
					collapsed: false,
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Guides',
					collapsed: false,
					autogenerate: { directory: 'guides' }
				},
				{
					label: 'Explanations',
					collapsed: false,
					autogenerate: { directory: 'explanations' }
				},
				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
