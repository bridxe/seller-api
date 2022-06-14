var Joi = require("joi");

exports.getUserById = Joi.object({
    ownerId: Joi.string().required()
});