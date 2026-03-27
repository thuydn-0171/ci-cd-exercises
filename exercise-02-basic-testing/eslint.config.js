/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        jest: true,
      },
    },
    rules: {
      semi: 'error',
      quotes: 'error',
      'no-unused-vars': 'warn',
    },
  },
];