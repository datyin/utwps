import { expect, test } from "vitest";
import { isTrue } from "../index";

const cases: [unknown, boolean][] = [
  [-Math.PI, false],
  [Math.PI, false],
  [0, false],
  [1, true],
  ["1", false],
  ["true", false],
  ["123", false],
  ["-123", false],
  [true, true],
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
  [{}, false]
];

test.each(cases)("isTrue(%s) -> %s", (a, b) => {
  expect(isTrue(a)).toStrictEqual(b);
});
