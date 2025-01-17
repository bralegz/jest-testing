import { PasswordChecker, PasswordErrors } from '../../app/pass_checker/PasswordChecker';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  //Initialize the system under test
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it('Password with less than 8 chars is invalid', () => {
    const actual = sut.checkPassword('1234567');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it('Password with more than 8 chars is ok', () => {
    const actual = sut.checkPassword('12345678Aa');
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it('Password with no uppercase letter is invalid', () => {
    const actual = sut.checkPassword('1234abcd');

    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it('Password with uppercase letters is ok', () => {
    const actual = sut.checkPassword('1234abcdA');

    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it('Password with no lowercase letter is invalid', () => {
    const actual = sut.checkPassword('ABCD');

    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it('Password with lowercase letters is ok', () => {
    const actual = sut.checkPassword('1232ABCDa');

    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it('Password without a number is invalid', () => {
    const actual = sut.checkPassword('ABCD');

    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it('Password with number is ok', () => {
    const actual = sut.checkPassword('1232ABCDa');

    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });

  it('Complex password is valid', () => {
    const actual = sut.checkPassword('1234abcD');

    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });
});
