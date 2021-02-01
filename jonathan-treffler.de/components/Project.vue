<template>
	<a class="projectLink" style="text-decoration: none;" @click="open">
		<MaterialCard class="projectContainer">
			<b class="projectName">
				{{ name }}
			</b>
			<div class="iconContainer" :style="{'background-color': iconBackground,}">
				<img class="projectLogo" :src="icon" :style="{width: iconSize, height: iconSize,}" :alt="name + ' Logo'">
			</div>
		</MaterialCard>
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
		}
	},
	fetchOnServer: true,
	methods: {
		open() {
			this.$swal({
				title: this.name,
				imageUrl: this.icon,
				html:
					"<i class='fas fa-star'></i> " + this.stargazers_count + " Stars <br>"+
					"<i class='fas fa-file-code'></i> " + this.size + " Bytes <br>",
			});
		},
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
</style>
