interface ArrayOptionsObject<T> {
  default?: T[];
}

export type ArrayOptions<T = any> = ArrayOptionsObject<T> | null | undefined;
