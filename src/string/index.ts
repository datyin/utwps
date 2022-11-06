import { isTrue } from "../boolean";
import { getOneOf, isNil, isPrimitive } from "../generic";
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

export function str<T = string>(input: unknown, opts: StringOptions<T> = undefined): T {
  let value: string = "";

  if (isNil(input)) {
    value = isString(opts?.default) ? opts!.default : "";
  }
  else if (isString(input)) {
    value = input;
  }
  else if (isPrimitive(input) || input instanceof String) {
    value = input.toString();
  }
  if (opts) {
    if (opts.match instanceof RegExp) {
      value = opts.match.test(value) ? value : isString(opts?.default) ? opts!.default : "";
    }

    const list = opts?.oneOf?.filter((i) => isString(i)) ?? [];

    if (list.length > 0) {
      const found = getOneOf<T>(value as T, {
        list,
        default: opts?.default,
        caseSensitive: opts.oneOfCaseSensitive
      });

      if (!isString(found)) {
        throw new Error("Default value is not in the option list!");
      }

      value = found;
    }

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

  return value as T;
}
