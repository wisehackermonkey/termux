"use strict";
const TermuxApi_1 = require('./lib/TermuxApi');
exports.TermuxApi = TermuxApi_1.TermuxApi;
let api = TermuxApi_1.TermuxApi.getInstance();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = api;
