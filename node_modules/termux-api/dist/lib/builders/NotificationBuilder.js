"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class NotificationBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('Notification');
    }
    setContent(content) {
        this.command.setESParam('content', content);
        return this;
    }
    setId(id) {
        this.command.setESParam('id', id);
        return this;
    }
    setTitle(title) {
        this.command.setESParam('title', title);
        return this;
    }
    setUrl(url) {
        this.command.setESParam('url', url);
        return this;
    }
}
exports.NotificationBuilder = NotificationBuilder;
