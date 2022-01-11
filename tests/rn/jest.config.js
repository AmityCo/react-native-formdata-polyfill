/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// eslint-disable-next-line
const { defaults: preset } = require('ts-jest/presets');

module.exports = {
  ...preset,
  preset: 'react-native',

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      babelConfig: true,
    },
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
  testEnvironment: 'jsdom',
};
