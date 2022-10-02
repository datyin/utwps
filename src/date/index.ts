import { is } from "../generic";
import type { InDateDirection } from "./index.typings";

export function isDate(input: unknown): input is Date {
  return is<Date>(input, "Date");
}

export function compareDate(
  input: unknown,
  direction: InDateDirection = "==",
  compareWith: Date | undefined = undefined
) {
  if (!isDate(input)) {
    return null;
  }

  if (!isDate(compareWith)) {
    compareWith = new Date();
  }

  compareWith.setHours(0, 0, 0, 0);
  input.setHours(0, 0, 0, 0);

  if (direction === "<") {
    return input < compareWith;
  } else if (direction === "<=") {
    return input <= compareWith;
  } else if (direction === "==") {
    // for some reason only equal is not compared properly...
    // we can compare iso string instead
    return input.toISOString() === compareWith.toISOString();
  } else if (direction === "=>") {
    return input >= compareWith;
  } else if (direction === ">") {
    return input > compareWith;
  }

  return null;
}

export function isDateInThePast(input: unknown, compareWith: Date | undefined = undefined): boolean | null {
  return compareDate(input, "<", compareWith);
}

export function isDateSameDayOrInThePast(input: unknown, compareWith: Date | undefined = undefined): boolean | null {
  return compareDate(input, "<=", compareWith);
}

export function isDateInTheFuture(input: unknown, compareWith: Date | undefined = undefined): boolean | null {
  return compareDate(input, ">", compareWith);
}

export function isDateSameDayOrInTheFuture(input: unknown, compareWith: Date | undefined = undefined): boolean | null {
  return compareDate(input, "=>", compareWith);
}

export function isDateSameDay(input: unknown, compareWith: Date | undefined = undefined): boolean | null {
  return compareDate(input, "==", compareWith);
}
