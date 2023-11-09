"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    numFollowers: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    versionKey: false,
});
exports.default = mongoose_1.models.User ||
    (0, mongoose_1.model)('User', UserSchema);
