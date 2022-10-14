import { isDate } from "../date";
import { isRegExp } from "../regex";
import { isBoolean, isTrue } from "../boolean";
import { isNegativeInfinity, isNumber, isPositiveInfinity } from "../number";
import { isSet } from "../set";
import { isNil, isPrimitive } from "../generic";
import { removeSymbols } from "../format";
import type { StrOptions } from "./index.typings";

export function isString(input: unknown): input is string {
  return typeof input === "string";
}

export function isEmptyString(input: unknown): input is "" {
  return typeof input === "string" && input.trim().length === 0;
}

export function isNotEmptyString<T = string>(input: unknown): input is T {
  return typeof input === "string" && input.trim().length > 0;
}

export function str(input: unknown, opts: StrOptions = undefined): string {
  try {
    if (isNil(input) && isString(opts?.default)) {
      return opts!.default;
    }

    let value = "";

    if (isString(input)) {
      value = input;
    }
    else {
      if (isDate(input)) {
        value = input.toISOString();
      }
      else if (isRegExp(input) || isBoolean(input) || isNumber(input) || input instanceof String) {
        value = input.toString();
      }
      else if (isPositiveInfinity(input)) {
        return "∞";
      }
      else if (isNegativeInfinity(input)) {
        return "-∞";
      }
      else if (Array.isArray(input) || isSet(input)) {
        if (isSet(input)) {
          input = Array.from(input);
        }

        const joinSymbol = isString(opts?.joinSymbol) ? opts!.joinSymbol : isString(opts?.js) ? opts!.js : ", ";

        value = (input as any[]).filter((i) => isPrimitive(i)).join(joinSymbol);
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
  catch (error) {
    return "";
  }
}
