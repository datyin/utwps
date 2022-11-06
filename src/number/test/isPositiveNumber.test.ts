import { expect, test } from "vitest";
import { isPositiveNumber } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, false],
  [Math.PI, true],
  [0, false],
  [1, true],
  ["123", false],
  ["-123", false],
  [true, false],
  [false, false],
  [NaN, false],
  [Infinity, false],
  [-Infinity, false],
  [undefined, false],
  [null, false],
  [new Map(), false],
  [new Set(), false],
  [new Date(), false],
  [new Array(), false],
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], false],
  [{}, false]
];

test.each(cases)("isPositiveNumber(%s) -> %s", (a, b) => {
  expect(isPositiveNumber(a)).toStrictEqual(b);
});
