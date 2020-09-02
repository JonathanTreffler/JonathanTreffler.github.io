<template>
  <div class="twoColumns">
    <slot />
  </div>
</template>

<script>
export default {
	components: {
	}
};
</script>

<style>
.twoColumns {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	height: fit-content;
}
.twoColumns>* {
	width: 50%;
	min-height: 100% !important;
}
@media (pointer:none), (pointer:coarse) {
	.twoColumns {
		flex-direction: column;
	}
	.twoColumns>* {
		width: 100%;
	}
}
</style>
