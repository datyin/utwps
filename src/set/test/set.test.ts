import { test, expect } from "vitest";
import { set } from "../index";

const cases: [unknown, Set<any>][] = [
  [["1", "2", "3"], new Set(["1", "2", "3"])],
  [new Set(["1", "2", "3"]), new Set(["1", "2", "3"])],
  [-Math.PI, new Set()],
  [Math.PI, new Set()],
  [0, new Set()],
  [1, new Set()],
  ["123", new Set()],
  ["-123", new Set()],
  [true, new Set()],
  [false, new Set()],
  [NaN, new Set()],
  [Infinity, new Set()],
  [-Infinity, new Set()],
  [undefined, new Set()],
  [null, new Set()],
  [new Map(), new Set()],
  [new Set(), new Set()],
  [new Date(), new Set()],
  [new RegExp("asd", "g"), new Set()],
  [new Array(), new Set()],
  [new Object(), new Set()],
  [new String(), new Set()],
  [new Function(), new Set()],
  [[], new Set()],
  [{}, new Set()]
];

test.each(cases)("set(%s) -> %s", (a, b) => {
  expect(set(a)).toStrictEqual(b);
});
