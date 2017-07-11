import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class VibrateBuilder extends BaseCommandBuilder {
    constructor();
    setDuration(duration: number): VibrateBuilder;
    force(): VibrateBuilder;
}
