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
const bcrypt_1 = __importDefault(require("bcrypt"));
const messages_1 = __importDefault(require("../constants/messages"));
const controller = {
    createAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, cpf, address, password } = req.body;
                const newPassword = bcrypt_1.default.hashSync(password, 8);
                const newAdminUser = yield models_1.User.create({
                    name,
                    email,
                    cpf,
                    address,
                    password: newPassword,
                    isAdmin: true,
                });
                return res.status(201).json(newAdminUser);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json(messages_1.default.ERROR.SERVER_ERROR);
            }
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, cpf, address, password, isAdmin } = req.body;
                const newPassword = bcrypt_1.default.hashSync(password, 8);
                const newUser = yield models_1.User.create({
                    name,
                    email,
                    cpf,
                    address,
                    password: newPassword,
                    isAdmin,
                });
                return res.status(201).json(newUser);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json(messages_1.default.ERROR.SERVER_ERROR);
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield models_1.User.find();
                return res.json(users);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json(messages_1.default.ERROR.SERVER_ERROR);
            }
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield models_1.User.findOne({
                    _id: id,
                });
                if (!user) {
                    return res.status(404).json(messages_1.default.ERROR.SERVER_ERROR);
                }
                return res.json(user);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json(messages_1.default.ERROR.SERVER_ERROR);
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email } = req.body;
                const updated = yield models_1.User.updateOne({
                    _id: id,
                }, {
                    name,
                    email,
                });
                return res.sendStatus(204);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json(messages_1.default.ERROR.SERVER_ERROR);
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield models_1.User.findById(id);
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                const { name } = user;
                yield models_1.User.findByIdAndDelete(id);
                return res.json({ message: `User ${name} deleted successfully` });
            }
            catch (err) {
                console.error(err);
                return res.status(500).json(messages_1.default.ERROR.SERVER_ERROR);
            }
        });
    },
};
exports.default = controller;
