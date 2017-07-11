import { ApiCommand } from '../ApiCommand';
export declare class BaseCommandBuilder {
    protected command: ApiCommand;
    constructor(apiCommand: string);
    build(): ApiCommand;
}
