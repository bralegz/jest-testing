import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node', //the default jest environment is node
  verbose: true
};


export default config;
