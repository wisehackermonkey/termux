"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class DownloadBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('Download');
    }
    setUrl(url) {
        this.command.setLastArg(url);
        return this;
    }
    setDescription(description) {
        this.command.setESParam('description', description);
        return this;
    }
    setTitle(title) {
        this.command.setESParam('title', title);
        return this;
    }
}
exports.DownloadBuilder = DownloadBuilder;
