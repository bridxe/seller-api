var Joi = require("joi");

exports.getInsightsById = {
    ownerId: Joi.string().required()
};