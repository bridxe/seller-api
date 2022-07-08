var Joi = require("joi");

exports.getUserById = Joi.object({
    ownerId: Joi.string().required()
});

exports.postUser = Joi.object({
    ownerId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    sddress: Joi.string().required(),
    wallet: Joi.string().required()
});