import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class LocationBuilder extends BaseCommandBuilder {
    constructor();
    fromGPSProvider(): LocationBuilder;
    fromNetworkProvider(): LocationBuilder;
    fromPassiveProvider(): LocationBuilder;
    requestLast(): LocationBuilder;
    requestOnce(): LocationBuilder;
    requestUpdates(): LocationBuilder;
}
