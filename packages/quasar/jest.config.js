/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');
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
  testMatch: [
    '<rootDir>/test/jest/__tests__/**/*.spec.js',
    '<rootDir>/test/jest/__tests__/**/*.test.js',
    '<rootDir>/src/**/__tests__/*_jest.spec.js',
    '<rootDir>/test/jest/__tests__/**/*.spec.ts',
    '<rootDir>/test/jest/__tests__/**/*.test.ts',
    '<rootDir>/src/**/__tests__/*_jest.spec.ts',
  ],
  moduleFileExtensions: [
    'vue',
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
  ],
  moduleNameMapper: {
    '^vue$': '<rootDir>/../../node_modules/vue/dist/vue.common.js',
    '^test-utils$': '<rootDir>/../../node_modules/@vue/test-utils/dist/vue-test-utils.js',
    '^quasar$': '<rootDir>/../../node_modules/quasar/dist/quasar.common.js',
    '^~/(.*)$': '<rootDir>/$1',
    '^jest/utils/(.*)$': '<rootDir>/test/jest/utils/$1',
    '^statics/(.*)$': '<rootDir>/src/statics/$1',
    ...pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
  },
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    '\\.(css|less|scss|sass|styl)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    '<rootDir>/../../node_modules/',
    '<rootDir>/node_modules/',

  ],

  snapshotSerializers: [
    '<rootDir>/../../node_modules/jest-serializer-vue',
  ],
  globals: {
    'ts-jest': {
      tsConfig: './test/tsconfig.json',
      diagnostics: true,
    },
    'vue-jest': {
      tsConfig: './test/tsconfig.json',
      experimentalCSSCompile: true,
    }
  },
};
