import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Ensure compatibility and proper configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      // Add other rules or plugins as needed
    }
  }
];

export default eslintConfig;
