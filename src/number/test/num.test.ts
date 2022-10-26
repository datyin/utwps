import { test, expect } from "vitest";
import { num } from "../index";
import type { NumberOptions } from "../index.typings";

const cases: [unknown, NumberOptions, number][] = [
  [123.999, undefined, 123.999],
  [new Date(2022, 5, 10, 0, 0, 0, 0), undefined, 0],
  [" 0xff ", , 255],
  ["123.145,24", , 123145.24],
  ["123.145.678,24", , 123145678.24],
  ["123,145.24", , 123145.24],
  ["123,145,678.24", , 123145678.24],
  ["456", { oneOf: [123, 456, 789] }, 456],
  [Infinity, { oneOf: [Infinity, -Infinity] }, Number.MAX_SAFE_INTEGER],
  [1000, { max: 500 }, 500],
  [0, { min: 1 }, 1],
  [Number.MAX_SAFE_INTEGER + 1, , Number.MAX_SAFE_INTEGER],
  [[], { default: 5 }, 5],
  [[1, 2, 3], , 0],
  [1, { oneOf: [2, 0], default: 3 }, 2],
  [new Set([1, 2, 3]), undefined, 0],
  [{ a: 1, b: 2 }, undefined, 0],
];

test.each(cases)("num(%s, %j) -> %d", (a, b, c) => {
  expect(num(a, b)).toStrictEqual(c);
});
