"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const secret_1 = require("../configs/secret");
const authValidation = (req, res, next) => {
    (0, express_jwt_1.expressjwt)({
        secret: secret_1.secret.key,
        algorithms: ["HS256"],
    })(req, res, (err) => {
        if (err) {
            if (err.name === "UnauthorizedError") {
                res.status(401).json({ error: "No authorization token was found" });
            }
            else {
                next(err);
            }
        }
        else {
            next();
        }
    });
};
exports.default = authValidation;
