"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const routes = (0, express_1.Router)();
routes.post("/user", controller_1.default.create);
routes.get("/user", controller_1.default.findAll);
routes.get("/user/:id", controller_1.default.findOne);
routes.put("/user/:id", controller_1.default.update);
routes.delete("/user/:id", controller_1.default.delete);
exports.default = routes;
