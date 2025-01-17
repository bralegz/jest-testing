export enum PasswordErrors {
  SHORT = 'Password is too short',
  NO_UPPER_CASE = 'Upper case letter required',
  NO_LOWER_CASE = 'Lower case letter required',
  NO_NUMBER = 'Password should contain a number'
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    this.checkForLength(password, reasons);

    this.checkForLowerCase(password, reasons);

    this.checkForUpperCase(password, reasons);

    this.checkForNumber(password, reasons);

    return {
      valid: reasons.length > 0 ? false : true,
      reasons
    };
  }

  //We put the if statemens inside separate private methods because it's more readable
  private checkForLength(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
    if (password == password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
  }

  private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
    if (password == password.toLocaleUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
  }

  private checkForNumber(password: string, reasons: PasswordErrors[]) {
    const matchNumber = /\d/;

    if (!matchNumber.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }
}
