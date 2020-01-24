module.exports = {
  root: true,

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  plugins: [
    '@typescript-eslint',
  ],

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  env: {
    browser: true,
    node: true,
    commonjs: true,
  },

  globals: {
    __statics: true,
    process: true
  },

  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/named': 'off',
    'import/export': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'no-unused-expressions': ['warn', {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
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
  },
};
