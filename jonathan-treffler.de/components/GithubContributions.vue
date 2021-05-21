<template>
	<div>
		<img class="githubContributions" src="githubContributions.svg" alt="Github Contributions History" @click="opened = true;" />

		<md-dialog :md-active.sync="opened">
			<md-dialog-title>Aktivität</md-dialog-title>
			<div class="activityDialogContainer">
				<v-app>
					<v-timeline dense>
						<v-timeline-item
							right
							:icon="event.icon"
							fill-dot color="#252F3F"
							icon-color="white"
							v-for="(event, index) in events"
							:key="'event-' + index"
						>
							{{ event.message }}
						</v-timeline-item>
					</v-timeline>
				</v-app>
			</div>
			<md-dialog-actions>
				<md-button class="md-primary" @click="opened = false">Close</md-button>
			</md-dialog-actions>
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
					const message = "Pull Request #" + activity.payload.number + " of " + activity.repo.name + " opened";

					this.events.push({
						type: "PullRequestOpened",
						repo: activity.repo.name,
						id: activity.payload.number,
						icon: "mdi-source-pull",
						message,
					});
				} else if(activity.payload.action == "closed") {
					const message = "Pull Request #" + activity.payload.number + " of " + activity.repo.name + " closed";

					this.events.push({
						type: "PullRequestClosed",
						repo: activity.repo.name,
						id: activity.payload.number,
						icon: "mdi-source-merge",
						message,
					});
				} else {
					console.log(activity);
				}
			}

			if(activity.type == "IssueCommentEvent") {
				if(activity.payload.action == "created") {
					const message = "Commented on #" + activity.payload.issue.number + " of " + activity.repo.name;

					this.events.push({
						type: "Commented",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
						icon: "mdi-comment",
						message,
					});
				} else {
					console.log(activity);
				}
			}

			if(activity.type == "CreateEvent") {
				if(activity.payload.ref_type == "repository") {
					const message = "Created Repository " + activity.repo.name;

					this.events.push({
						type: "RepositoryCreated",
						repo: activity.repo.name,
						icon: "mdi-plus",
						message,
					});
				} else if(activity.payload.ref_type == "branch") {
					const message = "Created branch in " + activity.repo.name;

					this.events.push({
						type: "BranchCreated",
						repo: activity.repo.name,
						icon: "mdi-source-branch",
						message,
					});
				} else {
					console.log(activity);
				}
			}


			if(activity.type == "IssuesEvent") {
				if(activity.payload.action == "opened") {
					const message = "Issue #" + activity.payload.issue.number + " of " + activity.repo.name + " opened";

					this.events.push({
						type: "IssueOpened",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
						icon: "mdi-alert-circle-outline",
						message,
					});
				} else if(activity.payload.action == "closed") {
					const message = "Issue #" + activity.payload.issue.number + " of " + activity.repo.name + " closed";

					this.events.push({
						type: "IssueClosed",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
						icon: "mdi-check",
						message,
					});
				} else {
					console.log(activity);
				}
			}

			if(activity.type == "ForkEvent") {
				const message = "Forked " + activity.repo.name;

				this.events.push({
					type: "RepositoryForked",
					repo: activity.repo.name,
					icon: "mdi-source-fork",
					message,
				});
			}


			if(activity.type == "PushEvent") {
				let commitCount = activity.payload.commits.filter(commit => commit.author.name != "Upptime Bot").length;

				if (commitCount > 0) {

					let message = "";
					if(commitCount == 1) {
						message = "Pushed " + commitCount + " commit to " + activity.repo.name;
					} else {
						message = "Pushed " + commitCount + " commits to " + activity.repo.name;
					}

					this.events.push({
						type: "CommitsPushed",
						repo: activity.repo.name,
						number: commitCount,
						icon: "mdi-source-commit",
						message,
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

.activityDialogContainer {
	overflow-y: auto;
	margin: 15px;
}

.v-application {
	background: transparent !important;
}

.v-application--wrap {
	min-height: 0;
}

.v-timeline-item__body {
	align-self: center;
}
</style>
