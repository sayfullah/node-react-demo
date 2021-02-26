function getUserForCreation(request) {
    return {
        username: request.username,
        firstName: request.firstName,
        lastName: request.lastName,
        password: request.password,
        email: request.email,
        userStatus: true
    };
}

function getUserForUpdate(request) {
    return {
        firstName: request.firstName,
        lastName: request.lastName,
        password: request.password,
        email: request.email
    };
}

module.exports = {
    getUserForCreation: getUserForCreation,
    getUserForUpdate: getUserForUpdate
};