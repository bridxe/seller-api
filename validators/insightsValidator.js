var Joi = require("joi");

exports.getInsightsById = Joi.object({
    ownerId: Joi.string().required()
});