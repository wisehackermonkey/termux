"use strict";
const ApiResult_1 = require('./ApiResult');
const child_process_1 = require('child_process');
class ApiRunner {
    constructor(apiPath) {
        this.apiPath = apiPath;
    }
    runCommand(command) {
        let args = [command.commandName].concat(command.getArgs());
        let api = child_process_1.spawn(this.apiPath, args);
        let childInput = command.getInput();
        if (childInput !== null) {
            api.stdin.end(childInput);
        }
        return new ApiResult_1.ApiResult(api);
    }
}
exports.ApiRunner = ApiRunner;
