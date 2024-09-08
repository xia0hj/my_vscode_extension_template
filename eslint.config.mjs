// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

/**
 * This tells VS Code to not show errors in your editor, but still have the ability to auto-fix them.
 * You can also set "severity": "info" to keep squiggly lines but not have them look like errors.
 * @example
 *
 */

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    stylistic.configs["recommended-flat"],
    {
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/semi": ["warn", "always"],
            "@stylistic/quotes": ["warn", "double"],
            "@stylistic/indent": ["warn", 4],
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },
);

/**
 * This tells VS Code to not show errors in your editor, but still have the ability to auto-fix them.
 * You can also set "severity": "info" to keep squiggly lines but not have them look like errors.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ignoreStylisticHint = `
{
  "eslint.rules.customizations": [
    {
      "rule": "@stylistic/*",
      "fixable": true,
      "severity": "off"
    }
  ]
}
`;