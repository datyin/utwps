import { num } from "../number";

/**
 * Support: https://caniuse.com/mdn-javascript_builtins_regexp_property_escapes
 */
export function removeSymbols(input: string, keepDotAndComma: boolean = true): string {
  try {
    if (typeof input !== "string") {
      return "";
    }

    let value = input.replace(/[^\p{N}|\p{L}.,]/gu, " ");

    if (keepDotAndComma) {
      value = value.replace(/\s+,/g, ",").replace(/\s+\./g, ".");
    } else {
      value = value.replace(/\.|,/g, " ");
    }

    return value.replace(/\s+/g, " ").trim();
  }
  catch (_) {
    return "";
  }
}

/**
 * Support: https://caniuse.com/mdn-javascript_builtins_string_padend
 */
export function toFixed(input: unknown, decimals: number = 2): string {
  const inp = num(input).toString().split(".");
  const dec = num(decimals, { min: 0, default: 2 });

  const leftValue = num(inp?.[0]);
  let rightValue = num(inp?.[1]) + "";

  if (rightValue.length > dec) {
    rightValue = rightValue.slice(0, dec);
  }
  else if (rightValue.length < dec) {
    rightValue = rightValue.padEnd(dec, "0");
  }

  return `${leftValue}.${rightValue}`;
}
