<template>
	<div class="body">
		<Favorites />
		<MaterialCard>
			<h2>Github Contributions:</h2>
			<GithubContributions />
		</MaterialCard>
		<Projects />
	</div>
</template>

<script>
import MaterialCard from '~/components/MaterialCard.vue'
import GithubContributions from '~/components/GithubContributions.vue'
import Favorites from '~/components/Favorites.vue'
import Projects from '~/components/Projects.vue'

export default {
	components: {
		MaterialCard,
		GithubContributions,
		Favorites,
		Projects,
	},
}
</script>

<style>
.body {
	width: 90%;
	margin: auto;
}
</style>
