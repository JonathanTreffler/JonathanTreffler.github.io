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
				if(activity.payload.action == "opened") {
					//console.log("Pull Request #", activity.payload.number, " of ", activity.repo.name, "opened");

					this.events.push({
						type: "PullRequestOpened",
						repo: activity.repo.name,
						id: activity.payload.number,
					});
				} else if(activity.payload.action == "closed") {
					//console.log("Pull Request #", activity.payload.number, "of", activity.repo.name, "closed");

					this.events.push({
						type: "PullRequestClosed",
						repo: activity.repo.name,
						id: activity.payload.number,
					});
				} else {
					console.log(activity);
				}
			}

			if(activity.type == "IssueCommentEvent") {
				if(activity.payload.action == "created") {
					//console.log("Commented on #", activity.payload.issue.number, "of", activity.repo.name);

					this.events.push({
						type: "Commented",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
					});
				} else {
					console.log(activity);
				}
			}

			if(activity.type == "CreateEvent") {
				if(activity.payload.ref_type == "repository") {
					//console.log("Created ", activity.repo.name);

					this.events.push({
						type: "RepositoryCreated",
						repo: activity.repo.name,
					});
				} else if(activity.payload.ref_type == "branch") {
					//console.log("Created branch in ", activity.repo.name);

					this.events.push({
						type: "BranchCreated",
						repo: activity.repo.name,
					});
				} else {
					console.log(activity);
				}
			}


			if(activity.type == "IssuesEvent") {
				if(activity.payload.action == "opened") {
					//console.log("Issue #", activity.payload.issue.number, "of", activity.repo.name, "opened");

					this.events.push({
						type: "IssueOpened",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
					});
				} else if(activity.payload.action == "closed") {
					//console.log("Issue #", activity.payload.issue.number, "of", activity.repo.name, "closed");

					this.events.push({
						type: "IssueClosed",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
					});
				} else {
					console.log(activity);
				}
			}

			if(activity.type == "ForkEvent") {
				//console.log("Forked", activity.repo.name);

				this.events.push({
					type: "RepositoryForked",
					repo: activity.repo.name,
				});
			}


			if(activity.type == "PushEvent") {
				let commitCount = activity.payload.commits.filter(commit => commit.author.name != "Upptime Bot").length;

				if (commitCount > 0) {
					//console.log("Pushed", commitCount, "commits to", activity.repo.name);

					this.events.push({
						type: "CommitsPushed",
						repo: activity.repo.name,
						number: commitCount,
					});
				}
			}

		}

		console.log(this.events);
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
