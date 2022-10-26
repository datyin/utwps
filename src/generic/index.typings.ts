export interface GetOneOfOptionsObject<T> {
  list: T[];
  default?: T | undefined;
  caseSensitive?: boolean | 0 | 1 | undefined;
}

export type GetOneOfOptions<T> = GetOneOfOptionsObject<T> | undefined | null;
