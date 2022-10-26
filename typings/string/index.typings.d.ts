interface StringOptionsObject<T> {
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
    oneOf?: T[];
    oneOfCaseSensitive?: boolean | 0 | 1;
    default?: T;
}
export declare type StringOptions<T> = StringOptionsObject<T> | null | undefined;
export {};
