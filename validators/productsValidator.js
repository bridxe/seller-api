var Joi = require("joi");

exports.getProductBySku = Joi.object({
    productSku: Joi.string().required()
});

exports.postProduct = {
    name: Joi.string().required(),
    price: Joi.decimal().required(),
    quantity: Joi.array().required(),
    tax: Joi.decimal().required(),
    description: Joi.string().required(),
    picture: Joi.array().required(),
    model: Joi.array().required(),
    nft_contract_address: Joi.string().required()
};