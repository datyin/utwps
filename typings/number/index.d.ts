import type { NumberOptions } from "./index.typings";
export declare function isNumber(input: unknown): input is number;
export declare function isPositiveNumber(input: unknown): input is number;
export declare function isNegativeNumber(input: unknown): input is number;
export declare function isInifnity(input: unknown): input is number;
export declare function isPositiveInfinity(input: unknown): input is number;
export declare function isNegativeInfinity(input: unknown): input is number;
export declare function numInRange(input: unknown, min?: number, max?: number, fallback?: number): number;
export declare function num<T = number>(input: unknown, opts?: NumberOptions<T>): T;
