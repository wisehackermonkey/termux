import { ChildProcess } from 'child_process';
export declare class ApiResult {
    private apiProcess;
    private output;
    private statusCode;
    private apiRunning;
    constructor(apiProcess: ChildProcess);
    getStatusCode(): Promise<number>;
    isRunning(): boolean;
    getOutputObject(): Promise<Object>;
    getOutputString(): Promise<string>;
    killApi(): void;
    private readStatusCode();
    private readStream(stream);
}
