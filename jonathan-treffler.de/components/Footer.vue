<template>
	<div class="footer">
		<a href="https://github.com/JonathanTreffler">
			<font-awesome-icon :icon="['fab', 'github']" size="3x" alt="Jonathan Treffler | Github" />
		</a>
		<a href="https://twitter.com/treffler_j">
			<font-awesome-icon :icon="['fab', 'twitter']" size="3x" alt="Jonathan Treffler | Twitter" />
		</a>
		<a href="https://www.npmjs.com/~jonathan_treffler">
			<font-awesome-icon :icon="['fab', 'npm']" size="3x" alt="Jonathan Treffler | NPM" />
		</a>
		<a href="https://dev.to/jonathantreffler">
			<font-awesome-icon :icon="['fab', 'dev']" size="3x" alt="Jonathan Treffler | DEV" />
		</a>
		<a href="https://www.youtube.com/channel/UCeNkM_i1i9_Ver9njtxLAqw">
			<font-awesome-icon :icon="['fab', 'youtube']" size="3x" alt="Jonathan Treffler | YouTube" />
		</a>
	</div>
</template>
<style>
.footer {
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 4%;
}

.footer > a {
	margin-right: 6px;
}

.md-app.md-theme-default-dark .footer > a > svg {
	color: white;
}

.md-app.md-theme-default .footer > a > svg {
	color: black;
}
</style>
