import type { ArrOptions } from "./index.typings";
export declare function isArray<T = unknown>(input: unknown): input is T[];
export declare function isEmptyArray<T = unknown>(input: unknown): input is T[];
export declare function isNotEmptyArray<T = unknown>(input: unknown): input is T[];
export declare function arr<T>(input: unknown, opts?: ArrOptions<T>): T[];
