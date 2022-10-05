import { is } from "../generic";
import { isArray } from "../array";
import { isObject } from "../object";
import { isSet } from "../set";

export function isMap<K = any, V = any>(input: unknown): input is Map<K, V> {
  return is(input, "Map");
}

export function isWeakMap<K extends object, V = any>(input: unknown): input is WeakMap<K, V> {
  return is(input, "WeakMap");
}

export function map<K = any, V = any>(input: unknown): Map<K, V> {
  if (isMap(input)) {
    return input;
  }

  const m = new Map<K, V>();

  if (isObject(input) || isArray(input) || isSet(input)) {
    const t = isSet(input) ? Array.from(input) : input;

    Object.entries(t).forEach((i) => {
      if (i.length === 2) {
        m.set(i[0] as any, i[1]);
      }
    });
  }

  return m;
}
