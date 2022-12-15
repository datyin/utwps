import type { ArrayOptions } from "./index.typings";

/**
 * @param input
 * @returns true if input is array
 */
export function isArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input);
}

/**
 * @param input
 * @returns true if input is array and have no elements
 */
export function isEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length === 0;
}

/**
 * @param input
 * @returns true if input is array and contains elements
 */
export function isNotEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length > 0;
}

/**
 * Ensures that input is array. If not, it will return the options.default value if set or empty array
 *
 * @param input
 * @param opts
 * @returns valid array of input
 */
export function arr<T = unknown>(input: unknown, opts: ArrayOptions<T> = undefined): T[] {
  if (Array.isArray(input)) {
    return input as T[];
  }

  return Array.isArray(opts?.default) ? (opts!.default as T[]) : [];
}
