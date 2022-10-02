import { is } from "../generic";

export function isSet<T = any>(input: unknown): input is Set<T> {
  return is(input, "Set");
}

export function isWeakSet<T extends object>(input: unknown): input is WeakSet<T> {
  return is(input, "WeakSet");
}
