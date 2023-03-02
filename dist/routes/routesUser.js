"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerUser_1 = __importDefault(require("../controllers/controllerUser"));
const routes = (0, express_1.Router)();
routes.post("/user", controllerUser_1.default.create);
routes.get("/user", controllerUser_1.default.findAll);
routes.get("/user/:id", controllerUser_1.default.findOne);
routes.put("/user/:id", controllerUser_1.default.update);
routes.delete("/user/:id", controllerUser_1.default.delete);
exports.default = routes;
