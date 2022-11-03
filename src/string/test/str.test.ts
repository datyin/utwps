import { test, expect } from "vitest";
import { str } from "../index";
import type { StringOptions } from "../index.typings";

const cases: [unknown, StringOptions<string>, string][] = [
  [123.999, , "123.999"],
  ["LOWERCASE", , "LOWERCASE"],
  ["LOWERCASE", { lc: 1 }, "lowercase"],
  ["uppercase", , "uppercase"],
  ["uppercase", { uc: 1 }, "UPPERCASE"],
  ["vue", { oneOf: ["react", "vue", "angular", "svelte"] }, "vue"],
  ["ANGULAR", { oneOf: ["react", "vue", "angular", "svelte"], oneOfCaseSensitive: true }, "react"],
  ["REACT", { oneOf: ["react", "vue", "angular", "svelte"] }, "react"],
  ["1995-05-10", { match: /^\d{4}-\d{2}-\d{2}$/ }, "1995-05-10"],
  ["1995-05-10", { match: /^[a-zA-Z]+$/ }, ""],
  [new Date(2022, 5, 10, 0, 0, 0, 0), , ""],
  [new RegExp("batman", "g"), , ""],
  [/^batman$/g, , ""],
  [true, , "true"],
  [false, , "false"],
  [Math.PI, , "3.141592653589793"],
  [-Math.PI, , "-3.141592653589793"],
  [Infinity, , ""],
  [-Infinity, , ""],
  [[], , ""],
  [[1, 2, 3], , ""],
  [new Set([1, 2, 3]), , ""],
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
