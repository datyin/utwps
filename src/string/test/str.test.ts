import { test, expect } from "vitest";
import { str } from "../index";
import type { StrOptions } from "../index.typings";

const cases: [unknown, StrOptions, string][] = [
  [123.999, , "123.999"],
  [new Date(2022, 5, 10, 0, 0, 0, 0), , "2022-06-09T22:00:00.000Z"],
  [new RegExp("batman", "g"), , "/batman/g"],
  [/^batman$/g, , "/^batman$/g"],
  [true, , "true"],
  [false, , "false"],
  [Math.PI, , "3.141592653589793"],
  [-Math.PI, , "-3.141592653589793"],
  [Infinity, , "∞"],
  [-Infinity, , "-∞"],
  [[], , ""],
  [[1, 2, 3], , "1, 2, 3"],
  [new Set([1, 2, 3]), , "1, 2, 3"],
  [new Array(), , ""],
  [{}, , ""],
  [{ a: "b", c: "d" }, , ""],
  [" asd   ", { trim: 1 }, "asd"],
  [" asd   bsd ", { trim: 1, tss: 1 }, "asd bsd"],
  [
    " asd   bsd 先秦兩漢 !@#$%^&*()_+1234567890 ,-=[] ЧЌЖШЃЏЉЊЕРТ <>./?한국어 키보드",
    { trim: 1, rs: 1 },
    "asd bsd 先秦兩漢 1234567890 ЧЌЖШЃЏЉЊЕРТ 한국어 키보드",
  ],
  [
    " asd   bsd 先秦兩漢 !@#$%^&*()_+1234567890 ,-=[] ЧЌЖШЃЏЉЊЕРТ <>./?한국어 키보드",
    { trim: 1, rs: 1, keepDotAndComma: true },
    "asd bsd 先秦兩漢 1234567890, ЧЌЖШЃЏЉЊЕРТ. 한국어 키보드",
  ],
];

test.each(cases)("str(%s, %j) -> %s", (a, b, c) => {
  expect(str(a, b)).toStrictEqual(c);
});
