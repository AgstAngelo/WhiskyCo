"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerOrder_1 = __importDefault(require("../controllers/controllerOrder"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const routes = (0, express_1.Router)();
routes.get("/userorders", auth_1.default, controllerOrder_1.default.getOrders);
exports.default = routes;
