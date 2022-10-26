interface NumberOptionsObject<T> {
  min?: number;
  max?: number;
  oneOf?: T[];
  default?: T;
}

export type NumberOptions<T = number> = NumberOptionsObject<T> | null | undefined;
