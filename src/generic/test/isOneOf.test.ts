import { test, expect } from "vitest";
import { isOneOf } from "../index";

const cases: [unknown, any[], boolean][] = [
  [-Math.PI, [Math.PI], false],
  [Math.PI, [Math.PI], true],
  [0, [1, 2, 3], false],
  [1, [1, 2, 3], true],
  ["123", [], false],
  ["-123", ["-123", "123"], true],
  [true, [], false],
  [false, [], false],
  [NaN, [], false],
  [Infinity, [], false],
  [-Infinity, [], false],
  [undefined, [], false],
  [null, [], false],
  [new Map(), [new Map([[1, 2]]), new Map()], false],
  [new Set(), [], false],
  [new Date(), [], false],
  [new RegExp("asd", "g"), [], false],
  [new Array(), [], false],
  [new Object(), [], false],
  [new String(), [], false],
  [new Function(), [], false],
  [[], [], false],
  [["abc"], [["abc"]], true],
  [{}, [], false],
];

test.each(cases)("isOneOf(%s, %j) -> %s", (a, b, c) => {
  expect(isOneOf(a, b)).toStrictEqual(c);
});
