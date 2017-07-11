import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class SmsInboxBuilder extends BaseCommandBuilder {
    constructor();
    showPhoneNumbers(): SmsInboxBuilder;
    showDates(): SmsInboxBuilder;
    offset(offset: number): SmsInboxBuilder;
    limit(limit: number): SmsInboxBuilder;
}
