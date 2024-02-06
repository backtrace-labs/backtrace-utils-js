export class UnwrapError<E> extends Error {
    constructor(public readonly data: E) {
        super('Operation has resulted in an error.');
    }
}

export class ResultOk<T> {
    constructor(public readonly data: T) {}
}

export class ResultErr<E> {
    constructor(public readonly data: E) {}
}

type MaybePromise<T> = T | Promise<T>;
type Map<A, B> = (data: A) => B;

export type Result<T, E> = ResultOk<T> | ResultErr<E>;
export type ResultPromise<T, E> = Promise<Result<T, E>>;

class ResultFunctions {
    public static ok<T, E = never>(data: T): Result<T, E> {
        return new ResultOk(data);
    }

    public static void<E = never>(): Result<void, E> {
        return new ResultOk(undefined);
    }

    public static err<E, T = never>(data: E): Result<T, E> {
        return new ResultErr(data);
    }

    public static isOk<T, E>(result: Result<T, E>): result is ResultOk<T> {
        return result instanceof ResultOk;
    }

    public static isErr<T, E>(result: Result<T, E>): result is ResultErr<E> {
        return result instanceof ResultErr;
    }

    public static wrapOk<T, E>(data: T | Result<T, E>): Result<T, E> {
        if (data instanceof ResultOk || data instanceof ResultErr) {
            return data;
        }

        return ResultFunctions.ok(data);
    }

    public static wrapErr<T, E>(data: E | Result<T, E>): Result<T, E> {
        if (data instanceof ResultOk || data instanceof ResultErr) {
            return data;
        }

        return ResultFunctions.err(data);
    }

    public static unwrap<T, E>(result: Result<T, E>): T {
        if (ResultFunctions.isErr(result)) {
            if (result.data instanceof Error) {
                throw result.data;
            }

            throw new UnwrapError(result.data);
        }
        return result.data;
    }

    public static map<T, E, N>(
        transform: Map<T, Promise<Result<N, E>>>,
    ): (result: Result<T, E>) => Promise<Result<N, E>>;
    public static map<T, E, N>(transform: Map<T, Result<N, E>>): (result: Result<T, E>) => Result<N, E>;
    public static map<T, E, N>(transform: Map<T, Promise<T>>): (result: Result<T, E>) => Promise<Result<N, E>>;
    public static map<T, E, N>(transform: Map<T, N>): (result: Result<T, E>) => Result<N, E>;
    public static map<T, E, N>(
        transform: Map<T, MaybePromise<N> | MaybePromise<Result<N, E>>>,
    ): (result: Result<T, E>) => MaybePromise<Result<N, E>>;
    public static map<T, E, N>(result: Result<T, E>, transform: Map<T, Promise<Result<N, E>>>): Promise<Result<N, E>>;
    public static map<T, E, N>(result: Result<T, E>, transform: Map<T, Result<N, E>>): Result<N, E>;
    public static map<T, E, N>(result: Result<T, E>, transform: Map<T, Promise<N>>): Promise<Result<N, E>>;
    public static map<T, E, N>(result: Result<T, E>, transform: Map<T, N>): Result<N, E>;
    public static map<T, E, N>(
        result: Result<T, E>,
        transform: Map<T, MaybePromise<N> | MaybePromise<Result<N, E>>>,
    ): MaybePromise<Result<N, E>>;
    public static map<T, E, N>(
        resultOrTransform: Result<T, E> | Map<T, MaybePromise<N> | MaybePromise<Result<N, E>>>,
        transform?: Map<T, MaybePromise<N> | MaybePromise<Result<N, E>>>,
    ): MaybePromise<Result<N, E>> | ((result: Result<T, E>) => MaybePromise<Result<N, E>>) {
        const map = (result: Result<T, E>, transform: Map<T, MaybePromise<N> | MaybePromise<Result<N, E>>>) => {
            if (ResultFunctions.isErr(result)) {
                return result;
            }

            if (!transform) {
                throw new Error('transform must be provided');
            }

            const maybePromise = transform(result.data);
            if (maybePromise instanceof Promise) {
                return maybePromise.then(ResultFunctions.wrapOk<N, E>);
            }
            return ResultFunctions.wrapOk(maybePromise);
        };

        if (typeof resultOrTransform === 'function') {
            return (result: Result<T, E>) => map(result, resultOrTransform);
        }

        if (!transform) {
            throw new Error('transform must be provided');
        }

        return map(resultOrTransform, transform);
    }

    public static mapErr<T, E, N>(
        transform: Map<E, Promise<Result<T, N>>>,
    ): (result: Result<T, E>) => Promise<Result<T, N>>;
    public static mapErr<T, E, N>(transform: Map<E, Result<T, N>>): (result: Result<T, E>) => Result<T, N>;
    public static mapErr<T, E, N>(transform: Map<E, Promise<N>>): (result: Result<T, E>) => Promise<Result<T, N>>;
    public static mapErr<T, E, N>(transform: Map<E, N>): (result: Result<T, E>) => Result<T, N>;
    public static mapErr<T, E, N>(
        transform: Map<E, MaybePromise<N> | MaybePromise<Result<T, N>>>,
    ): (result: Result<T, E>) => MaybePromise<Result<T, N>>;
    public static mapErr<T, E, N>(
        result: Result<T, E>,
        transform: Map<E, Promise<Result<T, N>>>,
    ): Promise<Result<T, N>>;
    public static mapErr<T, E, N>(result: Result<T, E>, transform: Map<E, Result<T, N>>): Result<T, N>;
    public static mapErr<T, E, N>(result: Result<T, E>, transform: Map<E, Promise<N>>): Promise<Result<T, N>>;
    public static mapErr<T, E, N>(result: Result<T, E>, transform: Map<E, N>): Result<T, N>;
    public static mapErr<T, E, N>(
        result: Result<T, E>,
        transform: Map<E, MaybePromise<N> | MaybePromise<Result<T, N>>>,
    ): MaybePromise<Result<T, N>>;
    public static mapErr<T, E, N>(
        resultOrTransform: Result<T, E> | Map<E, MaybePromise<N> | MaybePromise<Result<T, N>>>,
        transform?: Map<E, MaybePromise<N> | MaybePromise<Result<T, N>>>,
    ): MaybePromise<Result<T, N>> | ((result: Result<T, E>) => MaybePromise<Result<T, N>>) {
        const mapErr = (result: Result<T, E>, transform: Map<E, MaybePromise<N> | MaybePromise<Result<T, N>>>) => {
            if (ResultFunctions.isOk(result)) {
                return result;
            }

            const maybePromise = transform(result.data);
            if (maybePromise instanceof Promise) {
                return maybePromise.then(ResultFunctions.wrapErr<T, N>);
            }

            return ResultFunctions.wrapErr(maybePromise);
        };

        if (typeof resultOrTransform === 'function') {
            return (result: Result<T, E>) => mapErr(result, resultOrTransform);
        }

        if (!transform) {
            throw new Error('transform must be provided');
        }

        return mapErr(resultOrTransform, transform);
    }

    public static flat<T, E>(results: Result<T, E>[]): Result<T[], E> {
        const data: T[] = [];
        for (const result of results) {
            if (ResultFunctions.isErr(result)) {
                return result;
            }

            data.push(result.data);
        }

        return ResultFunctions.ok(data);
    }
}

export const Result = ResultFunctions;
