var Joi = require("joi");

exports.getSalesByOwner = Joi.object({
    ownerId: Joi.string().required()
});

exports.getSalesBySku = Joi.object({
    productSku: Joi.string().required()
});