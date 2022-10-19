interface ObjectOptionsObject<T> {
  default?: T;
}

export type ObjectOptions<T> = ObjectOptionsObject<T> | null | undefined;
