import { test, expect } from "vitest";
import { isEmptyArray } from "../index";

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
  [Infinity, false],
  [-Infinity, false],
  [undefined, false],
  [null, false],
  [new Map(), false],
  [new Set(), false],
  [new Date(), false],
  [new Array(), true],
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], true],
  [[1, 2, 3], false],
  [[undefined, undefined, undefined], false],
  [{}, false],
];

test.each(cases)("isEmptyArray(%s) -> %s", (a, b) => {
  expect(isEmptyArray(a)).toStrictEqual(b);
});
