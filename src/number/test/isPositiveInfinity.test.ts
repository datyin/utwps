import { test, expect } from "vitest";
import { isPositiveInfinity } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, false],
  [Math.PI, false],
  [0, false],
  [1, false],
  ["123", false],
  ["-123", false],
  [true, false],
  [false, false],
  [NaN, false],
  [Infinity, true],
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

test.each(cases)("isPositiveInfinity(%s) -> %s", (a, b) => {
  expect(isPositiveInfinity(a)).toStrictEqual(b);
});
