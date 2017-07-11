"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class VibrateBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('Vibrate');
    }
    setDuration(duration) {
        this.command.setEIParam('duration_ms', duration);
        return this;
    }
    force() {
        this.command.setEZParam('force', true);
        return this;
    }
}
exports.VibrateBuilder = VibrateBuilder;
