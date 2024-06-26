/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@newgeness/eslint-config/react-internal.js",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
