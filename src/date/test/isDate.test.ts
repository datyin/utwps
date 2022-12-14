import { expect, test } from "vitest";
import { isDate } from "../index";

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
  [new Date(), true],
  ["Sat Oct 15 2022 23:17:30 GMT+0200 (Central European Summer Time)", false],
  ["Sat Oct 15 2022", false],
  ["23:17:59 GMT+0200 (Central European Summer Time)", false],
  ["2022-10-15T21:18:11.847Z", false],
  [new RegExp("asd", "g"), false],
  [new Array(), false],
  [new Object(), false],
  [new String(), false],
  [new Function(), false],
  [[], false],
  [{}, false]
];

test.each(cases)("isDate(%s) -> %s", (a, b) => {
  expect(isDate(a)).toStrictEqual(b);
});
