const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/entities/user')
const response = require('../models/dtos/response');
const winston = require('winston');

async function authenticate(req, res) {
    const request = req.body;

    const user = await User.findOne({
        where: {
            userName: request.userName
        }
    });

    if (!user) {
        winston.warn(`Invalid User login attempt: ${request.userName}`);
        res.status(400).send(response(400, "Invalid username or password"));
        return;
    }

    const validPassword = await bcrypt.compare(request.password, user.password);
    if (!validPassword) {
        winston.warn(`Invalid Password login attempt: ${request.userName}`);
        res.status(400).send(response(400, "Invalid username or password"));
        return;
    }

    const token = jwt.sign(
        _.pick(user, ['userName', 'firstName']),
        config.get('jwtPrivateKey')
    );

    res.status(200)
        .header('auth-token', token)
        .send(response(200, 'login success', {token:token}))
}

module.exports = {
    authenticate: authenticate
};