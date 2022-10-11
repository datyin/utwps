import type { InDateDirection } from "./index.typings";
export declare function isDate(input: unknown): input is Date;
export declare function compareDate(input: unknown, direction?: InDateDirection, compareWith?: Date | undefined): boolean | null;
export declare function isDateInThePast(input: unknown, compareWith?: Date | undefined): boolean | null;
export declare function isDateSameDayOrInThePast(input: unknown, compareWith?: Date | undefined): boolean | null;
export declare function isDateInTheFuture(input: unknown, compareWith?: Date | undefined): boolean | null;
export declare function isDateSameDayOrInTheFuture(input: unknown, compareWith?: Date | undefined): boolean | null;
export declare function isDateSameDay(input: unknown, compareWith?: Date | undefined): boolean | null;
