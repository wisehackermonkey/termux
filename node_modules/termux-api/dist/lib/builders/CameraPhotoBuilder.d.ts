import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class CameraPhotoBuilder extends BaseCommandBuilder {
    constructor();
    setOutputFile(path: string): CameraPhotoBuilder;
    setCamera(id: Number): CameraPhotoBuilder;
}
