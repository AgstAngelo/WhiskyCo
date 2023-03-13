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
            const { name, picture, price, description, category, brand } = req.body;
            const newProduct = yield models_1.Product.create({
                name,
                picture,
                price,
                description,
                category,
                brand,
            });
            return res.status(201).json(newProduct);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield models_1.Product.find().populate({
                    path: "category",
                    select: "name",
                })
                    .populate({
                    path: "brand",
                    select: "name",
                });
                return res.json(products);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    },
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const product = yield models_1.Product.find({ name: { $regex: `.*${name}.*`, $options: "i" } });
                if (!product) {
                    return res.status(404).json({ message: "Product not found" });
                }
                return res.json(product);
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
                const { name, picture, price, description, category, brand } = req.body;
                yield models_1.Product.updateOne({
                    _id: id,
                }, {
                    name,
                    picture,
                    price,
                    description,
                    category,
                    brand
                });
                return res.json({ message: `Product ${name} updated successfully` });
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
                yield models_1.Product.findByIdAndDelete(id);
                return res.json({ message: `Product ${name} deleted successfully` });
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
