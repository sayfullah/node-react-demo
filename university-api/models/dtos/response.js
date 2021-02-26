function response(responseCode, message, data) {
    return {
        responseCode: responseCode,
        message: message,
        data: data
    };
}

module.exports = response;