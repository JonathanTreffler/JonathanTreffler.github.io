<template>
	<div class="textWithIcon">
		<p>
			<i class="material-icons">{{ icon }}</i>
			<span>{{ content }}</span>
		</p>
	</div>
</template>

<script>

export default {
	props: {
		icon: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
	},
}
</script>

<style>
.textWithIcon {
	vertical-align: middle;
	width: 100%;
}
.textWithIcon p>* {
	vertical-align: middle;
}
.textWithIcon i, .textWithIcon span {
	font-size: 4vh !important;
}
</style>
