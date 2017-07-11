import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class NotificationBuilder extends BaseCommandBuilder {
    constructor();
    setContent(content: string): NotificationBuilder;
    setId(id: string): NotificationBuilder;
    setTitle(title: string): NotificationBuilder;
    setUrl(url: string): NotificationBuilder;
}
