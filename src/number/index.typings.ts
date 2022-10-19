interface NumberOptionsObject {
  min?: number;
  max?: number;
  oneOf?: number[];
  default?: number;
}

export type NumberOptions = NumberOptionsObject | null | undefined;
