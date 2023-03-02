"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const routes = (0, express_1.Router)();
routes.post("/post", controller_1.default.create);
routes.get("/post", controller_1.default.findAll);
// routes.get("/post/:id", controller.findOne);
// routes.put("/post/:id", controller.update);
// routes.delete("/post/:id", controller.delete);
exports.default = routes;
