"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" },
    products: [{ type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Product" }],
    amount: { type: Number, required: true },
}, {
    timestamps: true,
});
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
