interface NumberOptionsObject<T> {
    min?: number;
    max?: number;
    oneOf?: T[];
    default?: T;
}
export declare type NumberOptions<T = number> = NumberOptionsObject<T> | null | undefined;
export {};
