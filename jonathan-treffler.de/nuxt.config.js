
export default {
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
		{ src: "~/plugins/scroll-reveal", ssr: false, },
	],

	buildModules: [
		"@nuxt/postcss8",
		"@nuxtjs/eslint-module",
		"@nuxtjs/stylelint-module",
		"@nuxtjs/fontawesome",
		"@nuxtjs/vuetify",
	],

	modules: [
		"@nuxtjs/pwa",
		"@nuxtjs/axios",
		"@nuxtjs/dayjs",
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
				"faMastodon",
				"faNpm",
				"faDev",
				"faYoutube",
			],
		},
	},

	stylelint: {
		configFile: ".stylelintrc.js",
	},

	dayjs: {
		locales: [ "en", ],
		defaultLocale: "en",
		plugins: [ "relativeTime", "advancedFormat", ],
	},
};
