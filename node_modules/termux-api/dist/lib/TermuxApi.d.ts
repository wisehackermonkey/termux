import { ApiCommand } from './ApiCommand';
import { ApiCommandFactory } from './ApiCommandFactory';
import { ApiRunner } from './ApiRunner';
import { ApiResult } from './ApiResult';
export declare class TermuxApi {
    private static _instance;
    protected commandFactory: ApiCommandFactory;
    protected apiRunner: ApiRunner;
    constructor(apiPath?: string);
    static getInstance(): TermuxApi;
    apiExists(): Promise<boolean>;
    runApi(moduleConfig: ApiCommand): ApiResult;
    createCommand(): ApiCommandFactory;
}
