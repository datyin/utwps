import type { ArrayOptions } from "./index.typings";

export function isArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input);
}

export function isEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length === 0;
}

export function isNotEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length > 0;
}

export function arr<T>(input: unknown, opts: ArrayOptions<T> = undefined): T[] {
  if (Array.isArray(input)) {
    return input as T[];
  }

  return Array.isArray(opts?.default) ? (opts!.default as T[]) : [];
}
