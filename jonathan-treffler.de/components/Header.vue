<template>
	<div class="header smoothReveal">
		<MaterialCard>
			<template v-slot:header>
				<h1 style="font-size: 2.5em;">Jonathan Treffler</h1>
			</template>
		</MaterialCard>
	</div>
</template>

<script>
import MaterialCard from "~/components/MaterialCard.vue";

export default {
	components: {
		MaterialCard,
	},
};
</script>

<style>
.header {
	width: 90%;
	margin: auto;
	height: fit-content;
}

h1 {
	text-align: center;
}
</style>
