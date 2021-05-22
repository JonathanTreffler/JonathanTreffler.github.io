<template>
	<div>
		<img class="githubContributions" src="githubContributions.svg" alt="Github Contributions History" @click="opened = true;" />

		<md-dialog :md-active.sync="opened">
			<md-dialog-title>Activity</md-dialog-title>
			<div class="activityDialogContainer">
				<v-app>
					<v-timeline dense>
						<v-timeline-item
							v-scroll-reveal="{container: '.activityDialogContainer'}"
							right
							:icon="event.icon"
							fill-dot color="#252F3F"
							icon-color="white"
							v-for="(event, index) in events"
							:key="'event-' + index"
						>
							<a :href="event.url" target="_blank">{{ event.message }}</a>
							<br>
							<relative-time :date="event.timestamp"></relative-time>
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
import RelativeTime from "~/components/RelativeTime.vue";


export default {
	components: {
		RelativeTime,
	},
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

		for(let activity of activityAPIResponse) {

			if(activity.type == "PullRequestEvent") {
				if(activity.payload.action == "opened") {
					const message = "Opened pull request #" + activity.payload.number + " in " + activity.repo.name;

					this.events.push({
						type: "PullRequestOpened",
						repo: activity.repo.name,
						id: activity.payload.number,
						icon: "mdi-source-pull",
						message,
						url: activity.payload.pull_request.html_url,
						timestamp: activity.created_at,
					});
				} else if(activity.payload.action == "closed") {
					const merged = activity.payload.pull_request.merged_at != null;

					if(merged) {
						const message = "Merged pull request #" + activity.payload.number + " in " + activity.repo.name;

						this.events.push({
							type: "PullRequestMerged",
							repo: activity.repo.name,
							id: activity.payload.number,
							icon: "mdi-source-merge",
							message,
							url: activity.payload.pull_request.html_url,
							timestamp: activity.created_at,
						});
					} else {
						const message = "Closed pull request #" + activity.payload.number + " in " + activity.repo.name;

						this.events.push({
							type: "PullRequestClosed",
							repo: activity.repo.name,
							id: activity.payload.number,
							icon: "mdi-source-branch-remove",
							message,
							url: activity.payload.pull_request.html_url,
							timestamp: activity.created_at,
						});
					}

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
						url: activity.payload.comment.html_url,
						timestamp: activity.created_at,
					});
				}
			}

			if(activity.type == "CreateEvent") {
				const url = "https://github.com/" + activity.repo.name;

				if(activity.payload.ref_type == "repository") {
					const message = "Created Repository " + activity.repo.name;

					this.events.push({
						type: "RepositoryCreated",
						repo: activity.repo.name,
						icon: "mdi-plus",
						message,
						url,
						timestamp: activity.created_at,
					});
				} else if(activity.payload.ref_type == "branch") {
					const message = "Created branch in " + activity.repo.name;

					this.events.push({
						type: "BranchCreated",
						repo: activity.repo.name,
						icon: "mdi-source-branch",
						message,
						url,
						timestamp: activity.created_at,
					});
				}
			}


			if(activity.type == "IssuesEvent") {
				if(activity.payload.action == "opened") {
					const message = "Opened issue #" + activity.payload.issue.number + " of " + activity.repo.name;

					this.events.push({
						type: "IssueOpened",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
						icon: "mdi-alert-circle-outline",
						message,
						url: activity.payload.issue.html_url,
						timestamp: activity.created_at,
					});
				} else if(activity.payload.action == "closed") {
					const message = "Closed issue #" + activity.payload.issue.number + " of " + activity.repo.name;

					this.events.push({
						type: "IssueClosed",
						repo: activity.repo.name,
						id: activity.payload.issue.number,
						icon: "mdi-check",
						message,
						url: activity.payload.issue.html_url,
						timestamp: activity.created_at,
					});
				}
			}

			if(activity.type == "ForkEvent") {
				const message = "Forked " + activity.repo.name;

				this.events.push({
					type: "RepositoryForked",
					repo: activity.repo.name,
					icon: "mdi-source-fork",
					message,
					url: activity.payload.forkee.html_url,
					timestamp: activity.created_at,
				});
			}


			if(activity.type == "PushEvent") {
				let commits = activity.payload.commits.filter(commit => commit.author.name != "Upptime Bot");

				for(let commit of commits) {
					const message = "Created a commit in " + activity.repo.name;

					const url = "https://github.com/" + activity.repo.name + "/commit/" + commit.sha;

					this.events.push({
						type: "CommitCreated",
						repo: activity.repo.name,
						icon: "mdi-source-commit",
						message,
						url,
						timestamp: activity.created_at,
					});
				}
			}

		}
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
