const rollup = require('rollup');
const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

async function main() {
	const components = {
		Child1: 'src/Child1.svelte',
		Child2: 'src/Child2.svelte',
		SubChild: 'src/SubChild.svelte'
	}

	for (const name in components) {
		const path = components[name]

		const config = {
			input: path,
			output: {
				sourcemap: true,
				format: 'esm',
				file: `public/${name}.js`
			},
			plugins: [
				svelte({
					css: false,
					emitCss: false
				}),
				resolve({
					browser: true,
					dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
				}),
				commonjs()
			],
			watch: {
				clearScreen: false
			}
		};

		const bundle = await rollup.rollup(config)

		await bundle.write(config)
	}
}

main()
