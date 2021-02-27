const winston = require('winston');
const response = require('../models/dtos/response');
function  errorHandler(err, req, res, next) {
    winston.error(err.message, err);
    res.status(500).send(response(500, err.message));
}

module.exports = errorHandler;