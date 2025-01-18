export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringInfo: stringInfo) {
  //calculates the complexity of the objects multiplying the number of keys of extra info by the number of keys of string Info itself
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}
