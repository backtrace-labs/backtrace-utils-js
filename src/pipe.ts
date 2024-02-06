export function pipeAsync<A, B>(value: A, fnAb: (a: A) => B | Promise<B>): Promise<B>;
export function pipeAsync<A, B, C>(
    ...args: [...Parameters<typeof pipeAsync<A, B>>, (b: B) => C | Promise<C>]
): Promise<C>;
export function pipeAsync<A, B, C, D>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C>>, (c: C) => D | Promise<D>]
): Promise<D>;
export function pipeAsync<A, B, C, D, E>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D>>, (d: D) => E | Promise<E>]
): Promise<E>;
export function pipeAsync<A, B, C, D, E, F>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E>>, (e: E) => F | Promise<F>]
): Promise<F>;
export function pipeAsync<A, B, C, D, E, F, G>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F>>, (f: F) => G | Promise<G>]
): Promise<G>;
export function pipeAsync<A, B, C, D, E, F, G, H>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G>>, (g: G) => H | Promise<H>]
): Promise<H>;
export function pipeAsync<A, B, C, D, E, F, G, H, I>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H>>, (h: H) => I | Promise<I>]
): Promise<I>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I>>, (i: I) => J | Promise<J>]
): Promise<J>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J>>, (j: J) => K | Promise<K>]
): Promise<K>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K>>, (k: K) => L | Promise<L>]
): Promise<L>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L>>, (l: L) => M | Promise<M>]
): Promise<M>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M>>, (m: M) => N | Promise<N>]
): Promise<N>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N>>, (n: N) => O | Promise<O>]
): Promise<O>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>>, (o: O) => P | Promise<P>]
): Promise<P>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    ...args: [...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>>, (p: P) => Q | Promise<Q>]
): Promise<Q>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>>,
        (Q: Q) => R | Promise<R>,
    ]
): Promise<R>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>>,
        (r: R) => S | Promise<S>,
    ]
): Promise<S>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>>,
        (s: S) => T | Promise<T>,
    ]
): Promise<T>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>>,
        (t: T) => U | Promise<U>,
    ]
): Promise<U>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>>,
        (u: U) => V | Promise<V>,
    ]
): Promise<V>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>>,
        (v: V) => W | Promise<W>,
    ]
): Promise<W>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>>,
        (w: W) => X | Promise<X>,
    ]
): Promise<X>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>>,
        (x: X) => Y | Promise<Y>,
    ]
): Promise<Y>;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    ...args: [
        ...Parameters<typeof pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>>,
        (y: Y) => Z | Promise<Z>,
    ]
): Promise<Z>;
export function pipeAsync(value: unknown, ...fns: ((v: unknown) => unknown | Promise<unknown>)[]): Promise<unknown> {
    return _pipeAsync(value, ...fns);
}

export async function _pipeAsync(
    value: unknown,
    ...fns: ((v: unknown) => unknown | Promise<unknown>)[]
): Promise<unknown> {
    for (const fn of fns) {
        value = await fn(value);
    }
    return value;
}

export function pipe<A, B>(value: A, fnAb: (a: A) => B): B;
export function pipe<A, B, C>(...args: [...Parameters<typeof pipe<A, B>>, (b: B) => C]): C;
export function pipe<A, B, C, D>(...args: [...Parameters<typeof pipe<A, B, C>>, (c: C) => D]): D;
export function pipe<A, B, C, D, E>(...args: [...Parameters<typeof pipe<A, B, C, D>>, (d: D) => E]): E;
export function pipe<A, B, C, D, E, F>(...args: [...Parameters<typeof pipe<A, B, C, D, E>>, (e: E) => F]): F;
export function pipe<A, B, C, D, E, F, G>(...args: [...Parameters<typeof pipe<A, B, C, D, E, F>>, (f: F) => G]): G;
export function pipe<A, B, C, D, E, F, G, H>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G>>, (g: G) => H]
): H;
export function pipe<A, B, C, D, E, F, G, H, I>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H>>, (h: H) => I]
): I;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I>>, (i: I) => J]
): J;
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J>>, (j: J) => K]
): K;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K>>, (k: K) => L]
): L;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L>>, (l: L) => M]
): M;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>>, (m: M) => N]
): N;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>>, (n: N) => O]
): O;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>>, (o: O) => P]
): P;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>>, (p: P) => Q]
): Q;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>>, (Q: Q) => R]
): R;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>>, (r: R) => S]
): S;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>>, (s: S) => T]
): T;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>>, (t: T) => U]
): U;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>>, (u: U) => V]
): V;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
    ...args: [...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>>, (v: V) => W]
): W;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
    ...args: [
        ...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>>,
        (w: W) => X,
    ]
): X;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
    ...args: [
        ...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>>,
        (x: X) => Y,
    ]
): Y;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    ...args: [
        ...Parameters<typeof pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>>,
        (y: Y) => Z,
    ]
): Z;
export function pipe(value: unknown, ...fns: ((v: unknown) => unknown)[]): unknown {
    return _pipe(value, ...fns);
}

export function _pipe(value: unknown, ...fns: ((v: unknown) => unknown)[]): unknown {
    for (const fn of fns) {
        value = fn(value);
    }
    return value;
}
