<template>
	<a class="projectLink" style="text-decoration: none;" @click="opened = true;">
		<MaterialCard class="projectContainer">
			<b class="projectName">
				{{ name }}
			</b>
			<div class="iconContainer" :style="{'background-color': iconBackground,}">
				<img class="projectLogo" :src="icon" :style="{width: iconSize, height: iconSize,}" :alt="name + ' Logo'">
			</div>
		</MaterialCard>

		<md-dialog :md-active.sync="opened">
			<md-dialog-title>
				<img class="projectLogo" :src="icon" :alt="name + ' Logo'">
				<br>
				<p style="text-align: center;">{{ name }}</p>
			</md-dialog-title>
			<div class="dialogContainer">
				<div class="chipsContainer">
					<md-chip class="md-accent" v-if="stargazers_count" md-clickable>
						<md-icon><font-awesome-icon icon="star" /></md-icon>
						<span>{{ stargazers_count }} Stars</span>
					</md-chip>
					<md-chip class="md-accent" v-if="size" md-clickable>
						<md-icon><font-awesome-icon icon="file-code" /></md-icon>
						<span>{{ size }} Bytes</span>
					</md-chip>
					<md-chip class="md-accent" v-if="license" md-clickable>
						<md-icon><font-awesome-icon icon="file-contract" /></md-icon>
						<span>{{ license.spdx_id }}</span>
					</md-chip>
				</div>
				<br>
				<p>{{ description }}</p>
			</div>
			<md-dialog-actions>
				<md-button class="md-primary" @click="opened = false">Close</md-button>
			</md-dialog-actions>
		</md-dialog>
	</a>
</template>

<script>
import MaterialCard from "~/components/MaterialCard.vue";

export default {
	components: {
		MaterialCard,
	},
	props: {
		name: {
			type: String,
			default: "",
		},
		icon: {
			type: String,
			default: "",
		},
		href: {
			type: String,
			default: "",
		},
		iconBackground: {
			type: String,
			default: "white",
		},
		iconSize: {
			type: String,
			default: "100%",
		},
		githubPath: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			stargazers_count: undefined,
			size: undefined,
			description: undefined,
			license: undefined,
			opened: false,
		};
	},
	async fetch() {
		if(this.githubPath != "") {
			const apiURL = "https://api.github.com/repos/" + this.githubPath;

			let githubAPIResponse = await this.$axios.$get(apiURL, {
				auth: {
					username: "JonathanTreffler",
					password: this.$config.githubToken,
				},
			});

			console.log(githubAPIResponse);

			this.stargazers_count = githubAPIResponse.stargazers_count;
			this.size = githubAPIResponse.size;
			this.description = githubAPIResponse.description;
			this.license = githubAPIResponse.license;
		}
	},
	fetchOnServer: true,
	methods: {
	},
};
</script>

<style>
.projectLink {
	height: 100%;
	width: 100%;
}
.projectContainer {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
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

.dialogContainer {
	padding: 0 1.8em;
}

.md-chip .md-icon {
	font-size: 18px !important;
    min-height: 18px;
    min-width: 18px;
    height: 18px;
    width: 18px;
	vertical-align: middle;
}

.chipsContainer {
	width: fit-content;
	margin: auto;
}

.chipsContainer, .md-chip span {
	user-select: none;
}
</style>
