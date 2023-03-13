"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
exports.default = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().required(),
        picture: express_validation_1.Joi.string().required(),
        price: express_validation_1.Joi.number().required(),
        description: express_validation_1.Joi.string().required(),
        category: express_validation_1.Joi.string().required(),
        brand: express_validation_1.Joi.string().required(),
    }),
});
