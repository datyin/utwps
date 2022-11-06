import { expect, test } from "vitest";
import { jsonize } from "../index";

const cases: [unknown, string | undefined][] = [
  [-Math.PI, `${-Math.PI}`],
  [Math.PI, `${Math.PI}`],
  [0, "0"],
  [1, "1"],
  ["123", "\"123\""],
  [true, "true"],
  [false, "false"],
  [NaN, "{\"__utwps_original_type\":\"NaN\",\"value\":\"NaN\"}"],
  [Infinity, "{\"__utwps_original_type\":\"Infinity\",\"value\":\"Infinity\"}"],
  [-Infinity, "{\"__utwps_original_type\":\"-Infinity\",\"value\":\"-Infinity\"}"],
  [undefined, undefined],
  [null, "null"],
  [new Map([[1, 2]]), "{\"__utwps_original_type\":\"Map\",\"value\":[[1,2]]}"],
  [new Set([1, 2, 3]), "{\"__utwps_original_type\":\"Set\",\"value\":[1,2,3]}"],
  [new RegExp("asd", "g"), "{\"__utwps_original_type\":\"RegExp\",\"value\":\"/asd/g\"}"],
  [new Array(), "[]"],
  [new Object(), "{}"],
  [new String(), "\"\""],
  [new Function(), "{\"__utwps_original_type\":\"Function\",\"value\":\"function anonymous(\\n) {\\n\\n}\"}"],
  [[], "[]"],
  [["abc"], "[\"abc\"]"],
  [{}, "{}"]
];

test.each(cases)("jsonize(%s, 0) -> %s", (a, b) => {
  expect(jsonize(a, 0)).toStrictEqual(b);
});
