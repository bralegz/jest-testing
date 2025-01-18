import { calculateComplexity } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
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
