"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class TTSEnginesBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.command.setESParam('engine', 'LIST_AVAILABLE');
    }
}
exports.TTSEnginesBuilder = TTSEnginesBuilder;
