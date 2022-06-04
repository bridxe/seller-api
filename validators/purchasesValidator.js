var Joi = require("joi");

exports.getPurchasesByOrderId = {
    ownerId: Joi.string().required()
};

exports.getPurchasesByUserId = {
    userId: Joi.string().required()
};