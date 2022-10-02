import { isNil } from "../generic";
import { isNotEmptyArray } from "../array";
import type { BoolOptions } from "./index.typings";

export function isBoolean(input: unknown): input is boolean {
  return input === true || input === false;
}

export function isTrue(input: unknown): input is boolean {
  if (typeof input === "string") {
    const lc = input.toLowerCase().trim();

    if (lc === "true" || lc === "1") {
      return true;
    }

    return false;
  }

  return input === true || input === 1;
}

export function isFalse(input: unknown): input is boolean {
  if (typeof input === "string") {
    const lc = input.toLowerCase().trim();

    if (lc === "false" || lc === "0") {
      return true;
    }

    return false;
  }

  return input === false || input === 0;
}

export function bool(input: unknown, opts: BoolOptions = undefined): boolean {
  if (isTrue(input)) {
    return true;
  }

  if (isNil(input)) {
    return isTrue(opts?.default);
  }

  if (isNotEmptyArray(opts?.custom) && typeof input === "string") {
    const lc = input.trim().toLowerCase();

    if (lc !== "" && opts!.custom.includes(lc)) {
      return true;
    }
  }

  return false;
}
