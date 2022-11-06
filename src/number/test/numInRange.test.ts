import { expect, test } from "vitest";
import { numInRange } from "../index";

type OptionalNumber = number | undefined;

const cases: [unknown, OptionalNumber, OptionalNumber, OptionalNumber, number][] = [
  [123.999, undefined, undefined, undefined, 123.999],
  ["123.999", undefined, undefined, 100, 100],
  [123.999, undefined, 123.998, undefined, 123.998],
  [Infinity, undefined, undefined, undefined, Number.MAX_SAFE_INTEGER],
  [Infinity, undefined, Infinity, undefined, Number.MAX_SAFE_INTEGER],
  [true, undefined, undefined, undefined, 0],
  [-2, 1, 500, 5, 1],
  [undefined, 1, 500, 5, 5]
];

test.each(cases)("numInRange(%s, %s, %s, %s) -> %d", (a, b, c, d, e) => {
  expect(numInRange(a, b, c, d)).toStrictEqual(e);
});
