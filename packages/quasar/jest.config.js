const baseJest = require('../../jest.config');

module.exports = {
  ...baseJest,
  setupFilesAfterEnv: [
    '<rootDir>/test/jest/jest.setup.js'
  ],
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.vue',
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.jsx'
  ],
  testMatch: [
    '<rootDir>/test/jest/__tests__/**/*.spec.js',
    '<rootDir>/test/jest/__tests__/**/*.test.js',
    '<rootDir>/src/**/__tests__/*_jest.spec.js'
  ],
  moduleFileExtensions: [
    'vue',
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js',
    '^test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.js',
    '^quasar$': '<rootDir>/node_modules/quasar/dist/quasar.common.js',
    '^~/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '.*css$': '<rootDir>/test/jest/utils/stub.css'
  },
  transform: {
    '.*\\.vue$': 'vue-jest',
    '.*\\.js$': 'babel-jest',
    '.*\\.ts?(x)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    // use these if NPM is being flaky
    // '.*\\.vue$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/vue-jest',
    // '.*\\.js$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!quasar/lang)'
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue'
  ]
}
