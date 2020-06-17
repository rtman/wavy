module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
        'jest',
        'prettier',
        'sort-imports-es6-autofix',
        'simple-import-sort',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json'],
      },
      // for mobile specifically, can remove later when coding mobile
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react-native/no-inline-styles': 'off',
        // 'simple-import-sort/sort': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, variables: false },
        ],
        'sort-imports-es6-autofix/sort-imports-es6': [
          2,
          {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          },
        ],
      },
      extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'plugin:jest/recommended',
      ],
    },
    {
      files: ['*.js'],
      plugins: ['prettier'],
      extends: ['eslint:recommended'],
      env: { commonjs: true },
      parserOptions: {
        ecmaVersion: 2018,
      },
    },
  ],
};
