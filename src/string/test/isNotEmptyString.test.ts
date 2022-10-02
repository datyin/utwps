import { test, expect } from "vitest";
import { isNotEmptyString } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, false],
  [Math.PI, false],
  [0, false],
  [1, false],
  ["123", true],
  ["-123", true],
  ["   a   ", true],
  ["      ", false],
  [" ", false],
  ["", false],
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
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], false],
  [{}, false],
];

test.each(cases)("isNotEmptyString(%s) -> %s", (a, b) => {
  expect(isNotEmptyString(a)).toStrictEqual(b);
});
