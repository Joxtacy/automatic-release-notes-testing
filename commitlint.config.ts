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
	},
};

export default Configuration;
