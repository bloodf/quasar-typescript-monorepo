module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/typescript',
    'plugin:vue-i18n/recommended',
  ],

  plugins: [
    '@typescript-eslint',
    'vue'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  env: {
    browser: true
  },

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true
  },

  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    'vue-i18n/no-dynamic-keys': 'error',
    'vue-i18n/no-unused-keys': ['error', {
      extensions: ['.js', '.vue', '.ts']
    }]
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*.json'
    }
  }
};
