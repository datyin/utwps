import { is } from "../generic";

export function isMap<K = any, V = any>(input: unknown): input is Map<K, V> {
  return is(input, "Map");
}

export function isWeakMap<K extends object, V = any>(input: unknown): input is WeakMap<K, V> {
  return is(input, "WeakMap");
}
