"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class DialogBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('Dialog');
    }
    setTypePassword() {
        this.command.setESParam('input_type', 'password');
        return this;
    }
    setTitle(title) {
        this.command.setESParam('input_title', title);
        return this;
    }
    setHint(title) {
        this.command.setESParam('input_hint', title);
        return this;
    }
    setMultiline() {
        this.command.setEZParam('multiple_lines', true);
        return this;
    }
}
exports.DialogBuilder = DialogBuilder;
