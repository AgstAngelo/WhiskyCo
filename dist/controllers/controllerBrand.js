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
const models_2 = require("../models");
const controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const existingBrand = yield models_1.Brand.findOne({ name });
                if (existingBrand) {
                    return res.status(400).json({ message: "Brand already exists" });
                }
                const newBrand = yield models_1.Brand.create({
                    name,
                });
                return res.status(201).json(newBrand);
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
                const brand = yield models_1.Brand.find();
                return res.json(brand);
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
                const brand = yield models_1.Brand.findById(id).lean();
                if (!brand) {
                    return res.status(404).json({ message: "Brand not found" });
                }
                const products = yield models_2.Product.find({
                    brand: brand._id,
                }).lean();
                return res.json({ brand, products });
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
                const { name } = req.body;
                yield models_1.Brand.updateOne({
                    _id: id,
                }, {
                    name,
                });
                return res.json({ message: `Brand ${name} upateded successfully` });
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
                const { name } = req.body;
                yield models_1.Brand.findByIdAndDelete(id);
                return res.json({ message: `Brand ${name} deleted successfully` });
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
};
exports.default = controller;
