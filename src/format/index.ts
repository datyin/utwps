import { num } from "../number";

/**
 * Support: https://caniuse.com/mdn-javascript_builtins_regexp_property_escapes
 */
export function removeSymbols(input: string, keepDotAndComma: boolean = true): string {
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

/**
 * Support: https://caniuse.com/mdn-javascript_builtins_string_padend
 */
export function toFixed(input: unknown, decimals: number = 2): string {
  const inp = num(input).toString().split(".");
  const dec = num(decimals, { min: 0, default: 2 });

  const l = num(inp?.[0]);
  let r = num(inp?.[1]) + "";

  if (r.length > dec) {
    r = r.slice(0, dec);
  }
  else if (r.length < dec) {
    r = r.padEnd(dec, "0");
  }

  return `${l}.${r}`;
}
