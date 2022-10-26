import { isAsyncFunction, isFunction } from "../function";
import { isNegativeInfinity, isPositiveInfinity } from "../number";
import { isObject } from "../object";
import type { JsonParseResponse } from "./index.typings";

export function jsonize(input: unknown, spaces: number = 2): string {
  return JSON.stringify(input, (_, value) => {
    if (value instanceof Map) {
      return { __utwps_original_type: "Map", value: Array.from(value.entries()) };
    }
    else if (value instanceof Set) {
      return { __utwps_original_type: "Set", value: Array.from(value.values()) };
    }
    else if (value instanceof RegExp) {
      return { __utwps_original_type: "RegExp", value: value.toString() };
    }
    else if (isFunction(value)) {
      return {
        __utwps_original_type: isAsyncFunction(value) ? "AsyncFunction" : "Function",
        value: value.toString()
      };
    }
    else if (isNegativeInfinity(value)) {
      return { __utwps_original_type: "-Infinity", value: value.toString() };
    }
    else if (isPositiveInfinity(value)) {
      return { __utwps_original_type: "Infinity", value: value.toString() };
    }
    else if (Number.isNaN(value)) {
      return { __utwps_original_type: "NaN", value: value.toString() };
    }

    return value;
  }, spaces);
}

export function dejsonize<T = unknown>(input: string): JsonParseResponse<T> {
  try {
    if (typeof input !== "string") {
      return [undefined, "Input must be string!"];
    }

    const data = JSON.parse(input, (_, value) => {
      if (isObject(value)) {
        if (value.__utwps_original_type === "Map") {
          return new Map(value.value);
        }
        else if (value.__utwps_original_type === "Set") {
          return new Set(value.value);
        }
        else if (value.__utwps_original_type === "-Infinity") {
          return -Infinity;
        }
        else if (value.__utwps_original_type === "Infinity") {
          return Infinity;
        }
        else if (value.__utwps_original_type === "NaN") {
          return NaN;
        }
      }

      return value;
    });

    return [data as T, undefined];
  }
  catch (error) {
    return [undefined, error instanceof Error ? error.message : "Failed to parse json"];
  }
}
