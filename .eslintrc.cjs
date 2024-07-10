module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "types.d.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "arrow-parens": ["error", "always"],
    "array-callback-return": ["error", { checkForEach: true }],
    "comma-spacing": ["error", { after: true }],
    "constructor-super": ["error"],
    camelcase: "warn",
    complexity: ["warn", 10],
    "comma-spacing": ["warn", { before: false, after: true }],
    "default-param-last": "error",
    "dot-notation": "warn",
    eqeqeq: "warn",
    "func-call-spacing": ["error"],
    "key-spacing": ["error", { afterColon: true }],
    "max-depth": ["warn", 3],
    "max-statements": ["warn", 15],
    "max-len": "error",
    "no-unsafe-optional-chaining": ["error"],
    "no-console": "error",
    "no-cond-assign": "error",
    "no-dupe-keys": "error",
    "no-fallthrough": "warn",
    "no-sparse-arrays": "warn",
    "no-this-before-super": "error",
    "new-cap": "error",
    "no-eval": "warn",
    "no-extra-semi": "warn",
    "no-nested-ternary": "warn",
    "no-plusplus": "warn",
    "no-undef-init": "warn",
    "no-useless-escape": "warn",
    "no-multiple-empty-lines": "error",
    "prefer-const": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: ["error"],
    "space-infix-ops": ["error"],
    "use-isnan": "error",
    "valid-typeof": "error",
  },
};