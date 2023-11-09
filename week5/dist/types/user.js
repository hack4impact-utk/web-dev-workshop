"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zUserResponse = exports.zCreateUserRequest = exports.zUserEntity = void 0;
const zod_1 = require("zod");
/* Base */
const zUser = zod_1.z.object({
    username: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    isVerified: zod_1.z.boolean(),
    numFollowers: zod_1.z.number(),
});
/* Entity */
exports.zUserEntity = zUser.extend({
    _id: zod_1.z.string(),
});
/* Create Request */
exports.zCreateUserRequest = zUser.omit({
    isVerified: true,
    numFollowers: true,
});
/* Response */
exports.zUserResponse = exports.zUserEntity;
exports.default = zUser;
