import adapter from '@sveltejs/adapter-vercel';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess@5.0.4_postcss@8.4.29_sass@1.68.0_svelte@4.2.0_typescript@5.2.2/node_modules/svelte-preprocess/dist/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			regions: ['cdg1']
		}),

		alias: {
			$i18n: 'src/i18n'
		}
	}
};

export default config;
