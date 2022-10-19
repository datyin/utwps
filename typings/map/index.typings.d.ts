interface MapOptionsObject<K, V> {
    default?: Map<K, V>;
}
interface WeakMapOptionsObject<K extends object, V> {
    default?: WeakMap<K, V>;
}
export declare type MapOptions<K, V> = MapOptionsObject<K, V> | null | undefined;
export declare type WeakMapOptions<K extends object, V> = WeakMapOptionsObject<K, V> | null | undefined;
export {};
