<template>
	<TwoColumns class="smoothReveal">
		<MaterialCard>
			<PropertiesContainer>
				<TextWithIcon icon="grin" :content="Math.floor((new Date() - new Date('11-11-2002')) / 1000 / 60 / 60 / 24 / 365.25) + ' Years'" />
				<TextWithIcon icon="flag" content="Germany" />
				<TextWithIcon icon="building" content="Verdigado" />
			</PropertiesContainer>
		</MaterialCard>
		<MaterialCard>
			<PropertiesContainer>
				<TextWithIcon icon="heart" content="Linux" />
				<TextWithIcon icon="heart" content="Nextcloud" />
				<TextWithIcon icon="heart" content="Webdevelopment" />
			</PropertiesContainer>
		</MaterialCard>
	</TwoColumns>
</template>

<script>
import MaterialCard from "~/components/MaterialCard.vue";
import TwoColumns from "~/components/TwoColumns.vue";
import TextWithIcon from "~/components/TextWithIcon.vue";
import PropertiesContainer from "~/components/PropertiesContainer.vue";

export default {
	components: {
		MaterialCard,
		TwoColumns,
		TextWithIcon,
		PropertiesContainer,
	},
};
</script>
