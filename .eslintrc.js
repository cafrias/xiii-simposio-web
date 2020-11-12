module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["**/__mocks__/*", "docker/**/*.js"],
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    jest: true,
  },
  rules: {
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
  },
};
