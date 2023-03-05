"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const secret_1 = require("../configs/secret");
const authValidation = (0, express_jwt_1.expressjwt)({
    secret: secret_1.secret.key,
    algorithms: ["HS256"],
});
exports.default = authValidation;
