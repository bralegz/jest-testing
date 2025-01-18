import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app/doubles'; //check coverage from here
const baseTestDir = '<rootDir>/src/test/doubles'; //run the tests from here

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node', //the default jest environment is node
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`]
};

export default config;
