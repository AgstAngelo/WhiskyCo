"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_1 = require("../configs/secret");
const isAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization token is missing.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret_1.secret.key);
        if (!decoded.isAdmin) {
            return res.status(403).json({ message: 'You do not have permission to access this resource.' });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Authorization token is invalid.' });
    }
};
exports.default = isAdmin;
