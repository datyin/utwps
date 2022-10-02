import { test, expect } from "vitest";
import { isObject } from "../index";

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
  [new RegExp("asd", "g"), false],
  [new Array(), false],
  [new Object(), true],
  [new String(), false],
  [new Function(), false],
  [[], false],
  [{}, true],
];

test.each(cases)("isObject(%s) -> %s", (a, b) => {
  expect(isObject(a)).toStrictEqual(b);
});
