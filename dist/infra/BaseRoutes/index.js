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
const routesBrand_1 = __importDefault(require("../../routes/routesBrand"));
const routesOrder_1 = __importDefault(require("../../routes/routesOrder"));
const routesUserOrder_1 = __importDefault(require("../../routes/routesUserOrder"));
const routes = (0, express_1.Router)();
routes.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
routes.use(routesUser_1.default);
routes.use(routesCategory_1.default);
routes.use(routesProduct_1.default);
routes.use(routesAuth_1.default);
routes.use(routesBrand_1.default);
routes.use(routesOrder_1.default);
routes.use(routesUserOrder_1.default);
exports.default = routes;
