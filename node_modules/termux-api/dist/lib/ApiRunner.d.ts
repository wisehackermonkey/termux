import { ApiCommand } from './ApiCommand';
import { ApiResult } from './ApiResult';
export declare class ApiRunner {
    apiPath: string;
    constructor(apiPath: string);
    runCommand(command: ApiCommand): ApiResult;
}
