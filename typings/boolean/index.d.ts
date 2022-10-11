import type { BoolOptions } from "./index.typings";
export declare function isBoolean(input: unknown): input is boolean;
export declare function isTrue(input: unknown): input is boolean;
export declare function isFalse(input: unknown): input is boolean;
export declare function bool(input: unknown, opts?: BoolOptions): boolean;
