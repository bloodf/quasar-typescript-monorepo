module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue']
  },

  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:vue-i18n/recommended',
  ],

  plugins: [
    'vue'
  ],

  rules: {
    'vue-i18n/no-dynamic-keys': 'error',
    'vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.vue', '.ts']
      }],
    'import/extensions': ['error', 'never', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
  },

  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*.json'
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {},
    }
  }
};
