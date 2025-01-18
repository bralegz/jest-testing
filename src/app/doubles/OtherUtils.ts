export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  //calculates the complexity of the objects multiplying the number of keys of extra info by the number of keys of string Info itself
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCallback(arg: string, callBack: LoggerServiceCallBack) {
  if (!arg) {
    callBack('Invalid Argument!');
    return;
  }

  callBack(`Called function with ${arg}`);

  return arg.toUpperCase();
}

export class OtherStringUtils {

  public callExternalService() {
    //lets assume this method calls some internet service and we don't want to do that when we run our tests
    console.log('Calling external service...')
  }

  public toUpperCase(arg: string): string {
    return arg.toUpperCase();
  }

  public logString(arg: String): void {
    console.log(arg);
  }
}
