import { test, expect } from "vitest";
import { numInRange } from "../index";

type OptionalNumber = number | undefined;

const cases: [unknown, OptionalNumber, OptionalNumber, OptionalNumber, number][] = [
  [123.999, , , , 123.999],
  ["123.999", , , 100, 100],
  [123.999, , 123.998, , 123.998],
  [Infinity, , , , Number.MAX_SAFE_INTEGER],
  [Infinity, , Infinity, , Number.MAX_SAFE_INTEGER],
  [true, , , , 0],
  [-2, 1, 500, 5, 1],
  [, 1, 500, 5, 5],
];

test.each(cases)("numInRange(%s, %s, %s, %s) -> %d", (a, b, c, d, e) => {
  expect(numInRange(a, b, c, d)).toStrictEqual(e);
});
