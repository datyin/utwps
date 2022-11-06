import { expect, test } from "vitest";
import { isArray } from "../index";

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
  [new ArrayBuffer(2), false],
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], true],
  [{}, false]
];

test.each(cases)("isArray(%s) -> %s", (a, b) => {
  expect(isArray(a)).toStrictEqual(b);
});
