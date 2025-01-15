import { getStringInfo, toUpperCase, StringUtils } from '../app/Utils';

describe('Utils test suite', () => {
  
  describe.only('StringUtils tests', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    afterEach(() => {
      //cleaning mocks
      console.log('Teardown');
    });

    it.only('Should return correct uppercase', () => {
      const actual = sut.toUpperCase('abc');

      expect(actual).toBe('ABC');
    });

    it('Should throw error on invalid argument - function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }

      expect(expectError).toThrow('Invalid argument');
    });

    it('Should throw error on invalid argument - arrow function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }

      expect(() => sut.toUpperCase('')).toThrow('Invalid argument');
    });

    it('Should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        done('getStringInfo should throw an error for invalid argument!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument');
        done();
      }
    });
  });

  it('should return uppercase of a valid string', () => {
    //arrange
    const sut = toUpperCase;
    const expectedResult = 'ABC';

    //act
    const actual = sut('abc');

    //assert
    expect(actual).toBe(expectedResult);
  });

  //Parametrized tests are used to test multiple cases in a straightforward way
  describe('ToUpperCaseExamples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' }
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-String should', () => {
    test('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters.length).toBe(9); //valid test but it's not very clean
      expect(actual.characters).toHaveLength(9); //this is a cleaner way to do it
    });

    test('return right lower case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.lowerCase).toBe('my-string'); //toBe is used with primitive types
    });

    test('return right uppercase case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING'); //toBe is used with primitive types
    });

    test('return right characters', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']); //Compare arrays containing characters in the same order
      expect(actual.characters).toContain<string>('M'); //Check if an array contains a character
      expect(actual.characters).toEqual(expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])); //Check if the array contains some characters but we don't know the order
    });

    test('return defined extra info', () => {
      const actual = getStringInfo('My-String');

      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });

    test('return right extra info', () => {
      const actual = getStringInfo('My-String');

      expect(actual.extraInfo).toEqual({}); //When we compare objects we should use toEqual.
    });
  });
});
