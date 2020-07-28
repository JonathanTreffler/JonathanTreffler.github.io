<template>
	<div id="container">
		<Header />
		<Body />
	</div>
</template>

<script>
import Header from '~/components/Header.vue';
import Body from '~/components/Body.vue';

export default {
	components: {
		Header,
		Body,
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
