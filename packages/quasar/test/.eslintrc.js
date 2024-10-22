module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
    commonjs: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue']
  },


  extends: [
    '../.eslintrc.js',
    'plugin:jest/recommended',
  ],

  plugins: ['jest'],

  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
};
