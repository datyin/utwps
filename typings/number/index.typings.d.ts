export interface NumberOptions {
    min?: number;
    max?: number;
    array?: "sum" | "subtraction";
    oneOf?: number[];
    default?: number;
}
export declare type NumOptions = NumberOptions | null | undefined;
