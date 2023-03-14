"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const express_jwt_1 = require("express-jwt");
exports.default = (error, req, res, next) => {
    try {
        if (error instanceof express_validation_1.ValidationError) {
            return res.status(error.statusCode).json(error);
        }
        if (error instanceof express_jwt_1.UnauthorizedError) {
            return res.status(error.status).json(error);
        }
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
