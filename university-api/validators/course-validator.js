const Joi = require('joi');

const createSchema = Joi.object({
    courseTitle: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    courseDescription: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    coursePrice: Joi.number()
        .min(1)
        .required(),

    courseRating: Joi.number()
        .min(3)
        .max(5)
        .required()
});

const updateSchema = Joi.object({

    courseTitle: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    courseDescription: Joi.string()
        .alphanum()
        .min(3)
        .max(200)
        .required(),

    coursePrice: Joi.number()
        .min(1)
        .required(),

    courseRating: Joi.number()
        .min(1)
        .max(5)
        .required()
});

module.exports = {
    createSchema: createSchema,
    updateSchema: updateSchema
};