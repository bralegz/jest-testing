import { PasswordChecker } from '../../app/pass_checker/PasswordChecker';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  //Initialize the system under test
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it('It should do nothing for the moment', () => {
    sut.checkPassword();
  });
});
