import { test, expect } from "vitest";
import { isFunction } from "../index";

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
  [new Object(), false],
  [new String(), false],
  [new Function(), true],
  [[], false],
  [{}, false],
  [
    () => {
      return true;
    },
    true,
  ],
  [
    async () => {
      return true;
    },
    true,
  ],
];

test.each(cases)("isFunction(%s) -> %s", (a, b) => {
  expect(isFunction(a)).toStrictEqual(b);
});
