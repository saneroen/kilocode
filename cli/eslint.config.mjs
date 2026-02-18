import { config } from "@roo-code/config-eslint/base"

/** @type {import("eslint").Linter.Config} */
export default [
	...config,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "error",
		},
	},
	{
		ignores: ["dist/*", "scripts/*"],
	},
]
