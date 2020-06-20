<template>
	<img :src="'https://ghchart.rshah.org/' + username"></img>
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
