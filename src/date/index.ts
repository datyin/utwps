import { is } from "../generic";
import { isPositiveNumber } from "../number";
import { isNotEmptyString } from "../string";
import type { DateOptions } from "./index.typings";

/**
 * Check if date is correct date object
 * @param input
 * @returns true if date is valid
 */
export function isDate(input: unknown): input is Date {
  return is<Date>(input, "Date") && isPositiveNumber(input.getTime());
}

/**
 * Converts valid date string or timestamp into date
 *
 * @param input
 * @param options
 * @returns valid date object
 */
export function date(input: unknown, options?: DateOptions) {
  const value = isDate(input) || isNotEmptyString(input) || isPositiveNumber(input) ? new Date(input) : undefined;
  return isDate(value) ? value : isDate(options?.default) ? options!.default : new Date();
}
