"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class ToastBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('Toast');
    }
    setText(text) {
        this.command.setStdinInput(text);
        return this;
    }
    shortDuration() {
        this.command.setEZParam('short', true);
        return this;
    }
}
exports.ToastBuilder = ToastBuilder;
