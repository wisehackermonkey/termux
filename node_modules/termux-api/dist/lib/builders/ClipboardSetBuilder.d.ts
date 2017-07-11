import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class ClipboardSetBuilder extends BaseCommandBuilder {
    constructor();
    setContents(text: string): ClipboardSetBuilder;
}
