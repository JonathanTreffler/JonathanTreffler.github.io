<template>
	<md-card :md-with-hover="hover" class="materialCard">
		<md-ripple>
			<md-card-header>
				<slot name="header"></slot>
			</md-card-header>
			<md-card-content>
				<slot />
			</md-card-content>
		</md-ripple>
	</md-card>
</template>

<script>
export default {
	components: {
	},
	props: {
		hover: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style>

.md-app-content .md-card {
	margin-right: 0;
	margin-left: 0;
}

.materialCard {
	box-shadow: none;
	color: #424242;
	/* transition: all 0.3s ease-out 0s;
	-webkit-font-smoothing: antialiased;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); */
	/* padding-bottom: 16px;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 16px; */
	border-radius: 10px;
	/* background-color: white; */
	margin: 4px;
}

.md-card.md-theme-default-dark {
	background-color: #252F3F;
}
</style>
