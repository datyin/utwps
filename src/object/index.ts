import { is, isNil } from "../generic";
import type { ObjectOptions } from "./index.typings";

export function isObject<T = Record<any, any>>(input: unknown): input is T {
  if (isNil(input) || !is<T>(input, "Object")) {
    return false;
  }

  const prototype = Object.getPrototypeOf(input);

  return (
    (
      prototype === null ||
      prototype === Object.prototype ||
      Object.getPrototypeOf(prototype) === null
    ) &&
    !(Symbol.toStringTag in (input as any)) &&
    !(Symbol.iterator in (input as any))
  );
}

export function obj<T = Record<string, unknown>>(input: unknown, opts: ObjectOptions<T> = undefined): T {
  if (isObject<T>(input)) {
    return input as T;
  }

  return isObject<T>(opts?.default) ? (opts!.default as T) : ({} as T);
}
