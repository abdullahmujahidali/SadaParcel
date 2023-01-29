module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'camelcase': [1, {properties: 'always'}],
    'jsx-quotes': [1, 'prefer-single'],
    'max-len': [
      1,
      {
        code: 120,
      },
    ],
    'new-cap': [1, {capIsNewExceptionPattern: '^With*()'}],
    'no-console': 1,
    'no-debugger': 1,
    'no-invalid-this': 0,
    'prefer-const': 0,
    'require-jsdoc': 0,
    'react/jsx-max-props-per-line': [1, {maximum: 1, when: 'always'}],
    'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx']}],
    'react/jsx-sort-props': [1, {ignoreCase: true}],
    'react/sort-prop-types': [1, {ignoreCase: true}],
    'sort-imports': [
      1,
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreMemberSort: true,
      },
    ],
    'no-unused-vars': 1,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['constants', './src/constants'],
          ['components', './src/components'],
          ['hooks', './src/hooks'],
          ['middlewares', './src/middlewares'],
          ['views', './src/views'],
          ['utils', './src/utils'],
          ['layouts', './src/layouts'],
        ],
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
      },
    },
  },
};

