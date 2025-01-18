//All the functions inside this module are just mocks. They are empty, nothing works.
//The callback passed as a second argument is to keep all the original functionalities except the calculateComplexity function
jest.mock('../../app/doubles/OtherUtils', () => ({
  ...jest.requireActual('../../app/doubles/OtherUtils'),
  calculateComplexity: () => {
    return 10;
  }
}));

jest.mock('uuid', () => ({
  v4: () => '123'
}));

import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('module tests', () => {
  test('calculateComplexity', () => {
    const result = OtherUtils.calculateComplexity({} as any);

    expect(result).toBe(10);
  });

  test('keep other functions', () => {
    const result = OtherUtils.toUpperCase('abc');

    expect(result).toBe('ABC');
  });

  test('string with id', () => {
    const result = OtherUtils.toLowerCaseWithId('ABC');

    expect(result).toBe('abc123');
  });
});
