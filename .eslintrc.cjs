// .eslintrc.cjs
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { tsconfigRootDir: __dirname },
  plugins: ["@typescript-eslint", "unused-imports", "import"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  rules: {
    // เก็บโปรเจ็กต์ให้สะอาด
    "unused-imports/no-unused-imports": "error",

    // จัดระเบียบ import ให้สวยอ่านง่าย
    "import/order": ["error", {
      "alphabetize": { "order": "asc", "caseInsensitive": true },
      "newlines-between": "always",
      "groups": [
        ["builtin", "external"],
        ["internal", "parent", "sibling", "index", "object", "type"]
      ]
    }],

    // TS rules พื้นฐาน
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  settings: {
    // ให้ plugin:import รู้จัก path ของ TS/Next
    "import/resolver": {
      typescript: {}
    }
  }
};

