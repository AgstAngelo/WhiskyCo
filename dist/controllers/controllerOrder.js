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
            try {
                const { userId, orders, amount } = req.body;
                const newOrder = yield models_1.Order.create({
                    userId,
                    orders,
                    amount,
                });
                return res.status(201).json(newOrder);
            }
            catch (err) {
                console.log(err);
                return res.status(401).json(err);
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield models_1.Order.find().populate({
                path: "category",
                select: "description",
            }); // não sei qual o parametro correto;
            return res.json(orders);
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const order = yield models_1.Order.findOne({
                    _id: id,
                });
                return res.json(order);
            }
            catch (err) {
                console.error(err);
                return res.status(401).json({ message: "No order found" });
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { product } = req.body;
                const updated = yield models_1.Order.updateOne({
                    _id: id,
                }, {
                    product,
                });
                return res.json({ message: `order upateded successfully` });
            }
            catch (err) {
                console.error(err);
                return res.status(401).json({ message: "No order found" });
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.Order.findByIdAndDelete(id);
                return res.json({ message: `Order deleted successfully` });
            }
            catch (err) {
                console.error(err);
                return res.status(400).json({ message: "No order found" });
            }
        });
    },
};
exports.default = controller;
