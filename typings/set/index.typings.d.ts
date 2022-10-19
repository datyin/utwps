interface SetOptionsObject<T> {
    default?: Set<T>;
}
interface WeakSetOptionsObject<T extends object> {
    default?: WeakSet<T>;
}
export declare type SetOptions<T> = SetOptionsObject<T> | null | undefined;
export declare type WeakSetOptions<T extends object> = WeakSetOptionsObject<T> | null | undefined;
export {};
