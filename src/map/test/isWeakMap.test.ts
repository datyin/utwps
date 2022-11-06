import { expect, test } from "vitest";
import { isWeakMap } from "../index";

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
  [new WeakMap(), true],
  [new Set(), false],
  [new Date(), false],
  [new RegExp("asd", "g"), false],
  [new Array(), false],
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], false],
  [{}, false]
];

test.each(cases)("isWeakMap(%s) -> %s", (a, b) => {
  expect(isWeakMap(a)).toStrictEqual(b);
});
