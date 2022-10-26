import { test, expect } from "vitest";
import { getOneOf } from "../index";
import type { GetOneOfOptions } from "../index.typings";

const cases: [unknown, GetOneOfOptions<any>, unknown][] = [
  [-Math.PI, { list: [2, 3, 4]}, 2],
  [Math.PI, { list: [-Math.PI, Math.PI]}, Math.PI],
  [Math.PI, { list: [-Math.PI, 3, Math.PI], default: 3}, Math.PI],
  [Math.PI + 1, { list: [-Math.PI, 3, Math.PI], default: 3}, 3],
  [Infinity, { list: [-Infinity, Infinity], default: Infinity}, Infinity],
];

test.each(cases)("getOneOf(%s, %s) -> %s", (a, b, c) => {
  expect(getOneOf(a, b)).toStrictEqual(c);
});
