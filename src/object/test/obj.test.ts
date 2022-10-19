import { test, expect } from "vitest";
import { obj } from "../index";
import type { ObjectOptions } from "../index.typings";

const cases: [unknown, ObjectOptions<Record<any, any>>, Record<any, any>][] = [
  [-Math.PI, , {}],
  [Math.PI, , {}],
  [0, , {}],
  [1, , {}],
  ["123", , {}],
  ["-123", , {}],
  [true, , {}],
  [false, , {}],
  [NaN, , {}],
  [Infinity, , {}],
  [-Infinity, , {}],
  [undefined, , {}],
  [null, , {}],
  [new Map([["one", 1], ["two", 2]]), , {}],
  [new Set(), , {}],
  [new Set([1, 2, 3]), , {}],
  [new Date(), , {}],
  [new Array(), , {}],
  [new Object(), , {}],
  [new String(), , {}],
  [new Function(), , {}],
  [[], , {}],
  [[1, 2, 3], , {}],
  [[undefined, undefined, undefined], , {}],
  [{}, , {}],
  [{ one: 1, two: 2 }, , { one: 1, two: 2 }],
];

test.each(cases)("obj(%s, %s) -> %s", (a, b, c) => {
  expect(obj(a, b)).toStrictEqual(c);
});
