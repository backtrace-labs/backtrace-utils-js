import { LoggerLevel, LoggerOutput } from './Logger';

interface FormattedOutputOptions {
    readonly level?: boolean;
    readonly category?: boolean;
}

export const FormattedOutput =
    (output: (level: LoggerLevel, ...args: unknown[]) => void, options?: FormattedOutputOptions): LoggerOutput =>
    ({ level, args, category, error }) => {
        const logArgs: unknown[] = [];
        if (options?.level ?? true) {
            logArgs.push(`[${level}]`);
        }

        if ((options?.category ?? true) && category) {
            logArgs.push(`[${category}]`);
        }

        if (error) {
            logArgs.push(error.message);
        }

        logArgs.push(...args);
        return output(level, ...logArgs);
    };

export const ConsoleLoggerOutput = (options?: FormattedOutputOptions) =>
    FormattedOutput((level, ...args) => {
        switch (level) {
            case 'error':
                return console.error(...args);
            case 'warn':
                return console.warn(...args);
            case 'info':
                return console.log(...args);
            case 'debug':
            case 'trace':
                return console.debug(...args);
        }
    }, options);
