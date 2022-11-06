import { expect, test } from "vitest";
import { isEqual } from "../index";

const cases: [unknown, unknown, boolean][] = [
  [-Math.PI, -Math.PI, true],
  [Math.PI, Math.PI, true],
  [0, false, false],
  [1, true, false],
  ["123", 123, false],
  ["-123", "-123", true],
  [true, true, true],
  [true, 1, false],
  [false, false, true],
  [NaN, null, false],
  [Infinity, null, false],
  [-Infinity, null, false],
  [undefined, null, false],
  [null, null, true],
  [new Map(), new Map([[1, 2]]), false],
  [new Map(), new Map(), true],
  [new Set(), new Set(), true],
  [new Date(), new Date(), true],
  [new RegExp("asd", "g"), new RegExp("dsa"), false],
  [new Array(), [], true],
  [new Object(), {}, true],
  [new String(), "", false],
  [new Function(), () => {}, false],
  [() => {}, () => {}, true],
  [[], new ArrayBuffer(2), false],
  [{}, {}, true]
];

test.each(cases)("isEqual(%s, %s) -> %s", (a, b, c) => {
  expect(isEqual(a, b)).toStrictEqual(c);
});
