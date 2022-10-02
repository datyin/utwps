import { is } from "../generic";

export function isPromise<T = unknown>(input: unknown): input is Promise<T> {
  return is(input, "Promise");
}
