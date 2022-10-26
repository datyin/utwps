import { test, expect } from "vitest";
import { isOneOf } from "../index";

const cases: [unknown, any[], boolean, boolean][] = [
  [-Math.PI, [Math.PI], true, false],
  [Math.PI, [Math.PI], true, true],
  [0, [1, 2, 3], true, false],
  [1, [1, 2, 3], true, true],
  ["123", [], true, false],
  ["-123", ["-123", "123"], true, true],
  ["vue", ["vue", "react", "angular", "svelte"], true, true],
  ["VUE", ["vue", "react", "angular", "svelte"], true, false],
  ["VUE", ["vue", "react", "angular", "svelte"], false, true],
  [true, [], true, false],
  [false, [], true, false],
  [NaN, [], true, false],
  [Infinity, [], true, false],
  [-Infinity, [], true, false],
  [undefined, [], true, false],
  [null, [], true, false],
  [new Map(), [new Map([[1, 2]]), new Map()], true, true],
  [new Map(), [new Map([[1, 2]]), new Map([[2, 3]])], true, false],
  [new Set(), [], true, false],
  [new Date(), [], true, false],
  [new RegExp("asd", "g"), [], true, false],
  [new Array(), [], true, false],
  [new Object(), [], true, false],
  [new String(), [], true, false],
  [new Function(), [], true, false],
  [[], [], true, false],
  [["abc"], [["abc"]], true, true],
  [{}, [], true, false],
];

test.each(cases)("isOneOf(%s, %j, %s) -> %s", (a, b, c, d) => {
  expect(isOneOf(a, b, c)).toStrictEqual(d);
});
