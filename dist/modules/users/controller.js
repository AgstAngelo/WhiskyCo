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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, cpf, address, password, isAdmin } = req.body;
            const newUser = yield models_1.User.create({
                name,
                email,
                cpf,
                address,
                password,
                isAdmin,
            });
            return res.status(201).json(newUser);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield models_1.User.find();
            return res.json(users);
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield models_1.User.findOne({
                _id: id,
            });
            return res.json(user);
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email } = req.body;
            const updated = yield models_1.User.updateOne({
                _id: id,
            }, {
                name,
                email,
            });
            return res.sendStatus(204);
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield models_1.User.findByIdAndDelete(id);
            return res.sendStatus(204);
        });
    },
};
exports.default = controller;
