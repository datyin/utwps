import { test, expect } from "vitest";
import { isNil } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, false],
  [Math.PI, false],
  [0, false],
  [1, false],
  ["123", false],
  ["-123", false],
  [true, false],
  [false, false],
  [NaN, true],
  [Infinity, false],
  [-Infinity, false],
  [undefined, true],
  [null, true],
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

test.each(cases)("isNil(%s) -> %s", (a, b) => {
  expect(isNil(a)).toStrictEqual(b);
});
