<template>
	<TwoColumns>
		<MaterialCard>
			<PropertiesContainer>
				<TextWithIcon icon="grin" content="18 Years" />
				<TextWithIcon icon="flag" content="Germany" />
				<TextWithIcon icon="building" content="FRACTAVA" />
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
