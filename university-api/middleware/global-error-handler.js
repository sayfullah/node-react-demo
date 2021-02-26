const response = require('../models/dtos/response');
function  errorHandler(err, req, res, next) {
    console.log('errorHandler')
    res.status(500).send(response(500, err.message));
}

module.exports = errorHandler;