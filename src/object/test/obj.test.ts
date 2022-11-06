import { expect, test } from "vitest";
import { obj } from "../index";
import type { ObjectOptions } from "../index.typings";

const cases: [unknown, ObjectOptions<Record<any, any>>, Record<any, any>][] = [
  [-Math.PI, undefined, {}],
  [Math.PI, undefined, {}],
  [0, undefined, {}],
  [1, undefined, {}],
  ["123", undefined, {}],
  ["-123", undefined, {}],
  [true, undefined, {}],
  [false, undefined, {}],
  [NaN, undefined, {}],
  [Infinity, undefined, {}],
  [-Infinity, undefined, {}],
  [undefined, undefined, {}],
  [null, undefined, {}],
  [new Map([["one", 1], ["two", 2]]), undefined, {}],
  [new Set(), undefined, {}],
  [new Set([1, 2, 3]), undefined, {}],
  [new Date(), undefined, {}],
  [new Array(), undefined, {}],
  [new Object(), undefined, {}],
  [new String(), undefined, {}],
  [new Function(), undefined, {}],
  [[], undefined, {}],
  [[1, 2, 3], undefined, {}],
  [[undefined, undefined, undefined], undefined, {}],
  [{}, undefined, {}],
  [{ one: 1, two: 2 }, undefined, { one: 1, two: 2 }]
];

test.each(cases)("obj(%s, %s) -> %s", (a, b, c) => {
  expect(obj(a, b)).toStrictEqual(c);
});
