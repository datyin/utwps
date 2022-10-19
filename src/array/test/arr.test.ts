import { test, expect } from "vitest";
import { arr } from "../index";
import type { ArrayOptions } from "../index.typings";

const cases: [unknown, ArrayOptions, any[]][] = [
  [-Math.PI, , []],
  [Math.PI, , []],
  [0, , []],
  [1, , []],
  ["123", , []],
  ["-123", , []],
  [true, , []],
  [false, , []],
  [NaN, , []],
  [Infinity, , []],
  [-Infinity, , []],
  [undefined, , []],
  [null, , []],
  [new Map([["one", 1], ["two", 2]]), , []],
  [new Set(), , []],
  [new Set([1, 2, 3]), , []],
  [new Date(), , []],
  [new Array(), , []],
  [new Object(), , []],
  [new String(), , []],
  [new Function(), , []],
  [[], , []],
  [[1, 2, 3], , [1, 2, 3]],
  [[undefined, undefined, undefined], , [undefined, undefined, undefined]],
  [{}, , []],
  [{ one: 1, two: 2 }, , []],
];

test.each(cases)("arr(%s, %s) -> %s", (a, b, c) => {
  expect(arr(a, b)).toStrictEqual(c);
});
