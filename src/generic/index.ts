import { isObject } from "../object";

export function is<T>(input: unknown, type: string): input is T {
  return Object.prototype.toString.call(input) === `[object ${type}]`;
}

export function isNil(input: unknown): input is null | undefined {
  return input === null || typeof input === "undefined" || (typeof input === "number" && isNaN(input));
}

export function isPrimitive(input: unknown): input is string | number | boolean {
  return (
    typeof input === "boolean" ||
    typeof input === "string" ||
    typeof input === "bigint" ||
    (
      typeof input === "number" &&
      !isNaN(input) &&
      isFinite(input)
    )
  );
}

export function isOneOf<T = any>(input: unknown, options: T[]): input is T {
  if (!Array.isArray(options) || options.length === 0) {
    return false;
  }

  try {
    if (Array.isArray(input) || isObject(input)) {
      input = JSON.stringify(input);
      return options.findIndex((option) => JSON.stringify(option) === input) > -1;
    }

    return options.findIndex((option) => option === input) > -1;
  }
  catch (_) {
    return false;
  }
}
