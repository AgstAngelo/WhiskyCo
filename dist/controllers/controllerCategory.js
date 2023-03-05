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
const models_1 = require("../models");
const controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description } = req.body;
            const newPost = yield models_1.Category.create({
                description,
            });
            return res.status(201).json(newPost);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield models_1.Category.find();
            return res.json(category);
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const category = yield models_1.Category.findOne({
                    _id: id,
                });
                return res.json(category);
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
                const { description } = req.body;
                const updated = yield models_1.Category.updateOne({
                    _id: id,
                }, {
                    description,
                });
                return res.json({ message: `Category ${description} upateded successfully` });
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
                const { description } = req.body;
                yield models_1.Category.findByIdAndDelete(id);
                return res.json({ message: `Category ${description} deleted successfully` });
                ;
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    },
};
exports.default = controller;
