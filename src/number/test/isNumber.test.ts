import { test, expect } from "vitest";
import { isNumber } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, true],
  [Math.PI, true],
  [0, true],
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
  [{}, false],
];

test.each(cases)("isNumber(%s) -> %s", (a, b) => {
  expect(isNumber(a)).toStrictEqual(b);
});
