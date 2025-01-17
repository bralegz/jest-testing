import { PasswordChecker } from '../../app/pass_checker/PasswordChecker';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  //Initialize the system under test
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it('It should return false if the password length is less than 8', () => {
    const actual = sut.checkPassword('1234567');
    expect(actual).toBe(false);
  });

  it('It should return true if the password is at least 8', () => {
    const actual = sut.checkPassword('12345678Aa');

    expect(actual).toBe(true);
  });


  it('Password with no uppercase letter is invalid', () => {
    const actual = sut.checkPassword('1234abcd');

    expect(actual).toBe(false);
  });

  it('Password with uppercase letters is ok', () => {
    const actual = sut.checkPassword('1234abcdA');

    expect(actual).toBe(true);
  })

  it('Password with no lowercase letter is invalid', () => {
    const actual = sut.checkPassword('1232ABCD');

    expect(actual).toBe(false);
  });

  it('Password with lowercase letters is ok', () => {
    const actual = sut.checkPassword('1232ABCDa');

    expect(actual).toBe(true);
  });


});
