export interface ObjectOptions<T> {
  default?: T;
}

export type ObjOptions<T> = ObjectOptions<T> | null | undefined;
