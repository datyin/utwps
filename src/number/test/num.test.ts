import { test, expect } from "vitest";
import { num } from "../index";
import type { NumOptions } from "../index.typings";

const cases: [unknown, NumOptions, number][] = [
  [123.999, undefined, 123.999],
  [new Date(2022, 5, 10, 0, 0, 0, 0), undefined, 1654812000000],
  [" 0xff ", undefined, 255],
  ["123.145,24", undefined, 123145.24],
  ["123,145.24", undefined, 123145.24],
  [1000, { max: 500 }, 500],
  [0, { min: 1 }, 1],
  [Number.MAX_SAFE_INTEGER + 1, undefined, Number.MAX_SAFE_INTEGER],
  [[], { default: 5 }, 5],
  [[1, 2, 3], undefined, 0],
  [[1, 2, 3], { array: "sum"}, 6],
  [[1, 2, 3], { array: "subtraction" }, -6],
  [[1, 2, 3], { array: "subtraction", oneOf: [-6, 0] }, -6],
  [1, { oneOf: [2, 0], default: 3 }, 2],
  [new Set([1, 2, 3]), undefined, 0],
  [new Set([1, 2, 3]), { array: "sum" }, 6],
  [{ a: 1, b: 2 }, undefined, 0],
];

test.each(cases)("num(%s, %j) -> %d", (a, b, c) => {
  expect(num(a, b)).toStrictEqual(c);
});
