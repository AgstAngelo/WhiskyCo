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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Extract the JWT token from the Authorization header
                const authHeader = req.headers.authorization;
                if (!authHeader || !authHeader.startsWith("Bearer ")) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const token = authHeader.substring(7);
                // Verify the token using the JWT library and the secret key
                const decoded = jsonwebtoken_1.default.verify(token, "whiskyco");
                // Check if the user is an admin
                if (!decoded.isAdmin) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                // Create the new user
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
                return res.status(500).json({ message: "Internal server error" });
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
                return res.status(500).json({ message: "Internal server error" });
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
                return res.json(user);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
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
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.User.findByIdAndDelete(id);
                return res.sendStatus(204);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    },
};
exports.default = controller;
