import { test, expect } from "vitest";
import { toFixed } from "../index";

const cases: [unknown, number | undefined, string][] = [
  [123.999, 3, "123.999"],
  [123.999, 2, "123.99"],
  [123.999, , "123.99"],
  ["123.145,24", undefined, "123145.24"],
];

test.each(cases)("toFixed(%s, %j) -> %d", (a, b, c) => {
  expect(toFixed(a, b)).toStrictEqual(c);
});
