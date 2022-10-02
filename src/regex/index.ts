import { is } from "../generic";

export function isRegExp(input: unknown): input is RegExp {
  return is<RegExp>(input, "RegExp");
}
