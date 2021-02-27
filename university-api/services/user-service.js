const _ = require('lodash');
const User = require('../models/entities/user');
const userMapper = require('../mappers/user-mapper');
const response = require('../models/dtos/response');
const userValidator = require('../validators/user-validator');
const winston = require('winston');

async function getAllUsers(req, res) {
    winston.info('Getting all users....');
    const users = await User.findAll({
        attributes: { exclude: ['password'] }
    });
    res.status(200).send(response(200, "Users found", users));
};

async function createUser(req, res) {
    const request = req.body;
    const validationRslt = userValidator.createSchema.validate(request);
    if (validationRslt.error) {
        res.status(400).send(response(400, validationRslt.error.details[0].message));
        return;
    }

    winston.info('Creating user....');
    const userReq = await userMapper.getUserForCreation(request);
    const newUser = await User.create(userReq);
    res.status(200).send(response(
        200,
        "User Created successfully",
        _.pick(newUser, ['userName', 'firstName', 'lastName', 'email'])));

};

async function getUser(req, res) {
    winston.info('Getting user....');
    const user = await User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] }
    });
    if (user)
        res.status(200).send(response(200, "User found", user));
    else
        res.status(404).send(response(404, "User not found"));

};

async function geUpdateUser(req, res) {
    const request = req.body;
    const validationRslt = userValidator.updateSchema.validate(request);
    if (validationRslt.error) {
        res.status(400).send(response(400, validationRslt.error.details[0].message));
        return;
    }

    winston.info('Updating user....');
    const updatedUser = await User.update(
        userMapper.getUserForUpdate(request),
        {
            where: {
                id: req.params.id
            }
        });
    winston.info(updatedUser);
    if (updatedUser.includes(1))
        res.status(200).send(response(200, "User updated successfully"));
    else
        res.status(400).send(response(400, "Invalid User"));

};


module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser,
    getUser: getUser,
    geUpdateUser: geUpdateUser
}
