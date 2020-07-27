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
		'comma-dangle': [ 'error', {
			arrays: 'always',
			objects: 'always',
			imports: 'never',
			exports: 'never',
			functions: 'never',
		}, ],
		semi: [ 'error', 'always', ],
		indent: [ 'error', 'tab', ],
		'vue/html-indent': [ 'error', 'tab', ],
		'no-tabs': 0,
		'array-bracket-spacing': [ 'error', 'always', ],
		'comma-style': [ 'error', 'last', ],
		'comma-spacing': [ 'error', { before: false, after: true, }, ],
		'space-before-function-paren': [ 'error', 'never', ],
	},
};
