export interface ArrayOptions<T> {
  default?: T[];
}

export type ArrOptions<T = any> = ArrayOptions<T> | null | undefined;
