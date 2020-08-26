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
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
    gap: 5px;
    grid-auto-rows: 1fr;
}
</style>
