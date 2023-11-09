"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TweetSchema = new mongoose_1.Schema({
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
});
exports.default = mongoose_1.models.Tweet ||
    (0, mongoose_1.model)('Tweet', TweetSchema);
