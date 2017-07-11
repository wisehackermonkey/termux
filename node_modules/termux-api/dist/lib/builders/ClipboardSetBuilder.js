"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class ClipboardSetBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('Clipboard');
        this.command.setEParam('api_version', '2');
        this.command.setEZParam('set', true);
    }
    setContents(text) {
        this.command.setStdinInput(text);
        return this;
    }
}
exports.ClipboardSetBuilder = ClipboardSetBuilder;
