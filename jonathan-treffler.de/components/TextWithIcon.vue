<template>
	<div class="textWithIcon">
		<p>
			<font-awesome-icon :icon="icon" />
			<span>{{ content }}</span>
		</p>
	</div>
</template>

<script>

export default {
	props: {
		icon: {
			type: String,
			default: "",
		},
		content: {
			type: String,
			default: "",
		},
	},
};
</script>

<style>
.textWithIcon {
	vertical-align: middle;
	width: 100%;
}
.textWithIcon p>* {
	vertical-align: middle;
}
.textWithIcon {
	font-size: 4vh !important;
}
</style>
