import { expect, test } from "vitest";
import { arr } from "../index";
import type { ArrayOptions } from "../index.typings";

const cases: [unknown, ArrayOptions, any[]][] = [
  [-Math.PI, undefined, []],
  [Math.PI, undefined, []],
  [0, undefined, []],
  [1, undefined, []],
  ["123", undefined, []],
  ["-123", undefined, []],
  [true, undefined, []],
  [false, undefined, []],
  [NaN, undefined, []],
  [Infinity, undefined, []],
  [-Infinity, undefined, []],
  [undefined, undefined, []],
  [null, undefined, []],
  [new Map([["one", 1], ["two", 2]]), undefined, []],
  [new Set(), undefined, []],
  [new Set([1, 2, 3]), undefined, []],
  [new Date(), undefined, []],
  [new Array(), undefined, []],
  [new Object(), undefined, []],
  [new String(), undefined, []],
  [new Function(), undefined, []],
  [[], undefined, []],
  [[1, 2, 3], undefined, [1, 2, 3]],
  [[undefined, undefined, undefined], undefined, [undefined, undefined, undefined]],
  [{}, undefined, []],
  [{ one: 1, two: 2 }, undefined, []]
];

test.each(cases)("arr(%s, %s) -> %s", (a, b, c) => {
  expect(arr(a, b)).toStrictEqual(c);
});
