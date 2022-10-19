import { is } from "../generic";
import type { MapOptions, WeakMapOptions } from "./index.typings";

export function isMap<K = any, V = any>(input: unknown): input is Map<K, V> {
  return is(input, "Map");
}

export function isWeakMap<K extends object, V = any>(input: unknown): input is WeakMap<K, V> {
  return is(input, "WeakMap");
}

export function map<K = any, V = any>(input: unknown, opts: MapOptions<K, V> = undefined): Map<K, V> {
  if (isMap<K, V>(input)) {
    return input;
  }

  return isMap(opts?.default) ? opts!.default : new Map();
}

export function weakmap<K extends object, V = any>(input: unknown, opts: WeakMapOptions<K, V> = undefined): WeakMap<K, V> {
  if (isWeakMap<K, V>(input)) {
    return input;
  }

  return isWeakMap(opts?.default) ? opts!.default : new WeakMap();
}
