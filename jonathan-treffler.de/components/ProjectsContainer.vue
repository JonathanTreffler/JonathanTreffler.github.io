<template>
	<div style="padding-top: 10px;">
		<p>{{ title }}</p>
		<div class="projectsContainer">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	components: {
	},
	props: {
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

<style>
.projectsContainer {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>
