"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class ApiResult {
    constructor(apiProcess) {
        this.apiRunning = true;
        this.apiProcess = apiProcess;
        this.output = this.readStream(this.apiProcess.stdout);
        this.statusCode = this.readStatusCode();
    }
    getStatusCode() {
        return __awaiter(this, void 0, Promise, function* () {
            return yield this.statusCode;
        });
    }
    isRunning() {
        return this.apiRunning;
    }
    getOutputObject() {
        return __awaiter(this, void 0, Promise, function* () {
            let output = yield this.output;
            try {
                return JSON.parse(output);
            }
            catch (e) {
                console.error(e);
                throw e;
            }
        });
    }
    getOutputString() {
        return __awaiter(this, void 0, Promise, function* () {
            return yield this.output;
        });
    }
    killApi() {
        this.apiProcess.kill('SIGHUP');
    }
    readStatusCode() {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise(resolve => {
                this.apiProcess.on('close', code => {
                    this.apiRunning = false;
                    resolve(code);
                });
            });
        });
    }
    readStream(stream) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise((resolve, reject) => {
                let data = [];
                stream.on('data', (chunk) => {
                    data.push(chunk);
                });
                stream.on('end', () => {
                    resolve(Buffer.concat(data).toString());
                });
                stream.on('error', (error) => {
                    reject(error);
                });
            });
        });
    }
}
exports.ApiResult = ApiResult;
