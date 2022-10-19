import { isBoolean, isTrue } from "../boolean";
import { isNegativeInfinity, isNumber, isPositiveInfinity } from "../number";
import { isNil } from "../generic";
import { removeSymbols } from "../format";
import type { StringOptions } from "./index.typings";

export function isString(input: unknown): input is string {
  return typeof input === "string";
}

export function isEmptyString(input: unknown): input is "" {
  return typeof input === "string" && input.trim().length === 0;
}

export function isNotEmptyString<T = string>(input: unknown): input is T {
  return typeof input === "string" && input.trim().length > 0;
}

export function str(input: unknown, opts: StringOptions = undefined): string {
  try {
    if (isNil(input)) {
      return isString(opts?.default) ? opts!.default : "";
    }

    let value = "";

    if (isString(input)) {
      value = input;
    }
    else {
      if (isBoolean(input) || isNumber(input) || input instanceof String || typeof input === "bigint") {
        value = input.toString();
      }
      else if (isPositiveInfinity(input)) {
        return "∞";
      }
      else if (isNegativeInfinity(input)) {
        return "-∞";
      }
    }

    if (opts) {
      if (isTrue(opts.rs) || isTrue(opts.removeSymbols)) {
        value = removeSymbols(value, isTrue(opts.keepDotAndComma));
      }

      if (isTrue(opts.tss) || isTrue(opts.toSingleSpace)) {
        value = value.replace(/\s+/g, " ");
      }

      if (isTrue(opts.trim)) {
        value = value.trim();
      }

      if (isTrue(opts.lowerCase) || isTrue(opts.lc)) {
        value = value.toLowerCase();
      }
      else if (isTrue(opts.upperCase) || isTrue(opts.uc)) {
        value = value.toUpperCase();
      }
    }

    return value;
  }
  catch (_) {
    return isString(opts?.default) ? opts!.default : "";
  }
}
