<template>
	<img class="githubContributions" :src="'https://ghchart.rshah.org/' + username"></img>
</template>

<script>
export default {
	props: {
		username: {
			default: '',
			type: String,
		},
	},
}
</script>

<style>
.githubContributions {
	width: 100%;
}
</style>
