"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const db_connect_1 = __importDefault(require("./db-connect"));
function populateUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, db_connect_1.default)();
        const user1 = {
            email: 'john.doe@email.com',
            username: 'john.doe',
            name: 'John Doe',
            isVerified: true,
            numFollowers: 0,
        };
        const user2 = {
            email: 'jane.doe@email.com',
            username: 'jane.doe',
            name: 'Jane Doe',
            isVerified: false,
            numFollowers: 12,
        };
        const res = yield User_1.default.create([user1, user2]);
        console.log(`_id for John: ${res[0]._id}`);
        console.log(`_id for Jane: ${res[1]._id}`);
    });
}
populateUsers().then(() => process.exit(0));
