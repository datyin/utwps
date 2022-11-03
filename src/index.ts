import { isArray, isEmptyArray, isNotEmptyArray, arr } from "./array";
import { isBoolean, isTrue, isFalse, bool } from "./boolean";
import { isDate } from "./date";
import { removeSymbols, toFixed } from "./format";
import { isAsyncFunction, isSyncFunction, isFunction } from "./function";
import { is, isNil, isPrimitive, isEqual, isOneOf, getOneOf, getFirstBy } from "./generic";
import { isMap, isWeakMap, map, weakmap } from "./map";
import { isNumber, isPositiveInfinity, isPositiveNumber, isNegativeInfinity, isNegativeNumber, numInRange, num } from "./number";
import { isObject, obj } from "./object";
import { isNodeJS, isBrowser, isElectron, isTauri } from "./platform";
import { isPromise } from "./promise";
import { isRegExp } from "./regex";
import { isSet, isWeakSet, set, weakset } from "./set";
import { isString, isEmptyString, isNotEmptyString, str } from "./string";
import { jsonize, dejsonize } from "./json";

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
  getFirstBy,
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
