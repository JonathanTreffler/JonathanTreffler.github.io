<template>
	<div class="darkModeButtonContainer" @click="switchTheme">
		<MaterialCard>
			<font-awesome-icon icon="sun" class="darkModeButtonIcon fa-3x" :class="{'show': !darkMode, 'hide': darkMode}" />
			<font-awesome-icon icon="moon" class="darkModeButtonIcon fa-3x" :class="{'show': darkMode, 'hide': !darkMode}" />
		</MaterialCard >
	</div>
</template>

<script>
import MaterialCard from "~/components/MaterialCard.vue";

export default {
	components: {
		MaterialCard,
	},
	props: {
		theme: {
			type: String,
			default: "default",
		},
	},
	computed: {
		darkMode() {
			return this.theme == "default-dark";
		},
	},
	methods: {
		switchTheme() {
			if(this.theme == "default") {
				this.$emit("update:theme", "default-dark");
			} else {
				this.$emit("update:theme", "default");
			}
		},
	},
};
</script>
<style>
.darkModeButtonContainer {
	position: absolute;
	top: 10px;
	right: 20px;
	width: fit-content;
	height: fit-content;
}

.darkModeButtonIcon {
	position: absolute;
	top: 0;
	left: 0;
	width: 30px;
	height: 30px;
}

.show {
	-webkit-animation: show-icon .3s forwards;
	animation: show-icon .3s forwards;
}

.hide {
	-webkit-animation: hide-icon .3s forwards;
	animation: hide-icon .3s forwards;
}

@-webkit-keyframes show-icon {
	0% {
		opacity: 0;
		transform: scaleY(0);
	}
	to {
		opacity: 1;
		transform: scaleY(1);
	}
}

@keyframes show-icon {
	0% {
		opacity: 0;
		transform: scaleY(0);
	}
	to {
		opacity: 1;
		transform: scaleY(1);
	}
}

@-webkit-keyframes hide-icon {
	0% {
		opacity: 1;
		transform: scaleY(1);
	}
	to {
		opacity: 0;
		transform: scaleY(0);
	}
}

@keyframes hide-icon {
	0% {
		opacity: 1;
		transform: scaleY(1);
	}
	to {
		opacity: 0;
		transform: scaleY(0);
	}
}
</style>
