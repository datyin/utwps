import type { SetOptions, WeakSetOptions } from "./index.typings";
export declare function isSet<T = unknown>(input: unknown): input is Set<T>;
export declare function isWeakSet<T extends object>(input: unknown): input is WeakSet<T>;
export declare function set<T = unknown>(input: unknown, opts?: SetOptions<T>): Set<T>;
export declare function weakset<T extends object>(input: unknown, opts?: WeakSetOptions<T>): WeakSet<T>;
