import { isObject } from "../object";
import type { ArrOptions } from "./index.typings";

export function isArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input);
}

export function isEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length === 0;
}

export function isNotEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length > 0;
}

export function arr<T>(input: unknown, opts: ArrOptions<T> = undefined): T[] {
  try {
    if (Array.isArray(input)) {
      return input as T[];
    }
    else if (input instanceof Set) {
      return Array.from(input.values());
    }
    else if (input instanceof Map) {
      return Array.from(input.entries()) as T[];
    }
    else if (isObject(input)) {
      return Object.entries(input) as T[];
    }
  }
  catch (error) {
    console.error("Failed to execute arr", input, opts, "Returning fallback value.");
  }

  return Array.isArray(opts?.default) ? (opts!.default as T[]) : [];
}
