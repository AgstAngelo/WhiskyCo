"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const brandSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true,
});
const Brand = (0, mongoose_1.model)("Brand", brandSchema);
exports.default = Brand;
