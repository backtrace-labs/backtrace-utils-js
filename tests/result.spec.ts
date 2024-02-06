import { pipe } from '../src/pipe';
import { Result } from '../src/result';

describe('result', () => {
    describe('isOk', () => {
        it('should return true for ok results', () => {
            const result = Result.ok(123);
            expect(Result.isOk(result)).toEqual(true);
        });

        it('should return false for err results', () => {
            const result = Result.err(123);
            expect(Result.isOk(result)).toEqual(false);
        });
    });

    describe('isErr', () => {
        it('should return true for err results', () => {
            const result = Result.err(123);
            expect(Result.isErr(result)).toEqual(true);
        });

        it('should return false for ok results', () => {
            const result = Result.ok(123);
            expect(Result.isErr(result)).toEqual(false);
        });
    });

    describe('wrapOk', () => {
        it('should return ok result for non-result data', () => {
            const result = Result.wrapOk(123);
            expect(Result.isOk(result)).toEqual(true);
        });

        it('should return same result for ok result', () => {
            const result = Result.ok(123);
            const actual = Result.wrapOk(result);
            expect(result).toBe(actual);
        });

        it('should return same result for err result', () => {
            const result = Result.err(123);
            const actual = Result.wrapOk(result);
            expect(result).toBe(actual);
        });
    });

    describe('wrapErr', () => {
        it('should return err result for non-result data', () => {
            const result = Result.wrapErr(123);
            expect(Result.isErr(result)).toEqual(true);
        });

        it('should return same result for ok result', () => {
            const result = Result.ok(123);
            const actual = Result.wrapErr(result);
            expect(result).toBe(actual);
        });

        it('should return same result for err result', () => {
            const result = Result.err(123);
            const actual = Result.wrapErr(result);
            expect(result).toBe(actual);
        });
    });

    describe('map', () => {
        it('should map ok result to another result with data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.ok(data);

            const actual = Result.map(result, (data) => data * 2);

            expect(actual.data).toEqual(expected);
        });

        it('should map ok result asynchronously to another result with data', async () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.ok(data);

            const actual = Result.map(result, async (data) => data * 2);

            await expect(actual).resolves.toEqual(expect.objectContaining({ data: expected }));
        });

        it('should not map err result to another result with data', () => {
            const result = Result.err(123);

            const actual = Result.map(result, () => {
                throw new Error('should not be executed');
            });

            expect(actual).toBe(result);
        });

        it('should reduce ok result to another result with result data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.ok(data);

            const actual = Result.map(result, (data) => Result.ok(data * 2));

            expect(actual.data).toEqual(expected);
        });

        it('should reduce ok result to err result', () => {
            const data = 123;
            const expected = 'error';
            const result = Result.ok(data);

            const actual = Result.map(result, (data) => Result.err(expected));

            expect(Result.isErr(actual)).toEqual(true);
            expect(actual.data).toEqual(expected);
        });
    });

    describe('mapErr', () => {
        it('should map err result to another result with data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.err(data);

            const actual = Result.mapErr(result, (data) => data * 2);

            expect(actual.data).toEqual(expected);
        });

        it('should map err result asynchronously to another result with data', async () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.err(data);

            const actual = Result.mapErr(result, async (data) => data * 2);

            await expect(actual).resolves.toEqual(expect.objectContaining({ data: expected }));
        });

        it('should not map ok result to another result with data', () => {
            const result = Result.ok(123);

            const actual = Result.mapErr(result, () => {
                throw new Error('should not be executed');
            });

            expect(actual).toBe(result);
        });

        it('should reduce err result to another result with result data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.err(data);

            const actual = Result.mapErr(result, (data) => Result.err(data * 2));

            expect(actual.data).toEqual(expected);
        });

        it('should reduce err result to ok result', () => {
            const data = 123;
            const expected = 'ok';
            const result = Result.err(data);

            const actual = Result.mapErr(result, () => Result.ok(expected));

            expect(Result.isOk(actual)).toEqual(true);
            expect(actual.data).toEqual(expected);
        });
    });

    describe('curried map', () => {
        it('should map ok result to another result with data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.ok(data);

            const actual = pipe(
                result,
                Result.map((data) => data * 2),
            );

            expect(actual.data).toEqual(expected);
        });

        it('should map ok result asynchronously to another result with data', async () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.ok(data);

            const actual = pipe(
                result,
                Result.map(async (data) => data * 2),
            );

            await expect(actual).resolves.toEqual(expect.objectContaining({ data: expected }));
        });

        it('should not map err result to another result with data', () => {
            const result = Result.err(123);

            const actual = pipe(
                result,
                Result.map(() => {
                    throw new Error('should not be executed');
                }),
            );

            expect(actual).toBe(result);
        });

        it('should reduce ok result to another result with result data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.ok(data);

            const actual = pipe(
                result,
                Result.map((data) => Result.ok(data * 2)),
            );

            expect(actual.data).toEqual(expected);
        });

        it('should reduce ok result to err result', () => {
            const data = 123;
            const expected = 'error';
            const result = Result.ok(data);

            const actual = pipe(
                result,
                Result.map((data) => Result.err(expected)),
            );

            expect(Result.isErr(actual)).toEqual(true);
            expect(actual.data).toEqual(expected);
        });
    });

    describe('curried mapErr', () => {
        it('should map err result to another result with data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.err(data);

            const actual = pipe(
                result,
                Result.mapErr((data) => data * 2),
            );

            expect(actual.data).toEqual(expected);
        });

        it('should map err result asynchronously to another result with data', async () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.err(data);

            const actual = pipe(
                result,
                Result.mapErr(async (data) => data * 2),
            );

            await expect(actual).resolves.toEqual(expect.objectContaining({ data: expected }));
        });

        it('should not map ok result to another result with data', () => {
            const result = Result.ok(123);

            const actual = pipe(
                result,
                Result.mapErr(() => {
                    throw new Error('should not be executed');
                }),
            );

            expect(actual).toBe(result);
        });

        it('should reduce err result to another result with result data', () => {
            const data = 123;
            const expected = data * 2;
            const result = Result.err(data);

            const actual = pipe(
                result,
                Result.mapErr((data) => Result.err(data * 2)),
            );

            expect(actual.data).toEqual(expected);
        });

        it('should reduce err result to ok result', () => {
            const data = 123;
            const expected = 'ok';
            const result = Result.err(data);

            const actual = pipe(
                result,
                Result.mapErr(() => Result.ok(expected)),
            );

            expect(Result.isOk(actual)).toEqual(true);
            expect(actual.data).toEqual(expected);
        });
    });

    describe('flat', () => {
        it('should flatten ok result datas into single ok result with data array', () => {
            const data = [1, 2, 3, 4, 5];
            const results = data.map(Result.ok);
            const expected = Result.ok(data);

            const actual = Result.flat(results);

            expect(actual).toEqual(expected);
        });

        it('should return first err result if any of the results is err', () => {
            const data = [1, 'err1', 3, 'err2', 5];
            const results = data.map((data) => (typeof data === 'number' ? Result.ok(data) : Result.err(data)));
            const expected = Result.err('err1');

            const actual = Result.flat(results);

            expect(actual).toEqual(expected);
        });
    });
});
