"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class CameraPhotoBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('CameraPhoto');
    }
    setOutputFile(path) {
        this.command.setESParam('file', path);
        return this;
    }
    setCamera(id) {
        this.command.setESParam('camera', id.toString());
        return this;
    }
}
exports.CameraPhotoBuilder = CameraPhotoBuilder;
