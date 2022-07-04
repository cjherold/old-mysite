/* eslint-disable import/named */
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { routes, pageData } from './vite.routes';

export default {
	root: resolve('./src'),
	plugins: [
		handlebars({
			context(urlEnding) {
				urlEnding = urlEnding.replace('.html', '');
				return pageData[urlEnding];
			},
			partialDirectory: resolve('./src/partials'),
		}),
	],
	build: {
		outDir: '../docs',
		assetsDir: 'assets',
		output: {
			preserveModules: true,
		},
		rollupOptions: {
			input: routes,
		},
	},
	css: {
		postcss: {
			plugins: [
				{
					postcssPlugin: 'internal:charset-removal',
					AtRule: {
						charset: atRule => {
							if (atRule.name === 'charset') {
								atRule.remove();
							}
						},
					},
				},
			],
		},
	},
};
