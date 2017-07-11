"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class SmsInboxBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('SmsInbox');
    }
    showPhoneNumbers() {
        this.command.setEZParam('show-phone-numbers', true);
        return this;
    }
    showDates() {
        this.command.setEZParam('show-dates', true);
        return this;
    }
    offset(offset) {
        this.command.setEIParam('offset', offset);
        return this;
    }
    limit(limit) {
        this.command.setEIParam('limit', limit);
        return this;
    }
}
exports.SmsInboxBuilder = SmsInboxBuilder;
