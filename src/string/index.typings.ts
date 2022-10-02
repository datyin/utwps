export interface StringOptions {
  js?: string;
  joinSymbol?: boolean | 0 | 1;
  trim?: boolean | 0 | 1;
  tss?: boolean | 0 | 1;
  toSingleSpace?: boolean | 0 | 1;
  rs?: boolean | 0 | 1;
  removeSymbols?: boolean | 0 | 1;
  keepDotAndComma?: boolean | 0 | 1;
}

export type StrOptions = StringOptions | null | undefined;
