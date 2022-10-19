import type { NumberOptions } from "./index.typings";

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
  if (isPositiveInfinity(fallback)) {
    fallback = Number.MAX_SAFE_INTEGER;
  }
  else if (isNegativeInfinity(fallback)) {
    fallback = Number.MIN_SAFE_INTEGER;
  }

  min = isNumber(min) && min >= Number.MIN_SAFE_INTEGER ? min : Number.MIN_SAFE_INTEGER;
  max = isNumber(max) && max <= Number.MAX_SAFE_INTEGER ? max : Number.MAX_SAFE_INTEGER;

  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  else if (min === max) {
    return min;
  }

  let value = fallback;

  if (isPositiveInfinity(input)) {
    value = Number.MAX_SAFE_INTEGER;
  }
  else if (isNegativeInfinity(input)) {
    value = Number.MIN_SAFE_INTEGER;
  }
  else if (isNumber(input)) {
    value = input;
  }

  if (value > max) value = max;
  if (value < min) value = min;

  return value;
}

export function num(input: unknown, opts: NumberOptions = undefined): number {
  let value = isNumber(opts?.default) ? opts!.default : 0;

  if (isNumber(input)) {
    value = input;
  }
  else {
    if (isPositiveInfinity(input)) {
      value = Number.MAX_SAFE_INTEGER;
    }
    else if (isNegativeInfinity(input)) {
      value = Number.MIN_SAFE_INTEGER;
    }
    else if (typeof input === "string" || input instanceof String) {
      const i = input instanceof String ? input.toString().trim() : input.trim();

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

    if (!isNumber(value)) {
      value = isNumber(opts?.default) ? opts!.default : 0;
    }
  }

  if (opts && Array.isArray(opts.oneOf) && opts.oneOf.length > 0) {
    if (!opts.oneOf.includes(value)) {
      value = isNumber(opts?.default) && opts.oneOf.includes(opts!.default) ? opts?.default : opts.oneOf[0] ?? 0;
    }
  }

  value = numInRange(value, opts?.min, opts?.max, opts?.default);

  return value;
}
