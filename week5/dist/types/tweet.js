"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zTweetResponse = exports.zCreateTweetRequest = exports.zTweetEntity = void 0;
const zod_1 = require("zod");
const user_1 = __importStar(require("./user"));
/* Base */
const zTweet = zod_1.z.object({
    author: user_1.default,
    content: zod_1.z.string(),
});
/* Entity */
exports.zTweetEntity = zTweet.extend({
    _id: zod_1.z.string(),
    author: zod_1.z.string(),
});
/* Create Request */
exports.zCreateTweetRequest = exports.zTweetEntity.omit({ _id: true });
/* Response */
exports.zTweetResponse = exports.zTweetEntity.extend({
    author: user_1.zUserResponse,
});
exports.default = zTweet;
