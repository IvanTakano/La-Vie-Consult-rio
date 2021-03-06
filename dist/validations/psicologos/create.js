"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validation_1 = require("express-validation");
exports.create = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().email().required(),
        senha: express_validation_1.Joi.string().required(),
        apresentacao: express_validation_1.Joi.string().required(),
    }),
});
