import type { StrOptions } from "./index.typings";
export declare function isString(input: unknown): input is string;
export declare function isEmptyString(input: unknown): input is "";
export declare function isNotEmptyString<T = string>(input: unknown): input is T;
export declare function str(input: unknown, opts?: StrOptions): string;
