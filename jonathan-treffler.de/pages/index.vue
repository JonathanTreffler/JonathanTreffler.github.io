<template>
	<md-app id="container" :md-theme="theme">
		<md-app-content>
			<DarkModeButton :theme.sync="theme" />
			<Header />
			<Body />
			<Footer />
		</md-app-content>
	</md-app>
</template>

<script>
import Header from "~/components/Header.vue";
import Body from "~/components/Body.vue";
import Footer from "~/components/Footer.vue";
import DarkModeButton from "~/components/DarkModeButton.vue";

export default {
	components: {
		Header,
		Body,
		Footer,
		DarkModeButton,
	},
	data: function() {
		return {
			theme: "default",
		};
	},
};
</script>

<style>
.md-app-container {
	overflow: initial;
}

.md-app-content {
	padding: 10px;
}

#container {
	width: 100%;
	min-height: 100vh;
	padding-bottom: 10vh;
	font-family: Roboto, sans-serif;
}

.md-content.md-theme-default, #container.md-theme-default {
	background-color: #F8F8F8 !important;
}

.md-content.md-theme-default-dark, #container.md-theme-default-dark {
	background-color: #161E2E !important;
}
</style>
