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
const tokenUserId_1 = __importDefault(require("../middlewares/tokenUserId"));
const controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, products, amount } = req.body;
                const newOrder = yield models_1.Order.create({
                    userId,
                    products,
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
                path: "userId",
                select: "name",
            })
                .populate({
                path: "products",
                select: "name",
            });
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
                const { userId, products, amount } = req.body;
                const updated = yield models_1.Order.updateOne({
                    _id: id,
                }, {
                    userId,
                    products,
                    amount,
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
    getOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = (0, tokenUserId_1.default)(req);
                console.log(userId);
                if (!userId) {
                    return res.status(401).json({ message: 'Missing token' });
                }
                const orders = yield models_1.Order.find({ userId: userId }).populate("products");
                return res.status(200).json(orders);
            }
            catch (error) {
                return res.status(500).json({ message: error });
            }
        });
    },
};
exports.default = controller;
