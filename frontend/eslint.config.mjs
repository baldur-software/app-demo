import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [
      "src/**/*.ts"
    ]
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    ignores: [
      "**/*.spec.ts",
      "coverage/**/*",
      "dist/**/*"
    ]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];