import { is, isNil } from "../generic";
import { isArray } from "../array";
import { isMap } from "../map";
import { isSet } from "../set";
import type { ObjOptions } from "./index.typings";

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
    !(Symbol.toStringTag in input) &&
    !(Symbol.iterator in input)
  );
}

export function obj<T = Record<any, any>>(input: unknown, opts: ObjOptions<T> = undefined): T {
  if (isObject(input)) {
    return input as T;
  }

  if (isArray(input) || isMap(input) || isSet(input)) {
    const output = {};

    Array.from(input.entries()).forEach((e) => {
      if (e.length === 2) {
        output[e[0]] = e[1];
      }
    });

    return output as T;
  }

  return isObject(opts?.default) ? (opts!.default as T) : ({} as T);
}
