<template>
	<div class="body">
		<Favorites />
		<MaterialCard class="smoothReveal">
			<h2>Github Contributions:</h2>
			<GithubContributions />
		</MaterialCard>
		<Projects />
	</div>
</template>

<script>
import MaterialCard from "~/components/MaterialCard.vue";
import GithubContributions from "~/components/GithubContributions.vue";
import Favorites from "~/components/Favorites.vue";
import Projects from "~/components/Projects.vue";

export default {
	components: {
		MaterialCard,
		GithubContributions,
		Favorites,
		Projects,
	},
};
</script>

<style>
.body {
	width: 90%;
	margin: auto;
}

@keyframes smoothReveal {
	from {
		transform: translateY(8px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

.smoothReveal {
	animation: smoothReveal;
	animation-duration: 1s;
	animation-timing-function: cubic-bezier(0.5, 0, 0, 1);
}
</style>
