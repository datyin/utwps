import { expect, test } from "vitest";
import { isNotEmptyArray } from "../index";

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
  [new Array(), false],
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], false],
  [[1, 2, 3], true],
  [[undefined, undefined, undefined], true],
  [{}, false]
];

test.each(cases)("isNotEmptyArray(%s) -> %s", (a, b) => {
  expect(isNotEmptyArray(a)).toStrictEqual(b);
});
