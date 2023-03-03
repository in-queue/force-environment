/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 2,
    'import/no-cycle': [2, { ignoreExternal: true }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'type', 'internal', 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */
        }
      }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    'prefer-const': 'error'
  },
  settings: {
    jest: {
      version: 28
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
}
