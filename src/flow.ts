import { _pipe, _pipeAsync } from './pipe';

export function flow<A, B>(fnAb: (a: A) => B): (a: A) => B;
export function flow<A, B, C>(...fns: [...Parameters<typeof flow<A, B>>, (b: B) => C]): (a: A) => C;
export function flow<A, B, C, D>(...fns: [...Parameters<typeof flow<A, B, C>>, (c: C) => D]): (a: A) => D;
export function flow<A, B, C, D, E>(...fns: [...Parameters<typeof flow<A, B, C, D>>, (d: D) => E]): (a: A) => E;
export function flow<A, B, C, D, E, F>(...fns: [...Parameters<typeof flow<A, B, C, D, E>>, (e: E) => F]): (a: A) => F;
export function flow<A, B, C, D, E, F, G>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F>>, (f: F) => G]
): (a: A) => G;
export function flow<A, B, C, D, E, F, G, H>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G>>, (g: G) => H]
): (a: A) => H;
export function flow<A, B, C, D, E, F, G, H, I>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H>>, (h: H) => I]
): (a: A) => I;
export function flow<A, B, C, D, E, F, G, H, I, J>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I>>, (i: I) => J]
): (a: A) => J;
export function flow<A, B, C, D, E, F, G, H, I, J, K>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J>>, (j: J) => K]
): (a: A) => K;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K>>, (k: K) => L]
): (a: A) => L;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L>>, (l: L) => M]
): (a: A) => M;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M>>, (m: M) => N]
): (a: A) => N;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N>>, (n: N) => O]
): (a: A) => O;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>>, (o: O) => P]
): (a: A) => P;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>>, (p: P) => Q]
): (a: A) => Q;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>>, (q: Q) => R]
): (a: A) => R;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>>, (r: R) => S]
): (a: A) => S;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>>, (s: S) => T]
): (a: A) => T;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>>, (t: T) => U]
): (a: A) => U;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>>, (u: U) => V]
): (a: A) => V;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
    ...fns: [...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>>, (v: V) => W]
): (a: A) => W;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
    ...fns: [
        ...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>>,
        (w: W) => X,
    ]
): (a: A) => X;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
    ...fns: [
        ...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>>,
        (x: X) => Y,
    ]
): (a: A) => Y;
export function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    ...fns: [
        ...Parameters<typeof flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>>,
        (y: Y) => Z,
    ]
): (a: A) => Z;
export function flow(...fns: ((v: unknown) => unknown)[]): (v: unknown) => unknown {
    return (a) => _pipe(a, ...fns);
}

export function flowAsync<A, B>(fnAb: (a: A) => B | Promise<B>): (a: A) => Promise<B>;
export function flowAsync<A, B, C>(
    ...fns: [...Parameters<typeof flowAsync<A, B>>, (b: B) => C | Promise<C>]
): (a: A) => Promise<C>;
export function flowAsync<A, B, C, D>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C>>, (c: C) => D | Promise<D>]
): (a: A) => Promise<D>;
export function flowAsync<A, B, C, D, E>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D>>, (d: D) => E | Promise<E>]
): (a: A) => Promise<E>;
export function flowAsync<A, B, C, D, E, F>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E>>, (e: E) => F | Promise<F>]
): (a: A) => Promise<F>;
export function flowAsync<A, B, C, D, E, F, G>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F>>, (f: F) => G | Promise<G>]
): (a: A) => Promise<G>;
export function flowAsync<A, B, C, D, E, F, G, H>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G>>, (g: G) => H | Promise<H>]
): (a: A) => Promise<H>;
export function flowAsync<A, B, C, D, E, F, G, H, I>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H>>, (h: H) => I | Promise<I>]
): (a: A) => Promise<I>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I>>, (i: I) => J | Promise<J>]
): (a: A) => Promise<J>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J>>, (j: J) => K | Promise<K>]
): (a: A) => Promise<K>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K>>, (k: K) => L | Promise<L>]
): (a: A) => Promise<L>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L>>, (l: L) => M | Promise<M>]
): (a: A) => Promise<M>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M>>, (m: M) => N | Promise<N>]
): (a: A) => Promise<N>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N>>, (n: N) => O | Promise<O>]
): (a: A) => Promise<O>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>>, (o: O) => P | Promise<P>]
): (a: A) => Promise<P>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    ...fns: [...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>>, (p: P) => Q | Promise<Q>]
): (a: A) => Promise<Q>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>>,
        (q: Q) => R | Promise<R>,
    ]
): (a: A) => Promise<R>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>>,
        (r: R) => S | Promise<S>,
    ]
): (a: A) => Promise<S>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>>,
        (s: S) => T | Promise<T>,
    ]
): (a: A) => Promise<T>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>>,
        (t: T) => U | Promise<U>,
    ]
): (a: A) => Promise<U>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>>,
        (u: U) => V | Promise<V>,
    ]
): (a: A) => Promise<V>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>>,
        (v: V) => W | Promise<W>,
    ]
): (a: A) => Promise<W>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>>,
        (w: W) => X | Promise<X>,
    ]
): (a: A) => Promise<X>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>>,
        (x: X) => Y | Promise<Y>,
    ]
): (a: A) => Promise<Y>;
export function flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    ...fns: [
        ...Parameters<typeof flowAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>>,
        (y: Y) => Z | Promise<Z>,
    ]
): (a: A) => Promise<Z>;
export function flowAsync(...fns: ((v: unknown) => unknown | Promise<unknown>)[]): (v: unknown) => Promise<unknown> {
    return (a) => _pipeAsync(a, ...fns);
}
