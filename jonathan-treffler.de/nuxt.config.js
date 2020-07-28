
export default {
	mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8', },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1', },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '', },
		],
		link: [
			{ rel: 'icon', type: 'image/jpeg', href: '/favicon.jpeg', },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', },
		],
	},
	css: [
	],
	plugins: [
	],
	buildModules: [
		'@nuxtjs/eslint-module',
	],
	modules: [
		'@nuxtjs/pwa',
	],
	pwa: {
		icon: {
			iconSrc: 'assets/logo.png',
		},
	},
	build: {
	},
};
