
export default {
	mode: "universal",
	target: "static",

	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8", },
			{ name: "viewport", content: "width=device-width, initial-scale=1", },
			{ hid: "description", name: "description", content: process.env.npm_package_description || "", },
		],
		link: [
			{ rel: "icon", type: "image/jpeg", href: "/favicon.jpeg", },
		],
	},

	css: [
		"~/assets/styles/themes.scss",
	],

	plugins: [
		"~/plugins/vue-material.js",
	],

	buildModules: [
		"@nuxtjs/eslint-module",
		"@nuxtjs/stylelint-module",
		"@nuxtjs/fontawesome",
	],

	modules: [
		"@nuxtjs/pwa",
		"@nuxtjs/axios",
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
		githubToken: process.env.GITHUB_TOKEN || process.env["secrets.GITHUB_TOKEN"],
	},

	fontawesome: {
		icons: {
			solid: [
				"faStar",
				"faFileCode",
				"faFileContract",
				"faGrin",
				"faFlag",
				"faBuilding",
				"faHeart",
				"faHashtag",
				"faLink",
				"faSun",
				"faMoon",
			],
			brands: [
				"faGithub",
				"faTwitter",
				"faNpm",
				"faDev",
				"faYoutube",
			]
		},
	},

	stylelint: {
		configFile: ".stylelintrc.js",
	},
};
