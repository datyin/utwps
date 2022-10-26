import type { GetOneOfOptions } from "./index.typings";
export declare function is<T>(input: unknown, type: string): input is T;
export declare function isNil(input: unknown): input is null | undefined;
export declare function isPrimitive(input: unknown): input is string | number | boolean;
export declare function isEqual(input1: unknown, input2: unknown, caseSensitive?: boolean | 0 | 1): boolean;
export declare function isOneOf<T = any>(input: unknown, options: T[], caseSensitive?: boolean | 0 | 1): input is T;
export declare function getOneOf<T = unknown>(input: T, options?: GetOneOfOptions<T>): T | undefined;
