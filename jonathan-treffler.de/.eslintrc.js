module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		'comma-dangle': [ 'error', 'always', ],
		indent: [ 'error', 'tab', ],
		'vue/html-indent': [ 'error', 'tab', ],
		'no-tabs': 0,
		'array-bracket-spacing': [ 'error', 'always', ],
		'comma-spacing': [ 'error', { before: false, after: true, }, ],
	},
}
