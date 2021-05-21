<template>
	<div>
		<img class="githubContributions" src="githubContributions.svg" alt="Github Contributions History" @click="opened = true;" />

		<md-dialog :md-active.sync="opened">
			<md-dialog-title>Aktivität</md-dialog-title>
			<div class="dialogContainer">
				<v-app>
					<v-theme-provider dark>
						<v-timeline dense>
							<v-timeline-item right :icon="'mdi-star'" fill-dot color="#252F3F" icon-color="white">timeline item</v-timeline-item>
							<v-timeline-item right icon-color="white">timeline item</v-timeline-item>
						</v-timeline>
					</v-theme-provider>
				</v-app>
			</div>
		</md-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			opened: false,
			events: [],
		};
	},
	async fetch() {
		const auth = {
			username: "JonathanTreffler",
			password: this.$config.githubToken,
		};

		const activityAPIURL = "https://api.github.com/users/JonathanTreffler/events";

		console.log("Fetching User Activity");

		let activityAPIResponse = await this.$axios.$get(activityAPIURL, {auth, });

		//console.log(activityAPIResponse);

		for(let activity of activityAPIResponse) {

			if(activity.type == "PullRequestEvent") {

				if(activity.payload.action == "closed") {
					console.log("Pull Request #", activity.payload.number, " closed");
				} else {
					console.log(activity);
				}
			}
		}

		/*
		Typen:

		PullRequestOpen
		PullRequestComment
		PullRequestMerged

		IssueOpened
		IssueComment
		IssueClosed

		CommitPushed

		RepositoryCreated
		RepositoryForked

		*/
	},
	fetchOnServer: true,
};
</script>

<style>
.githubContributions {
	width: 100%;
}

.dialogContainer {
	padding: 0 1.8em;
}

.theme--light.v-application {
	background: transparent !important;
}

.v-application--wrap {
	min-height: 0;
}

</style>
