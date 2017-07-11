import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class ToastBuilder extends BaseCommandBuilder {
    constructor();
    setText(text: string): ToastBuilder;
    shortDuration(): ToastBuilder;
}
