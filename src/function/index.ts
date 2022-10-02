import { is } from "../generic";

export function isSyncFunction<T = () => void>(input: unknown): input is T {
  return is(input, "Function");
}

export function isAsyncFunction<T = () => void>(input: unknown): input is T {
  return is(input, "AsyncFunction");
}

export function isFunction<T = () => void>(input: unknown): input is T {
  return isSyncFunction(input) || isAsyncFunction(input);
}
