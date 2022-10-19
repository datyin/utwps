import { is } from "../generic";
import { isPositiveNumber } from "../number";

export function isDate(input: unknown): input is Date {
  return is<Date>(input, "Date") && isPositiveNumber(input.getTime());
}
