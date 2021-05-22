<template>
	<span>{{ $dayjs(date).fromNow() }}</span>
</template>

<script>
export default  {
	props: [
		"date",
	],
	mounted() {
		let self = this;
		setInterval(function() {
			self.$forceUpdate();
		}, 10000);
	},
};
</script>
