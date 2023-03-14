"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerCategory_1 = __importDefault(require("../controllers/controllerCategory"));
const isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
const createCat_1 = __importDefault(require("../validations/Category/createCat"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const routes = (0, express_1.Router)();
routes.post("/category", auth_1.default, isAdmin_1.default, createCat_1.default, controllerCategory_1.default.create);
routes.get("/category", controllerCategory_1.default.findAll);
routes.get("/category/:id", controllerCategory_1.default.findOne);
routes.put("/category/:id", auth_1.default, isAdmin_1.default, controllerCategory_1.default.update);
routes.delete("/category/:id", isAdmin_1.default, controllerCategory_1.default.delete);
exports.default = routes;
