export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"scope-enum": [
			2,
			"always",
			[
				"frontend",
				"backend",
				"security",
			],
		],
		"scope-empty": [1, "never"],
	},
};
