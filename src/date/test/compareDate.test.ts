import { test, expect } from "vitest";
import { compareDate } from "../index";
import type { InDateDirection } from "../index.typings";

const cases: [unknown, InDateDirection, Date | undefined, boolean | null][] = [
  [new Date(), "<", , false],
  [new Date(2015, 5, 10, 0, 0, 0), "<", , true],
  [new Date(3000, 5, 10, 0, 0, 0), "<", , false],

  [new Date(), "<=", , true],
  [new Date(2015, 5, 10, 0, 0, 0), "<=", , true],
  [new Date(3000, 5, 10, 0, 0, 0), "<=", , false],

  [new Date(), "==", , true],
  [new Date(2015, 5, 10, 0, 0, 0), "==", , false],
  [new Date(3000, 5, 10, 0, 0, 0), "==", , false],

  [new Date(), "=>", , true],
  [new Date(2015, 5, 10, 0, 0, 0), "=>", , false],
  [new Date(3000, 5, 10, 0, 0, 0), "=>", , true],

  [new Date(), ">", , false],
  [new Date(2015, 5, 10, 0, 0, 0), ">", , false],
  [new Date(3000, 5, 10, 0, 0, 0), ">", , true],

  [new Date(2022, 5, 10, 0, 0, 0), "<", new Date(2022, 5, 11, 0, 0, 0), true],
  [new Date(2022, 5, 10, 0, 0, 0), ">", new Date(2022, 5, 11, 0, 0, 0), false],
  [new Date(2022, 5, 10, 0, 0, 0), "==", new Date(2022, 5, 10, 0, 0, 0), true],
  [new Date(2022, 5, 10, 0, 0, 0), "=>", new Date(2022, 5, 10, 0, 0, 0), true],
  [new Date(2022, 5, 10, 0, 0, 0), "<=", new Date(2022, 5, 10, 0, 0, 0), true],

  [-Math.PI, "<", , null],
  [Math.PI, "<", , null],
  [0, "<", , null],
  [1, "<", , null],
  ["123", "<", , null],
  ["-123", "<", , null],
  [true, "<", , null],
  [false, "<", , null],
  [NaN, "<", , null],
  [Infinity, "<", , null],
  [-Infinity, "<", , null],
  [undefined, "<", , null],
  [null, "<", , null],
  [new Map(), "<", , null],
  [new Set(), "<", , null],
  [new RegExp("asd", "g"), "<", , null],
  [new Array(), "<", , null],
  [new Object(), "<", , null],
  [new String(), "<", , null],
  [new Function(), "<", , null],
  [[], "<", , null],
  [{}, "<", , null],
];

test.each(cases)("compareDate(%s, %s, %s) -> %s", (a, b, c, d) => {
  expect(compareDate(a, b, c)).toStrictEqual(d);
});
