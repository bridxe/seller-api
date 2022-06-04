var Joi = require("joi");

exports.getSalesByOwner = {
    ownerId: Joi.string().required()
};

exports.getSalesBySku = {
    productSku: Joi.string().required()
};