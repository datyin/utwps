export function is<T>(input: unknown, type: string): input is T {
  return Object.prototype.toString.call(input) === `[object ${type}]`;
}

export function isNil(input: unknown): input is null | undefined {
  return input === null || typeof input === "undefined" || (typeof input === "number" && isNaN(input));
}

export function isPrimitive(input: unknown): input is string | number | boolean {
  return (
    typeof input === "string" ||
    (
      typeof input === "number" &&
      !isNaN(input) &&
      isFinite(input)
    ) ||
    typeof input === "boolean"
  );
}

export function isOneOf<T = any>(input: unknown, options: T[]): input is T {
  return Array.isArray(options) && options.length > 0 && options.includes(input as T);
}
