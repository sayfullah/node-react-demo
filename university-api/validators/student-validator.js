const Joi = require('joi');

const createSchema = Joi.object({
    studentName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentGradeLevel: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentUniversityName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentPhoneNumber: Joi.string()
        .pattern(new RegExp('^[0-9]{10,25}$'))
        .message('Invalid phone number.')
        .required(),

    studentEmail: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    studentAddress: Joi.string()
        .alphanum()
        .min(3)
        .max(200)
        .required(),

    studentCity: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentState: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentCountry: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
});

const updateSchema = Joi.object({

    studentName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentGradeLevel: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentUniversityName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentPhoneNumber: Joi.string()
        .pattern(new RegExp('^[0-9]{10,25}$'))
        .message('Invalid phone number.')
        .required(),

    studentEmail: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    studentAddress: Joi.string()
        .alphanum()
        .min(3)
        .max(200)
        .required(),

    studentCity: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentState: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    studentCountry: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
});

module.exports = {
    createSchema: createSchema,
    updateSchema: updateSchema
};