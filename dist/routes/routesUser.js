"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerUser_1 = __importDefault(require("../controllers/controllerUser"));
const isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const routes = (0, express_1.Router)();
routes.post("/user", auth_1.default, controllerUser_1.default.create);
routes.post("/user/admin", auth_1.default, isAdmin_1.default, controllerUser_1.default.createAdmin);
routes.get("/user", auth_1.default, isAdmin_1.default, controllerUser_1.default.findAll);
routes.get("/user/:id", auth_1.default, isAdmin_1.default, controllerUser_1.default.findOne);
routes.put("/user/:id", auth_1.default, isAdmin_1.default, controllerUser_1.default.update);
routes.delete("/user/:id", auth_1.default, isAdmin_1.default, controllerUser_1.default.delete);
exports.default = routes;
