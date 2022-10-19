import type { ObjectOptions } from "./index.typings";
export declare function isObject<T = Record<any, any>>(input: unknown): input is T;
export declare function obj<T = Record<string, unknown>>(input: unknown, opts?: ObjectOptions<T>): T;
