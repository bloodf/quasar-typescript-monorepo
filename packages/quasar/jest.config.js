/* eslint-disable @typescript-eslint/no-var-requires */
const baseJest = require('../../jest.config');

module.exports = {
  ...baseJest,
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.vue',
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.jsx',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'vue',
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
  ],
  moduleNameMapper: {
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js',
    '^test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.js',
    '^quasar$': '<rootDir>/node_modules/quasar/dist/quasar.common.js',
    '^~/(.*)$': '<rootDir>/$1',
    '.*css$': '<rootDir>/test/jest/utils/stub.css',
    '^app/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^router/(.*)$': '<rootDir>/src/router/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^boot/(.*)$': '<rootDir>/src/boot/$1',
    '^statics/(.*)$': '<rootDir>/src/statics/$1',
  },
  transform: {
    '.*\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },

  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!quasar/lang)',
  ],

  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
};
