export default {
	extends: ["@commitlint/config-conventional"],
	parserPreset: {
		parserOpts: {
			noteKeywords: ["jira"],
		},
	},
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
		"footer-leading-blank": [2, "always"],
		"body-leading-blank": [2, "always"],
		"tvx-jira-rule": [1, "always"],
	},
	plugins: [
		{
			rules: {
				"tvx-jira-rule": (obj) => {
					const { footer } = obj; // footer/noteKeywords are not case sensitive
					const jiraRegex = new RegExp(`[A-Z]+-\\d+`);
					if (!footer) {
						return [false, "footer is missing"];
					}

					return [
						jiraRegex.test(footer),
						"footer should contain JIRA reference like ID-123",
					];
				},
			},
		},
	],
};
