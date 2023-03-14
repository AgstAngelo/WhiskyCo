"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerBrand_1 = __importDefault(require("../controllers/controllerBrand"));
const isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const routes = (0, express_1.Router)();
routes.post("/brand", auth_1.default, isAdmin_1.default, controllerBrand_1.default.create);
routes.get("/brand", controllerBrand_1.default.findAll);
routes.get("/brand/:id", controllerBrand_1.default.findOne);
routes.put("/brand/:id", auth_1.default, isAdmin_1.default, controllerBrand_1.default.update);
routes.delete("/brand/:id", auth_1.default, isAdmin_1.default, controllerBrand_1.default.delete);
exports.default = routes;
