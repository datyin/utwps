import { is } from "../generic";
import type { SetOptions, WeakSetOptions } from "./index.typings";

export function isSet<T = unknown>(input: unknown): input is Set<T> {
  return is(input, "Set");
}

export function isWeakSet<T extends object>(input: unknown): input is WeakSet<T> {
  return is(input, "WeakSet");
}

export function set<T = unknown>(input: unknown, opts: SetOptions<T> = undefined): Set<T> {
  if (isSet<T>(input)) {
    return input;
  }

  return isSet(opts?.default) ? opts!.default : new Set<T>();
}

export function weakset<T extends object>(input: unknown, opts: WeakSetOptions<T> = undefined): WeakSet<T> {
  if (isWeakSet<T>(input)) {
    return input;
  }

  return isWeakSet(opts?.default) ? opts!.default : new WeakSet<T>();
}
