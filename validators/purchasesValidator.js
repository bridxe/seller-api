var Joi = require("joi");

exports.getPurchasesByOrderId = Joi.object({
    orderId: Joi.string().required()
});

exports.getPurchasesByUserId = Joi.object({
    userId: Joi.string().required()
});