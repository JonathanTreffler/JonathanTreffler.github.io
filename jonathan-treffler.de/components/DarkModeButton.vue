<template>
	<div class="darkModeButtonContainer" @click="switchTheme">
		<md-ripple>
			<font-awesome-icon icon="sun" class="darkModeButtonIcon fa-3x" :class="{'show': !darkMode, 'hide': darkMode}" />
			<font-awesome-icon icon="moon" class="darkModeButtonIcon fa-3x" :class="{'show': darkMode, 'hide': !darkMode}" />
		</md-ripple>
	</div>
</template>

<script>

export default {
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
	watch: {
		darkMode(val) {
			this.$vuetify.theme.dark = val;
		},
	},
	created() {
		this.$vuetify.theme.dark = this.darkMode;
	},
};
</script>
<style>
.darkModeButtonContainer {
	position: absolute;
	top: 10px;
	right: 20px;
	width: 3em;
	height: 3em;
}

.darkModeButtonIcon {
	position: absolute;
	top: 0;
	left: 0;
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
