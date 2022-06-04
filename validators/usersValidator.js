var Joi = require("joi");

exports.getUserById = {
    ownerId: Joi.string().required()
};