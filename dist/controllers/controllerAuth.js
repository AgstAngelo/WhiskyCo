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
const models_1 = require("../models");
const secret_1 = require("../configs/secret");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const messages_1 = __importDefault(require("../constants/messages"));
const controller = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield models_1.User.findOne({
                email
            });
            if (!user) {
                return res.status(400).json(messages_1.default.ERROR.EMAIL_ERROR);
            }
            if (!bcrypt_1.default.compareSync(password, user.password)) {
                return res.status(401).json(messages_1.default.ERROR.PASSWORD_ERROR);
            }
            const token = jsonwebtoken_1.default.sign({
                id: user.id,
                email: user.email,
                name: user.name,
                isAdmin: user.isAdmin
            }, secret_1.secret.key);
            return res.json({ user, token });
        });
    },
};
exports.default = controller;
