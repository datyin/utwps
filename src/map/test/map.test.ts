import { expect, test } from "vitest";
import { map } from "../index";

const cases: [unknown, Map<any, any>][] = [
  [["1", "2", "3"], new Map()],
  [new Set(["1", "2", "3"]), new Map()],
  [-Math.PI, new Map()],
  [Math.PI, new Map()],
  [0, new Map()],
  [1, new Map()],
  ["123", new Map()],
  ["-123", new Map()],
  [true, new Map()],
  [false, new Map()],
  [NaN, new Map()],
  [Infinity, new Map()],
  [-Infinity, new Map()],
  [undefined, new Map()],
  [null, new Map()],
  [new Map(), new Map()],
  [new Set(), new Map()],
  [new Date(), new Map()],
  [new RegExp("asd", "g"), new Map()],
  [new Array(), new Map()],
  [new Object(), new Map()],
  [new String(), new Map()],
  [new Function(), new Map()],
  [[], new Map()],
  [{}, new Map()]
];

test.each(cases)("map(%s) -> %s", (a, b) => {
  expect(map(a)).toStrictEqual(b);
});
