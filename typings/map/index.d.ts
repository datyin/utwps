import type { MapOptions, WeakMapOptions } from "./index.typings";
export declare function isMap<K = any, V = any>(input: unknown): input is Map<K, V>;
export declare function isWeakMap<K extends object, V = any>(input: unknown): input is WeakMap<K, V>;
export declare function map<K = any, V = any>(input: unknown, opts?: MapOptions<K, V>): Map<K, V>;
export declare function weakmap<K extends object, V = any>(input: unknown, opts?: WeakMapOptions<K, V>): WeakMap<K, V>;
