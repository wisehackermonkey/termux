"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class SmsSendBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('SmsSend');
    }
    setRecipients(recipients) {
        this.command.addESA('recipients', recipients);
        return this;
    }
    setRecipient(recipient) {
        this.setRecipients([recipient]);
        return this;
    }
    setMessage(message) {
        this.command.setLastArg(message);
        return this;
    }
}
exports.SmsSendBuilder = SmsSendBuilder;
