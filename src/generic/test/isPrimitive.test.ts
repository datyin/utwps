import { test, expect } from "vitest";
import { isPrimitive } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, true],
  [Math.PI, true],
  [0, true],
  [1, true],
  ["123", true],
  ["-123", true],
  [true, true],
  [false, true],
  [NaN, false],
  [Infinity, false],
  [-Infinity, false],
  [undefined, false],
  [null, false],
  [new Map(), false],
  [new Set(), false],
  [new Date(), false],
  [new RegExp("asd", "g"), false],
  [new Array(), false],
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], false],
  [{}, false],
];

test.each(cases)("isPrimitive(%s) -> %s", (a, b) => {
  expect(isPrimitive(a)).toStrictEqual(b);
});
