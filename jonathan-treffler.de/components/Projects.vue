<template>
	<div>
		<ProjectsContainer title="School Squirrel">
			<Project
				name="School Squirrel"
				icon="https://raw.githubusercontent.com/SchoolSquirrel/ci/master/logo/logo.png"
				href="https://github.com/SchoolSquirrel/SchoolSquirrel"
			/>
			<Project
				name="School Squirrel Fcm Relay"
				icon="https://raw.githubusercontent.com/SchoolSquirrel/ci/master/logo/logo.png"
				href="https://github.com/SchoolSquirrel/SquirrelFcmRelay"
			/>
			<Project
				name="School Squirrel Chat"
				icon="https://raw.githubusercontent.com/SchoolSquirrel/ci/master/logo/logo.png"
				href="https://github.com/SchoolSquirrel/SquirrelChatUI"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="Jugend Forscht 2019">
			<Project
				name="Jufo: Quantum Computing"
				icon="/projects/jugend-forscht.jpg"
				href="https://github.com/Quantum-Computing-Jufo-2019/JuFo-2019-Quantum-Computing"
			/>
			<Project
				name="Jufo: Quantum Computer GUI"
				icon="/projects/jugend-forscht.jpg"
				href="https://github.com/Quantum-Computing-Jufo-2019/quantum-computer-GUI"
			/>
			<Project
				name="Jufo: Dwave Quantum Computer Animation"
				icon="/projects/jugend-forscht.jpg"
				href="https://github.com/Quantum-Computing-Jufo-2019/dwave-quantum-computer-3d-animation"
			/>
			<Project
				name="domspatzen-quantum.de"
				icon="/projects/jugend-forscht.jpg"
				href="https://github.com/Quantum-Computing-Jufo-2019/quantum-computing-jufo-2019.github.io"
			/>
			<Project
				name="Jufo: n Queens Chess App"
				icon="https://raw.githubusercontent.com/Quantum-Computing-Jufo-2019/n-Queens-Android/master/src/nDamen_Schachfeld_Android/icon-144.png"
				href="https://github.com/Quantum-Computing-Jufo-2019/n-Queens-Android"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="King of Planets">
			<Project
				name="King of Planets"
				icon="https://raw.githubusercontent.com/fractava/King-of-Planets/master/King_of_Planets/data/Planet2.png"
				style="image-rendering: pixelated;"
				href="https://github.com/fractava/King-of-Planets"
			/>
			<Project
				name="King of Planets Server"
				icon="https://raw.githubusercontent.com/fractava/King-of-Planets/master/King_of_Planets/data/Planet2.png"
				style="image-rendering: pixelated;"
				href="https://github.com/fractava/King-of-Planets-Server"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="Home Assistant">
			<Project
				name="Home Assistant Remote CEC"
				icon="https://www.home-assistant.io/images/home-assistant-logo.svg"
				href="https://github.com/TessyPowder/Home-Assistant-remote-cec"
			/>
			<Project
				name="HACS Websocket Service"
				icon="https://www.home-assistant.io/images/home-assistant-logo.svg"
				href="https://github.com/TessyPowder/hacs-websocket-service"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="Quill">
			<Project
				name="mathQuill Blot"
				icon="/projects/quill.png"
				href="https://github.com/TessyPowder/Quill-mathQuill-blot"
			/>
			<Project
				name="mathLive Blot"
				icon="/projects/quill.png"
				href="https://github.com/TessyPowder/Quill-mathLive-blot"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="Miscellaneous">
			<Project
				name="Flowupload"
				icon="https://raw.githubusercontent.com/e-alfred/flowupload/master/img/flowupload.svg"
				icon-background="#0082c9"
				icon-size="90%"
				href="https://github.com/e-alfred/flowupload"
			/>
			<Project
				name="wann-tritt-scheuer-zurück.de"
				icon="https://raw.githubusercontent.com/TessyPowder/Wann-tritt-Scheuer-zurueck/master/src/assets/scheuer.png"
				href="https://github.com/TessyPowder/Wann-tritt-Scheuer-zurueck"
			/>
			<Project
				name="Kdenlive VNC Docker"
				icon="https://raw.githubusercontent.com/TessyPowder/kdenlive-vnc-docker/master/img/kdenlive-logo.png"
				href="https://github.com/TessyPowder/kdenlive-vnc-docker"
			/>
		</ProjectsContainer>
	</div>
</template>

<script>
import Project from '~/components/Project.vue'
import ProjectsContainer from '~/components/ProjectsContainer.vue'

export default {
	components: {
		Project,
		ProjectsContainer,
	},
}
</script>
