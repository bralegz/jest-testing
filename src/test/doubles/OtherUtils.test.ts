import { calculateComplexity, toUpperCaseWithCallback } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
  it('ToUpperCase - calls callback for invalid argument', () => {
    //The fake is the callback function that we are passing just to help us to perform the test. In reality this function might be doing something but in this case it is suficcient if the callback does nothing.
    const actual = toUpperCaseWithCallback('', () => {});
    expect(actual).toBeUndefined();
  })


  it('ToUpperCase - calls callback for invalid argument', () => {
    const actual = toUpperCaseWithCallback('abc', () => {});
    expect(actual).toBe('ABC');
  });


  it('Calculates complexity', () => {
    //This is an example of stubs. They are just incomplete objects with just the information we need. We won't use them inside the assertions. They are just helper objects to help us to do our tests
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfo'
      }
    };

    const actual = calculateComplexity(someInfo as any);

    expect(actual).toBe(10);
  });


});
