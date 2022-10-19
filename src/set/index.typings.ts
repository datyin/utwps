interface SetOptionsObject<T> {
  default?: Set<T>;
}

interface WeakSetOptionsObject<T extends object> {
  default?: WeakSet<T>;
}

export type SetOptions<T> = SetOptionsObject<T> | null | undefined;
export type WeakSetOptions<T extends object> = WeakSetOptionsObject<T> | null | undefined;
