
export default {
	mode: "universal",
	target: 'static',

	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8", },
			{ name: "viewport", content: "width=device-width, initial-scale=1", },
			{ hid: "description", name: "description", content: process.env.npm_package_description || "", },
		],
		link: [
			{ rel: "icon", type: "image/jpeg", href: "/favicon.jpeg", },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons", },
		],
	},

	css: [
		"@sweetalert2/theme-material-ui/material-ui.css",
		"@fortawesome/fontawesome-free/css/fontawesome.min.css",
		"@fortawesome/fontawesome-free/css/solid.min.css",
	],

	plugins: [
	],

	buildModules: [
		"@nuxtjs/eslint-module",
		//"@nuxtjs/fontawesome",
	],

	modules: [
		"@nuxtjs/pwa",
		"@nuxtjs/axios",
		"vue-sweetalert2/nuxt",
	],

	pwa: {
		icon: {
			fileName: "logo.png",
		},
		manifest: {
			name: "Jonathan Treffler",
			lang: "de",
			background_color: "#fff",
			theme_color: "#fff",
		},
	},

	build: {
	},

	privateRuntimeConfig: {
    	githubToken: process.env.githubToken,
	},

	/*fontawesome: {
    	icons: {
			solid: ['faStar',],
		},
		addCss: true,
	}*/
};
