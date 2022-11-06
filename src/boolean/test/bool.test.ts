import { expect, test } from "vitest";
import { bool } from "../index";
import type { BooleanOptions } from "../index.typings";

const cases: [unknown, BooleanOptions, boolean][] = [
  [-Math.PI, undefined, false],
  [Math.PI, undefined, false],
  [0, undefined, false],
  [1, undefined, true],
  ["123", undefined, false],
  ["-123", undefined, false],
  ["yes", undefined, false],
  ["yes", { custom: ["yes"] }, true],
  ["YES", { custom: ["yes"] }, true],
  [true, undefined, true],
  [false, undefined, false],
  [NaN, undefined, false],
  [Infinity, undefined, false],
  [-Infinity, undefined, false],
  [undefined, undefined, false],
  [null, undefined, false],
  [new Map(), undefined, false],
  [new Set(), undefined, false],
  [new Date(), undefined, false],
  [new Array(), undefined, false],
  [new Object(), undefined, false],
  [new String(), undefined, false],
  [new Function(), undefined, false],
  [[], undefined, false],
  [{}, undefined, false]
];

test.each(cases)("bool(%s, %j) -> %s", (a, b, c) => {
  expect(bool(a, b)).toStrictEqual(c);
});
