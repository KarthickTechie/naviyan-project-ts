import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["**/*.js"],
    rules: {
      "max-lines": ["error", 500],
      "max-lines-per-function": ["error", 3],
    },
    extends: [tseslint.configs.disableTypeChecked],
  },
);
