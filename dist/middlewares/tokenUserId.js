"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_1 = require("../configs/secret");
const tokenUserId = (req) => {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
    if (!token) {
        return undefined;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret_1.secret.key);
        const userId = decoded.id;
        console.log(userId);
        return userId;
    }
    catch (error) {
        return undefined;
    }
};
exports.default = tokenUserId;
