<template>
	<div class="projectContainer" @click="opened = true;">
		<MaterialCard class="projectCard">
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
				<div class="chipsContainer">
					<md-chip class="md-accent" v-for="topic of topics" v-bind:key="'topic' + topic" md-clickable>
						<md-icon><font-awesome-icon icon="star" /></md-icon>
						<span>{{ topic }}</span>
					</md-chip>
				</div>
				<br v-if="Array.isArray(topics) && topics.length">
				<div class="chipsContainer">
					<md-chip class="md-accent" v-for="link of links" v-bind:key="link + link.href" md-clickable @click="openLink(link)">
						<md-icon><font-awesome-icon icon="link" /></md-icon>
						<span>{{ link.name }}</span>
					</md-chip>
				</div>
				<br v-if="Array.isArray(links) && links.length">
				<p v-if="description">{{ description }}</p>
			</div>
			<md-dialog-actions>
				<md-button class="md-primary" @click="opened = false">Close</md-button>
			</md-dialog-actions>
		</md-dialog>
	</div>
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
		gitlabPath: {
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
			topics: [],
			opened: false,
			links: [],
		};
	},
	async fetch() {
		if(this.githubPath != "") {
			console.log("Fetching Github API for information about ", this.githubPath);

			const repositoryAPIURL = "https://api.github.com/repos/" + this.githubPath;
			const auth = {
				username: "JonathanTreffler",
				password: this.$config.githubToken,
			};

			let repositoryAPIResponse = await this.$axios.$get(repositoryAPIURL, {auth, });

			//console.log(repositoryAPIResponse);

			this.stargazers_count = repositoryAPIResponse.stargazers_count;
			this.size = repositoryAPIResponse.size;
			this.description = repositoryAPIResponse.description;
			this.license = repositoryAPIResponse.license;

			if(repositoryAPIResponse.homepage) {
				this.links.push({
					name: "Website",
					href: repositoryAPIResponse.homepage,
				});
			}

			this.links.push({
				name: "Github",
				href: "https://github.com/" + this.githubPath,
			});

			const topicsAPIURL = "https://api.github.com/repos/" + this.githubPath + "/topics";

			let topicsAPIResponse = await this.$axios.$get(topicsAPIURL, {
				auth,
				headers: {
					"Accept": "application/vnd.github.mercy-preview+json",
				},
			});

			this.topics = topicsAPIResponse.names;
		} else if(this.gitlabPath) {
			console.log("Fetching Gitlab API for information about ", this.gitlabPath);

			const repositoryAPIURL = "https://gitlab.com/api/v4/projects/" + this.gitlabPath.replace("/", "%2F");

			let repositoryAPIResponse = await this.$axios.$get(repositoryAPIURL);

			this.stargazers_count = repositoryAPIResponse.star_count;
			this.description = repositoryAPIResponse.description;
			this.topics = repositoryAPIResponse.tag_list;

			this.links.push({
				name: "Gitlab",
				href: "https://gitlab.com/" + this.gitlabPath,
			});
		}
	},
	fetchOnServer: true,
	methods: {
		openLink(link) {
			window.open(link.href, "_blank");
		},
	},
};
</script>

<style>
.projectContainer {
	height: 100%;
	width: 100%;
}
.projectCard {
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

.md-chip {
	margin-bottom: 5px !important;
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

.md-dialog-container {
	border-radius: 10px;
}

@media (min-width: 600px) {
	.md-dialog-container {
		max-width: 50%;
	}

}

@media (max-width: 600px) {
	.md-dialog-fullscreen .chipsContainer {
		display: flex;
		overflow-x: scroll;
		width: 100%;
		height: fit-content;
	}
}
</style>
