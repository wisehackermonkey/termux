import { ApiResult } from './ApiResult';
export declare class ApiCommand {
    commandName: string;
    private eParams;
    private esParams;
    private ezParams;
    private eiParams;
    private efParams;
    private esaParams;
    private lastArg;
    private input;
    constructor(commandName: string);
    run(): ApiResult;
    setEParam(key: string, param: string): void;
    setESParam(key: string, param: string): void;
    setEZParam(key: string, param: boolean): void;
    setEIParam(key: string, param: number): void;
    setEFParam(key: string, param: number): void;
    addESA(key: string, param: Array<string>): void;
    setLastArg(arg: string): void;
    setStdinInput(input: string): void;
    getInput(): string;
    getArgs(): Array<string>;
    private getArgsForParamType(paramType, parameters);
}
