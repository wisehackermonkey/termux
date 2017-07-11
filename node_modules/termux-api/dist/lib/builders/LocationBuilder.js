"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class LocationBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('Location');
    }
    fromGPSProvider() {
        this.command.setESParam('provider', 'gps');
        return this;
    }
    fromNetworkProvider() {
        this.command.setESParam('provider', 'network');
        return this;
    }
    fromPassiveProvider() {
        this.command.setESParam('provider', 'passive');
        return this;
    }
    requestLast() {
        this.command.setESParam('request', 'last');
        return this;
    }
    requestOnce() {
        this.command.setESParam('request', 'once');
        return this;
    }
    requestUpdates() {
        this.command.setESParam('request', 'updates');
        return this;
    }
}
exports.LocationBuilder = LocationBuilder;
