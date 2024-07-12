import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration: UserConfig = {
	extends: ["@commitlint/config-conventional"],
	formatter: "@commitlint/format",
	parserPreset: {
		parserOpts: {
			noteKeywords: ["jira"],
		},
	},
	rules: {
		"scope-enum": [
			RuleConfigSeverity.Error,
			"always",
			[
				"frontend",
				"backend",
				"security",
			],
		],
		"scope-empty": [RuleConfigSeverity.Warning, "never"],
		"footer-leading-blank": [RuleConfigSeverity.Error, "always"],
		"body-leading-blank": [RuleConfigSeverity.Error, "always"],
		"tvx-jira-rule": [RuleConfigSeverity.Warning, "always"],
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

export default Configuration;
