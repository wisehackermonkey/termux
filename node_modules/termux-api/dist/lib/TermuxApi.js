"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const ApiCommandFactory_1 = require('./ApiCommandFactory');
const ApiRunner_1 = require('./ApiRunner');
const fs_1 = require('fs');
const DEFAULT_API_PATH = '/data/data/com.termux/files/usr/libexec/termux-api';
class TermuxApi {
    constructor(apiPath = DEFAULT_API_PATH) {
        if (TermuxApi._instance) {
            throw new Error('Use TermuxApi.getInstance() instead!');
        }
        TermuxApi._instance = this;
        this.apiRunner = new ApiRunner_1.ApiRunner(apiPath);
        this.commandFactory = new ApiCommandFactory_1.ApiCommandFactory();
    }
    static getInstance() {
        return TermuxApi._instance;
    }
    apiExists() {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise(resolve => {
                fs_1.access(this.apiRunner.apiPath, fs_1.X_OK, err => {
                    if (err)
                        resolve(false);
                    resolve(true);
                });
            });
        });
    }
    runApi(moduleConfig) {
        return this.apiRunner.runCommand(moduleConfig);
    }
    createCommand() {
        return this.commandFactory;
    }
}
TermuxApi._instance = new TermuxApi();
exports.TermuxApi = TermuxApi;
