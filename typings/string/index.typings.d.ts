export interface StringOptions {
    js?: string;
    joinSymbol?: boolean | 0 | 1;
    lc?: boolean | 0 | 1;
    lowerCase?: boolean | 0 | 1;
    uc?: boolean | 0 | 1;
    upperCase?: boolean | 0 | 1;
    trim?: boolean | 0 | 1;
    tss?: boolean | 0 | 1;
    toSingleSpace?: boolean | 0 | 1;
    rs?: boolean | 0 | 1;
    removeSymbols?: boolean | 0 | 1;
    keepDotAndComma?: boolean | 0 | 1;
    default?: string;
}
export declare type StrOptions = StringOptions | null | undefined;
