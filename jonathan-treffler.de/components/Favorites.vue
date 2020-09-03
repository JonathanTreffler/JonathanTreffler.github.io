<template>
	<TwoColumns>
		<MaterialCard>
			<PropertiesContainer>
				<TextWithIcon icon="face" content="17 Years" />
				<TextWithIcon icon="flag" content="Germany" />
				<TextWithIcon icon="business" content="FRACTAVA" />
			</PropertiesContainer>
		</MaterialCard>
		<MaterialCard>
			<PropertiesContainer>
				<TextWithIcon icon="favorite" content="Linux" />
				<TextWithIcon icon="favorite" content="Nextcloud" />
				<TextWithIcon icon="favorite" content="Webdevelopment" />
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
