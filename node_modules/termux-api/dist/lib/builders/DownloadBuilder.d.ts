import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class DownloadBuilder extends BaseCommandBuilder {
    constructor();
    setUrl(url: string): DownloadBuilder;
    setDescription(description: string): DownloadBuilder;
    setTitle(title: string): DownloadBuilder;
}
