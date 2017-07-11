import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class DialogBuilder extends BaseCommandBuilder {
    constructor();
    setTypePassword(): DialogBuilder;
    setTitle(title: string): DialogBuilder;
    setHint(title: string): DialogBuilder;
    setMultiline(): DialogBuilder;
}
