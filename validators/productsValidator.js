var Joi = require("joi");

exports.getProductBySku = Joi.object({
    productSku: Joi.string().required()
});

exports.postProduct = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.array().required(),
    tax: Joi.number().required(),
    description: Joi.string().required(),
    picture: Joi.array().required(),
    model: Joi.array().required(),
    nft_contract_address: Joi.string().required()
});