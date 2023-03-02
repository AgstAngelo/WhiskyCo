"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerCategory_1 = __importDefault(require("../controllers/controllerCategory"));
const routes = (0, express_1.Router)();
routes.post("/category", controllerCategory_1.default.create);
routes.get("/category", controllerCategory_1.default.findAll);
// routes.get("/post/:id", controller.findOne);
// routes.put("/post/:id", controller.update);
// routes.delete("/post/:id", controller.delete);
exports.default = routes;
