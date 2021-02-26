const User = require('../models/entities/user');
const userMapper = require('../mappers/user-mapper');
const response = require('../models/dtos/response');
const userValidator = require('../validators/user-validator');

async function getAllUsers(req, res) {
    try {
        console.log('Getting all users....');
        const users = await User.findAll();
        res.status(200).send(response(200, "Users found", users));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function createUser(req, res) {
    try {
        const request = req.body;
        const validationRslt = userValidator.createSchema.validate(request);
        if (validationRslt.error) {
            res.status(400).send(response(400, validationRslt.error.details[0].message));
            return;
        }
        console.log('Creating user....');
        const newUser = await User.create(userMapper.getUserForCreation(request));
        res.status(200).send(response(200, "User Created successfully", newUser));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function getUser(req, res) {
    try {
        console.log('Getting user....');
        const user = await User.findByPk(req.params.id);
        if (user)
            res.status(200).send(response(200, "User found", user));
        else
            res.status(404).send(response(404, "User not found"));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function geUpdateUser(req, res) {
    try {
        const request = req.body;
        const validationRslt = userValidator.updateSchema.validate(request);
        if (validationRslt.error) {
            res.status(400).send(response(400, validationRslt.error.details[0].message));
            return;
        }

        console.log('Updating user....');
        const updatedUser = await User.update(
            userMapper.getUserForUpdate(request),
            {
                where: {
                    id: req.params.id
                }
            });
        console.log(updatedUser);
        if (updatedUser.includes(1))
            res.status(200).send(response(200, "User updated successfully"));
        else
            res.status(400).send(response(400, "Invalid User"));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};


module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser,
    getUser: getUser,
    geUpdateUser: geUpdateUser
}