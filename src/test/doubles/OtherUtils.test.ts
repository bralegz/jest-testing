import { calculateComplexity, OtherStringUtils, toUpperCaseWithCallback } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
  describe.only('OtherStringUtils tests with spies', () => {
    //initial setup
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    //tests implementation
    test('Use a spy to track calls', () => {
      //tracks the toUpperCase public method of the sut class
      const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
      sut.toUpperCase('asa');
      expect(toUpperCaseSpy).toHaveBeenCalledWith('asa');
    });

    test('Use a spy to track calls to other module', () => {
      //tracks the console object when we call it with the logString method
      const consoleLogSpy = jest.spyOn(console, 'log');
      sut.logString('abc');
      expect(consoleLogSpy).toHaveBeenCalledWith('abc');
    });

    test.only('Use a spy to replace the implementation of a method', () => {
      jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
        console.log('calling mocked implementation...');
      });

      sut.callExternalService();
    });
  });

  describe('Tracking callbacks with Jest mocks', () => {
    //jest mock
    const callbackMock = jest.fn();

    //cleanup after each test
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCallback('', callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackMock).toHaveBeenCalledWith('Invalid Argument!');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });

    it('calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCallback('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(callbackMock).toHaveBeenCalledWith('Called function with abc');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });
  });

  describe.only('Tracking callbacks', () => {
    let callbackArgs = [];
    let timesCalled = 0;

    function callbackMock(arg: string) {
      callbackArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      //cleanup after each test
      callbackArgs = [];
      timesCalled = 0;
    });

    it('calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCallback('', callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackArgs).toContain('Invalid Argument!');
      expect(timesCalled).toBe(1);
    });

    it('calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCallback('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(callbackArgs).toContain(`Called function with abc`);
      expect(timesCalled).toBe(1);
    });
  });

  it('ToUpperCase - calls callback for invalid argument', () => {
    //The fake is the callback function that we are passing just to help us to perform the test. In reality this function might be doing something but in this case it is suficcient if the callback does nothing.
    const actual = toUpperCaseWithCallback('', () => {});
    expect(actual).toBeUndefined();
  });

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
