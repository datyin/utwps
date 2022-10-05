import { isArray } from "../array";
import { is } from "../generic";

export function isSet<T = unknown>(input: unknown): input is Set<T> {
  return is(input, "Set");
}

export function isWeakSet<T extends object>(input: unknown): input is WeakSet<T> {
  return is(input, "WeakSet");
}

export function set<T = unknown>(input: unknown): Set<T> {
  if (isSet<T>(input)) {
    return input;
  }
  
  if (isArray(input)) {
    return new Set<T>([...input] as T[]);
  }

  return new Set<T>();
}
