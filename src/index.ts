import { arr, isArray, isEmptyArray, isNotEmptyArray } from "./array";
import { bool, isBoolean, isFalse, isTrue } from "./boolean";
import { date, isDate } from "./date";
import { removeSymbols, toFixed } from "./format";
import { isAsyncFunction, isFunction, isSyncFunction } from "./function";
import { getOneOf, getOneOfIndex, is, isEqual, isNil, isOneOf, isPrimitive } from "./generic";
import { isMap, isWeakMap, map, weakmap } from "./map";
import { isNegativeInfinity, isNegativeNumber, isNumber, isPositiveInfinity, isPositiveNumber, num, numInRange } from "./number";
import { isObject, obj } from "./object";
import { isBrowser, isElectron, isNodeJS, isTauri } from "./platform";
import { isPromise } from "./promise";
import { isRegExp } from "./regex";
import { isSet, isWeakSet, set, weakset } from "./set";
import { isEmptyString, isNotEmptyString, isString, str } from "./string";
import { dejsonize, jsonize } from "./json";

export {
  isArray,
  isEmptyArray,
  isNotEmptyArray,
  arr,
  isBoolean,
  isTrue,
  isFalse,
  bool,
  isDate,
  date,
  removeSymbols,
  toFixed,
  isAsyncFunction,
  isSyncFunction,
  isFunction,
  is,
  isNil,
  isPrimitive,
  isEqual,
  isOneOf,
  getOneOf,
  getOneOfIndex,
  isMap,
  isWeakMap,
  map,
  weakmap,
  isNumber,
  isPositiveInfinity,
  isPositiveNumber,
  isNegativeInfinity,
  isNegativeNumber,
  numInRange,
  num,
  isObject,
  obj,
  isNodeJS,
  isBrowser,
  isElectron,
  isTauri,
  isPromise,
  isRegExp,
  isSet,
  isWeakSet,
  set,
  weakset,
  isString,
  isEmptyString,
  isNotEmptyString,
  str,
  jsonize,
  dejsonize
};
