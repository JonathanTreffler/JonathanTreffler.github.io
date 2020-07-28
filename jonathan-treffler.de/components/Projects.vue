<template>
	<div>
		<ProjectsContainer title="FRACATVA">
			<Project
				name="Notes Core"
				icon="/projects/Notes.webp"
				href="https://github.com/fractava/notes-core"
			/>
			<Project
				name="Notes Desktop"
				icon="/projects/Notes.webp"
				href="https://github.com/fractava/notes-desktop"
			/>
			<Project
				name="fractava.com"
				icon="/projects/fractava.webp"
				href="https://gitlab.com/fractava/fractava.com"
			/>
			<Project
				name="biblio"
				icon="https://assets.gitlab-static.net/uploads/-/system/project/avatar/19941333/favicon.png"
				href="https://gitlab.com/fractava/biblio"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="School Squirrel">
			<Project
				name="School Squirrel"
				icon="/projects/schoolSquirrel.webp"
				href="https://github.com/SchoolSquirrel/SchoolSquirrel"
			/>
			<Project
				name="School Squirrel Fcm Relay"
				icon="/projects/schoolSquirrel.webp"
				href="https://github.com/SchoolSquirrel/SquirrelFcmRelay"
			/>
			<Project
				name="School Squirrel Chat"
				icon="/projects/schoolSquirrel.webp"
				href="https://github.com/SchoolSquirrel/SquirrelChatUI"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="Jugend Forscht Quantum 2019">
			<Project
				name="Jufo: Quantum Computing"
				icon="/projects/quantum.webp"
				href="https://github.com/Quantum-Computing-Jufo-2019/JuFo-2019-Quantum-Computing"
			/>
			<Project
				name="Jufo: Quantum Computer GUI"
				icon="/projects/quantum.webp"
				href="https://github.com/Quantum-Computing-Jufo-2019/quantum-computer-GUI"
			/>
			<Project
				name="Jufo: Dwave Quantum Computer Animation"
				icon="/projects/quantum.webp"
				href="https://github.com/Quantum-Computing-Jufo-2019/dwave-quantum-computer-3d-animation"
			/>
			<Project
				name="domspatzen-quantum.de"
				icon="/projects/quantum.webp"
				href="https://github.com/Quantum-Computing-Jufo-2019/quantum-computing-jufo-2019.github.io"
			/>
			<Project
				name="Jufo: n Queens Chess App"
				icon="https://raw.githubusercontent.com/Quantum-Computing-Jufo-2019/n-Queens-Android/master/src/nDamen_Schachfeld_Android/icon-144.png"
				href="https://github.com/Quantum-Computing-Jufo-2019/n-Queens-Android"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="Jugend Forscht Ameisen 2019">
			<Project
				name="Jufo: Ameisen 2019"
				icon="/projects/jugend-forscht.webp"
				href="https://github.com/jufo-ameisen-2019/Jufo-Ameisen-2019"
			/>
			<Project
				name="Ameisen Demo"
				icon="/projects/jugend-forscht.webp"
				href="https://github.com/jufo-ameisen-2019/ameisen-demo"
			/>
		</ProjectsContainer>
		<ProjectsContainer title="Jugend Forscht 2016">
			<Project
				name="Chickomat"
				icon="https://raw.githubusercontent.com/chickomat/Chickomat/master/Bilder/icon.png"
				href="https://github.com/chickomat/Chickomat"
			/>
			<Project
				name="chickomat.github.io"
				icon="https://raw.githubusercontent.com/chickomat/Chickomat/master/Bilder/icon.png"
				href="https://chickomat.github.io"
			/>
			<Project
				name="Chickomat Raspberry Software"
				icon="https://raw.githubusercontent.com/chickomat/Chickomat/master/Bilder/icon.png"
				href="https://github.com/chickomat/raspberry-control-software"
			/>
			<Project
				name="Chickomat Arduino Software"
				icon="https://raw.githubusercontent.com/chickomat/Chickomat/master/Bilder/icon.png"
				href="https://github.com/chickomat/arduino-control-software"
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
				icon="/projects/quill.webp"
				href="https://github.com/TessyPowder/Quill-mathQuill-blot"
			/>
			<Project
				name="mathLive Blot"
				icon="/projects/quill.webp"
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
				icon="/projects/scheuer.webp"
				href="https://github.com/TessyPowder/Wann-tritt-Scheuer-zurueck"
			/>
			<Project
				name="Kdenlive VNC Docker"
				icon="/projects/kdenlive.webp"
				href="https://github.com/TessyPowder/kdenlive-vnc-docker"
			/>
		</ProjectsContainer>
	</div>
</template>

<script>
import Project from '~/components/Project.vue';
import ProjectsContainer from '~/components/ProjectsContainer.vue';

export default {
	components: {
		Project,
		ProjectsContainer,
	},
};
</script>
