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
.materialCard {
	box-shadow: none;
	color: #424242;
	/* transition: all 0.3s ease-out 0s;
	-webkit-font-smoothing: antialiased;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); */
	/* background-color: white; */
	margin: 4px !important;
}

.materialCard, .materialCard .md-ripple {
	border-radius: 10px;
}

.md-card.md-theme-default-dark {
	background-color: #252F3F;
}

.md-card.md-theme-default {
	color: #424242;
}

.materialCard .md-card-header {
	text-align: center;
}

.materialCard .md-card-header:empty, .materialCard .md-card-content:empty {
	padding-bottom: 0;
}

.materialCard.md-card-content:last-of-type {
	padding-bottom: 16px;
}

</style>
