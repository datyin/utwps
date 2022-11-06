import { expect, test } from "vitest";
import { isNegativeInfinity } from "../index";

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
  [-Infinity, true],
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

test.each(cases)("isNegativeInfinity(%s) -> %s", (a, b) => {
  expect(isNegativeInfinity(a)).toStrictEqual(b);
});
