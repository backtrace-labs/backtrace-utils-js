import { pipe, pipeAsync } from '../src/pipe';

const increment = (a: number) => ++a;
const incrementAsync = (a: number) => new Promise<number>((resolve) => setImmediate(() => resolve(++a)));

const multiplyBy2 = (a: number) => a * 2;
const multiplyBy2Async = (a: number) => new Promise<number>((resolve) => setImmediate(() => resolve(a * 2)));

describe('pipe', () => {
    it('should execute functions in order from first to last', () => {
        const fn1 = jest.fn(increment);
        const fn2 = jest.fn(increment);
        const fn3 = jest.fn(increment);

        pipe(0, fn1, fn2, fn3);

        expect(fn1).toHaveBeenCalledWith(0);
        expect(fn2).toHaveBeenCalledWith(1);
        expect(fn3).toHaveBeenCalledWith(2);
    });

    it('should call functions exactly once', () => {
        const fn1 = jest.fn(increment);
        const fn2 = jest.fn(increment);
        const fn3 = jest.fn(increment);

        pipe(0, fn1, fn2, fn3);

        expect(fn1).toHaveBeenCalledTimes(1);
        expect(fn2).toHaveBeenCalledTimes(1);
        expect(fn3).toHaveBeenCalledTimes(1);
    });

    it('should return result from function flow', () => {
        const fn1 = jest.fn(multiplyBy2);
        const fn2 = jest.fn(multiplyBy2);
        const fn3 = jest.fn(multiplyBy2);

        const result = pipe(2, fn1, fn2, fn3);

        expect(result).toEqual(2 ** 4);
    });
});

describe('pipeAsync', () => {
    it('should execute functions in order from first to last', async () => {
        const fn1 = jest.fn(increment);
        const fn2 = jest.fn(incrementAsync);
        const fn3 = jest.fn(increment);

        await pipeAsync(0, fn1, fn2, fn3);

        expect(fn1).toHaveBeenCalledWith(0);
        expect(fn2).toHaveBeenCalledWith(1);
        expect(fn3).toHaveBeenCalledWith(2);
    });

    it('should call functions exactly once', async () => {
        const fn1 = jest.fn(increment);
        const fn2 = jest.fn(incrementAsync);
        const fn3 = jest.fn(increment);

        await pipeAsync(0, fn1, fn2, fn3);

        expect(fn1).toHaveBeenCalledTimes(1);
        expect(fn2).toHaveBeenCalledTimes(1);
        expect(fn3).toHaveBeenCalledTimes(1);
    });

    it('should return result from function flow', async () => {
        const fn1 = jest.fn(multiplyBy2);
        const fn2 = jest.fn(multiplyBy2Async);
        const fn3 = jest.fn(multiplyBy2);

        const result = await pipeAsync(2, fn1, fn2, fn3);

        expect(result).toEqual(2 ** 4);
    });
});
