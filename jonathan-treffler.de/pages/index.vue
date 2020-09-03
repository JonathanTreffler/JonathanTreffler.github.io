<template>
	<div id="container">
		<Header />
		<Body />
		<Footer />
	</div>
</template>

<script>
import Header from "~/components/Header.vue";
import Body from "~/components/Body.vue";
import Footer from "~/components/Footer.vue";

export default {
	components: {
		Header,
		Body,
		Footer,
	},
};
</script>

<style>
#container {
	width: 100%;
	min-height: 100vh;
	background-color: #F8F8F8;
	padding: 10px;
	padding-bottom: 10vh;
	font-family:Roboto, sans-serif;
}
</style>
