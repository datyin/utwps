import { test, expect } from "vitest";
import { bool } from "../index";
import type { BooleanOptions } from "../index.typings";

const cases: [unknown, BooleanOptions, boolean][] = [
  [-Math.PI, , false],
  [Math.PI, , false],
  [0, , false],
  [1, , true],
  ["123", , false],
  ["-123", , false],
  ["yes", , false],
  ["yes", { custom: ["yes"] }, true],
  ["YES", { custom: ["yes"] }, true],
  [true, , true],
  [false, , false],
  [NaN, , false],
  [Infinity, , false],
  [-Infinity, , false],
  [undefined, , false],
  [null, , false],
  [new Map(), , false],
  [new Set(), , false],
  [new Date(), , false],
  [new Array(), , false],
  [new Object(), , false],
  [new String(), , false],
  [new Function(), , false],
  [[], , false],
  [{}, , false],
];

test.each(cases)("bool(%s, %j) -> %s", (a, b, c) => {
  expect(bool(a, b)).toStrictEqual(c);
});
