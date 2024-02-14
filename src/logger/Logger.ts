export type LoggerLevel = 'error' | 'warn' | 'info' | 'debug' | 'trace';

interface LoggerOutputPayload {
    readonly level: LoggerLevel;
    readonly args: unknown[];
    readonly category?: string;
    readonly error?: Error;
}

export type LoggerOutput = (payload: LoggerOutputPayload) => void;

export interface LoggerOptions {
    readonly level?: LoggerLevel;
    readonly category?: string;
    readonly outputs: LoggerOutput[];
}

export class Logger {
    public readonly level: LoggerLevel;
    public readonly outputs: LoggerOutput[];
    public readonly category?: string;

    constructor(options: LoggerOptions) {
        this.level = options.level ?? 'info';
        this.outputs = options.outputs;
        this.category = options.category;
    }

    public subLogger(category: string) {
        return new Logger({
            outputs: this.outputs,
            category: this.category ? `${this.category} => ${category}` : category,
            level: this.level,
        });
    }

    public error(error: Error, ...args: unknown[]): void;
    public error(...args: unknown[]): void;
    public error(error: Error, ...args: unknown[]) {
        this.log('error', error, ...args);
    }

    public warn(error: Error, ...args: unknown[]): void;
    public warn(...args: unknown[]): void;
    public warn(error: Error, ...args: unknown[]) {
        this.log('warn', error, ...args);
    }

    public info(error: Error, ...args: unknown[]): void;
    public info(...args: unknown[]): void;
    public info(error: Error, ...args: unknown[]) {
        this.log('info', error, ...args);
    }

    public debug(error: Error, ...args: unknown[]): void;
    public debug(...args: unknown[]): void;
    public debug(error: Error, ...args: unknown[]) {
        this.log('debug', error, ...args);
    }

    public trace(error: Error, ...args: unknown[]): void;
    public trace(...args: unknown[]): void;
    public trace(error: Error, ...args: unknown[]) {
        this.log('trace', error, ...args);
    }

    public log(level: LoggerLevel, error: Error, ...args: unknown[]) {
        if (!this.isLevelEnabled(level)) {
            return;
        }

        let payload: LoggerOutputPayload;
        if (error instanceof Error) {
            payload = {
                category: this.category,
                level,
                args,
                error,
            };
        } else {
            payload = {
                category: this.category,
                level,
                args: [error, ...args],
            };
        }

        for (const output of this.outputs) {
            output(payload);
        }
    }

    private isLevelEnabled(level: LoggerLevel) {
        return this.getLevelNumber(level) <= this.getLevelNumber(this.level);
    }

    private getLevelNumber(level: LoggerLevel) {
        switch (level) {
            case 'error':
                return 0;
            case 'warn':
                return 1;
            case 'info':
                return 2;
            case 'debug':
                return 3;
            case 'trace':
                return 4;
            default:
                return Infinity;
        }
    }
}
