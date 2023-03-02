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
            const { user, conteudo } = req.body;
            const newPost = yield models_1.Post.create({
                user,
                conteudo,
            });
            return res.status(201).json(newPost);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield models_1.Post.find({
                user: "507f1f77bcf86cd799439011",
            });
            return res.json(posts);
        });
    },
};
exports.default = controller;
