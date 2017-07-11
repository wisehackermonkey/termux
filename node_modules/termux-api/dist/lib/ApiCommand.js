"use strict";
const TermuxApi_1 = require('./TermuxApi');
class ApiCommand {
    constructor(commandName) {
        this.commandName = commandName;
        this.eParams = new Map();
        this.esParams = new Map();
        this.ezParams = new Map();
        this.eiParams = new Map();
        this.efParams = new Map();
        this.esaParams = new Map();
        this.lastArg = null;
        this.input = null;
    }
    run() {
        return TermuxApi_1.TermuxApi.getInstance().runApi(this);
    }
    setEParam(key, param) {
        this.eParams.set(key, param);
    }
    setESParam(key, param) {
        this.esParams.set(key, param);
    }
    setEZParam(key, param) {
        let strParam = (param ? 'true' : 'false');
        this.ezParams.set(key, strParam);
    }
    setEIParam(key, param) {
        let strParam = param.toString();
        this.eiParams.set(key, strParam);
    }
    setEFParam(key, param) {
        let strParam = param.toString();
        this.efParams.set(key, strParam);
    }
    addESA(key, param) {
        let strParam = param.join(',');
        this.esaParams.set(key, strParam);
    }
    setLastArg(arg) {
        this.lastArg = arg;
    }
    setStdinInput(input) {
        if (input.substr(-1) !== '\n') {
            input += '\n';
        }
        this.input = input;
    }
    getInput() {
        return this.input;
    }
    getArgs() {
        let args = [];
        args.concat(this.getArgsForParamType('e', this.eParams));
        args.concat(this.getArgsForParamType('es', this.esParams));
        args.concat(this.getArgsForParamType('ez', this.ezParams));
        args.concat(this.getArgsForParamType('ei', this.eiParams));
        args.concat(this.getArgsForParamType('ef', this.efParams));
        args.concat(this.getArgsForParamType('esa', this.esaParams));
        if (this.lastArg !== null) {
            args.push(this.lastArg);
        }
        return args;
    }
    getArgsForParamType(paramType, parameters) {
        let args = new Array();
        for (let [key, value] of parameters.entries()) {
            args.push(`--${paramType}`);
            args.push(key);
            args.push(value);
        }
        return args;
    }
}
exports.ApiCommand = ApiCommand;
