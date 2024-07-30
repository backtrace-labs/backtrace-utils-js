export const KIND = Symbol.for('kind');

export interface Kind<K> {
    readonly [KIND]: K;
}

export type MaybePromise<T> = T | Promise<T>;
export type Map<A, B> = (data: A) => B;
