var Joi = require("joi");

exports.getProductBySku = {
    productSku: Joi.string().required()
};

exports.postProduct = {
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.object().required(),
    tax: Joi.number().required(),
    description: Joi.string().required(),
    picture: Joi.object().required(),
    model: Joi.object().required(),
    nft_contract_address: Joi.string().required()
};