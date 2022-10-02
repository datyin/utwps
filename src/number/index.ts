import { isString } from "../string";
import { isDate } from "../date";
import { isArray, isNotEmptyArray } from "../array";
import { isSet } from "../set";
import type { NumOptions } from "./index.typings";

export function isNumber(input: unknown): input is number {
  return typeof input === "number" && !isNaN(input) && isFinite(input);
}

export function isPositiveNumber(input: unknown): input is number {
  return isNumber(input) && input > 0;
}

export function isNegativeNumber(input: unknown): input is number {
  return isNumber(input) && input < 0;
}

export function isInifnity(input: unknown): input is number {
  return input === Infinity || input === -Infinity;
}

export function isPositiveInfinity(input: unknown): input is number {
  return input === Infinity;
}

export function isNegativeInfinity(input: unknown): input is number {
  return input === -Infinity;
}

export function numInRange(input: unknown, min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER, fallback: number = 0): number {
  fallback = isNumber(fallback) ? fallback : 0;
  min = isNumber(min) || isNegativeInfinity(min) ? min : Number.MIN_SAFE_INTEGER;
  max = isNumber(max) || isPositiveInfinity(max) ? max : Number.MAX_SAFE_INTEGER;

  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  else if (min === max) {
    max = max === Number.MAX_SAFE_INTEGER ? Infinity : Number.MAX_SAFE_INTEGER;
  }

  let value = isNumber(input) ? input : isPositiveInfinity(input) ? max : isNegativeInfinity(input) ? min : fallback;

  if (value > max) value = max;
  if (value < min) value = min;

  return value;
}

export function num(input: unknown, opts: NumOptions = undefined): number {
  let value = 0;

  if (isNumber(input)) {
    value = input;
  }
  else {
    if (isString(input)) {
      const i = input.trim();

      if (i[0] === "0" && i[1] === "x") {
        value = parseInt(i, 16);
      }
      else if (/^[\d.]+,\d{1,}$/.test(i)) {
        value = Number(i.replace(/\./g, "").replace(",", "."));
      }
      else if (/^[\d,]+.\d{1,}$/.test(i)) {
        value = Number(i.replace(/,/g, ""));
      }
      else {
        value = parseFloat(i);
      }
    }
    else if (isDate(input)) {
      value = input.getTime();
    }
    else if (isArray(input) || isSet(input)) {
      if (opts && (opts.array === "subtraction" || opts.array === "sum")) {
        if (isSet(input)) {
          input = Array.from(input.values());
        }

        value = (input as any[]).reduce((p, c) => {
          if (!isNumber(c)) {
            c = 0;
          }

          return opts?.array === "subtraction" ? p - c : p + c;
        },
        isNumber(opts?.default) ? opts!.default : 0);
      }
      else {
        value = isNumber(opts?.default) ? opts!.default : 0;
      }
    }

    if (!isNumber(value)) {
      value = isNumber(opts?.default) ? opts!.default : 0;
    }
  }

  if (opts && isNotEmptyArray(opts.oneOf)) {
    if (!opts.oneOf.includes(value)) {
      value = isNumber(opts?.default) && opts.oneOf.includes(opts!.default) ? opts?.default : opts.oneOf[0] ?? 0;
    }
  }

  // it makes no sense to have both oneOf and min/max but... anyway
  value = numInRange(value, opts?.min, opts?.max, opts?.default);

  return value;
}
