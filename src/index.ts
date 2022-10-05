import { is, isNil, isPrimitive, isOneOf } from "./generic";
import { arr, isArray, isEmptyArray, isNotEmptyArray } from "./array";
import { isBoolean, isTrue, isFalse, bool } from "./boolean";
import { isDate, compareDate, isDateSameDay, isDateInTheFuture, isDateInThePast, isDateSameDayOrInTheFuture, isDateSameDayOrInThePast } from "./date";
import { removeSymbols } from "./format";
import { isFunction, isAsyncFunction, isSyncFunction } from "./function";
import { toJSON, fromJSON } from "./json";
import { num, isInifnity, isNegativeInfinity, isNegativeNumber, isNumber, isPositiveInfinity, isPositiveNumber } from "./number";
import { obj, isObject } from "./object";
import { isPromise } from "./promise";
import { isRegExp } from "./regex";
import { map, isMap, isWeakMap } from "./map";
import { set, isSet, isWeakSet } from "./set";
import { str, isEmptyString, isNotEmptyString, isString } from "./string";
import { isNodeJS } from "./platform";

export {
  arr,
  isArray,
  isEmptyArray,
  isNotEmptyArray,
  isBoolean,
  isTrue,
  isFalse,
  bool,
  isDate,
  compareDate,
  isDateSameDay,
  isDateInTheFuture,
  isDateInThePast,
  isDateSameDayOrInTheFuture,
  isDateSameDayOrInThePast,
  removeSymbols,
  isFunction,
  isAsyncFunction,
  isSyncFunction,
  is,
  isNil,
  isPrimitive,
  isOneOf,
  toJSON,
  fromJSON,
  map,
  isMap,
  isWeakMap,
  num,
  isInifnity,
  isNegativeInfinity,
  isNegativeNumber,
  isNumber,
  isPositiveInfinity,
  isPositiveNumber,
  obj,
  isObject,
  isPromise,
  isRegExp,
  set,
  isSet,
  isWeakSet,
  str,
  isEmptyString,
  isNotEmptyString,
  isString,
  isNodeJS
};
