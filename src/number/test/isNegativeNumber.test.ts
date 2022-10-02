import { test, expect } from "vitest";
import { isNegativeNumber } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, true],
  [Math.PI, false],
  [0, false],
  [1, false],
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
  [{}, false],
];

test.each(cases)("isNegativeNumber(%s) -> %s", (a, b) => {
  expect(isNegativeNumber(a)).toStrictEqual(b);
});
