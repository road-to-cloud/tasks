import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/road-to-cloud',
	integrations: [
		starlight({
			title: 'Road to Cloud',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' }
				},
				{
					label: 'Explanations',
					autogenerate: { directory: 'explanations' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
