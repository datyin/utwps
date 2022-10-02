import { test, expect } from "vitest";
import { isFalse } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, false],
  [Math.PI, false],
  [0, true],
  [1, false],
  ["123", false],
  ["-123", false],
  [true, false],
  [false, true],
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

test.each(cases)("isFalse(%s) -> %s", (a, b) => {
  expect(isFalse(a)).toStrictEqual(b);
});
