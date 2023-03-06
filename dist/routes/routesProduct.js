"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerProduct_1 = __importDefault(require("../controllers/controllerProduct"));
const isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
const routes = (0, express_1.Router)();
routes.post("/product", isAdmin_1.default, controllerProduct_1.default.create);
routes.get("/product", controllerProduct_1.default.findAll);
routes.get("/product/:id", controllerProduct_1.default.findOne);
routes.put("/product/:id", isAdmin_1.default, controllerProduct_1.default.update);
routes.delete("/product/:id", isAdmin_1.default, controllerProduct_1.default.delete);
exports.default = routes;
