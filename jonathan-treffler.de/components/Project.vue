<template>
	<a :href="href" style="text-decoration: none;">
		<MaterialCard class="projectContainer">
			<b class="projectName">
				{{ name }}
			</b>
			<div class="iconContainer" :style="{'background-color': iconBackground,}">
				<img class="projectLogo" :src="icon" :style="{width: iconSize, height: iconSize,}">
			</div>
		</MaterialCard>
	</a>
</template>

<script>
import MaterialCard from '~/components/MaterialCard.vue';

export default {
	components: {
		MaterialCard,
	},
	props: {
		name: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: '',
		},
		href: {
			type: String,
			default: '',
		},
		iconBackground: {
			type: String,
			default: 'white',
		},
		iconSize: {
			type: String,
			default: '100%',
		},
	},
};
</script>

<style>
.projectContainer {
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
.iconContainer {
	display: flex;
	height: 8vh;
	width: 8vh;
	align-items: center;
	align-self: center;
}
.projectLogo {
  margin-left: auto;
  margin-right: auto;
  display: block;
  object-fit: contain;
}
.projectName {
	text-align: center;
}
</style>
