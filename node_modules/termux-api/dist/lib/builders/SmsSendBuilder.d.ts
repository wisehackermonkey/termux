import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class SmsSendBuilder extends BaseCommandBuilder {
    constructor();
    setRecipients(recipients: Array<string>): SmsSendBuilder;
    setRecipient(recipient: string): SmsSendBuilder;
    setMessage(message: string): SmsSendBuilder;
}
