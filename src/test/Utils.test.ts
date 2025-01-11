import { getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  it('should return uppercase of a valid string', () => {
    //arrange
    const sut = toUpperCase;
    const expectedResult = 'ABC';

    //act
    const actual = sut('abc');

    //assert
    expect(actual).toBe(expectedResult);
  });

  it('Should return info for valid string', () => {
    const actual = getStringInfo('My-String');

    expect(actual.lowerCase).toBe('my-string'); //toBe is used with primitive types
    expect(actual.extraInfo).toEqual({}); //When we compare objects we should use toEqual.

    expect(actual.characters.length).toBe(9); //valid test but it's not very clean
    expect(actual.characters).toHaveLength(9); //this is a cleaner way to do it

    expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']); //Compare arrays containing characters in the same order
    expect(actual.characters).toContain<string>('M'); //Check if an array contains a character
    expect(actual.characters).toEqual(expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])); //Check if the array contains some characters but we don't know the order

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
