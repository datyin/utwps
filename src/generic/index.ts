import { isArray, isNotEmptyArray } from "../array";
import { jsonize } from "../json";
import { isObject } from "../object";
import type { GetOneOfOptions } from "./index.typings";

export function is<T>(input: unknown, type: string): input is T {
  return Object.prototype.toString.call(input) === `[object ${type}]`;
}

export function isNil(input: unknown): input is null | undefined {
  return input === null || typeof input === "undefined" || (typeof input === "number" && isNaN(input));
}

export function isPrimitive(input: unknown): input is string | number | boolean {
  return (typeof input === "string" || typeof input === "bigint" || typeof input === "boolean" || (
    typeof input === "number" && !isNaN(input) && isFinite(input)
  ));
}

export function isEqual(input1: unknown, input2: unknown, caseSensitive: boolean | 0 | 1 = true): boolean {
  const prototypeOfInput1 = Object.prototype.toString.call(input1);
  const prototypeOfInput2 = Object.prototype.toString.call(input2);

  const isSameType = (prototypeOfInput1 === prototypeOfInput2 && typeof input1 === typeof input2);

  if (!isSameType) {
    return false;
  }

  const j1 = jsonize(input1, 0);
  const j2 = jsonize(input2, 0);

  if (caseSensitive) {
    return j1 === j2;
  }

  return j1.toLowerCase() === j2.toLowerCase();
}

export function isOneOf<T = any>(input: unknown, options: T[], caseSensitive: boolean | 0 | 1 = true): input is T {
  if (!isNotEmptyArray<T>(options)) {
    return false;
  }

  for (let i = 0; i < options.length; i++) {
    if (isEqual(input, options[i], caseSensitive)) {
      return true;
    }
  }

  return false;
}

export function getOneOf<T = unknown>(input: T, options: GetOneOfOptions<T> = undefined): T | undefined {
  if (!isNotEmptyArray<T>(options?.list)) {
    return undefined;
  }

  const len = options!.list.length;

  // search for main value
  for (let i = 0; i < len; i++) {
    if (isEqual(input, options!.list[i], options?.caseSensitive)) {
      return options!.list[i];
    }
  }

  // search for default
  if (!isNil(options?.default)) {
    for (let i = 0; i < len; i++) {
      if (isEqual(options!.default, options!.list[i], options?.caseSensitive)) {
        return options!.list[i];
      }
    }
  }

  // return first value
  return options!.list[0];
}

export function getOneOfIndex<T = unknown>(input: unknown, keys: any[]): T | null {
  if (!isNotEmptyArray(keys)) {
    return null;
  }

  const keysLen = keys.length;

  if (isObject(input) || isArray(input) || input instanceof Set) {
    if (input instanceof Set) {
      input = Array.from(input.values());
    }

    for (let i = 0; i < keysLen; i++) {
      const key = `${keys[i]}`;

      if (key in (input as any)) {
        return (input as any)[key] as T;
      }
    }
  }
  else if (input instanceof Map) {
    for (let i = 0; i < keysLen; i++) {
      if (input.has(keys[i])) {
        return input.get(keys[i]);
      }
    }
  }

  return null;
}
