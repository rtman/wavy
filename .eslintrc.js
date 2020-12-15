module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'jest', 'prettier', 'simple-import-sort'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json'],
      },
      // for mobile specifically, can remove later when coding mobile
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react-native/no-inline-styles': 'off',
        'simple-import-sort/sort': 'error',
        'no-use-before-define': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, variables: false },
        ],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var'],
          },
          { blankLine: 'always', prev: 'directive', next: '*' },
          { blankLine: 'any', prev: 'directive', next: 'directive' },
          { blankLine: 'always', prev: ['case', 'default'], next: '*' },
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
