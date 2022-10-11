export declare function is<T>(input: unknown, type: string): input is T;
export declare function isNil(input: unknown): input is null | undefined;
export declare function isPrimitive(input: unknown): input is string | number | boolean;
export declare function isOneOf<T = any>(input: unknown, options: T[]): input is T;
