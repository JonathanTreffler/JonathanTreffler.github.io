module.exports = {
	plugins: [
		"stylelint-scss",
  	],
	extends: "stylelint-config-jonathantreffler",
	rules: {
		"at-rule-no-unknown": null,
		"scss/at-rule-no-unknown": true,
	},
};
