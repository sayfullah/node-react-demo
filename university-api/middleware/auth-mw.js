const jwt = require('jsonwebtoken');
const config = require('config');
const response = require('../models/dtos/response');
const winston = require('winston');

function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send(response(401, 'Access token required'));
        return;
    }
    try {
        const decodedToken = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decodedToken;
        next();
    } catch (err) {
        res.status(400).send(response(400, 'Invalid token'));
    }
}

module.exports = auth;