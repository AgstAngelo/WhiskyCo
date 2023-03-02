"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerAuth_1 = __importDefault(require("../controllers/controllerAuth"));
const authLoginValidation = require("../validations/login");
const routes = (0, express_1.Router)();
routes.post("/login", authLoginValidation, controllerAuth_1.default.login);
exports.default = routes;
