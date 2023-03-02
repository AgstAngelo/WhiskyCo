"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routesUser_1 = __importDefault(require("../../routes/routesUser"));
const routesCategory_1 = __importDefault(require("../../routes/routesCategory"));
const routesProduct_1 = __importDefault(require("../../routes/routesProduct"));
const routesAuth_1 = __importDefault(require("../../routes/routesAuth"));
const routes = (0, express_1.Router)();
routes.use(routesUser_1.default);
routes.use(routesCategory_1.default);
routes.use(routesProduct_1.default);
routes.use(routesAuth_1.default);
exports.default = routes;
