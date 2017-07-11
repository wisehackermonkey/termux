"use strict";
const ApiCommand_1 = require('../ApiCommand');
class BaseCommandBuilder {
    constructor(apiCommand) {
        this.command = new ApiCommand_1.ApiCommand(apiCommand);
    }
    build() {
        return this.command;
    }
}
exports.BaseCommandBuilder = BaseCommandBuilder;
