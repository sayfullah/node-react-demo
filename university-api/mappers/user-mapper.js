const bcrypt = require('bcrypt');
const dtoProps = ['userName', 'firstName', 'lastName', 'email'];

async function getUserForCreation(request) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.password, salt);
    return {
        userName: request.userName,
        firstName: request.firstName,
        lastName: request.lastName,
        password: hashedPassword,
        email: request.email,
        userStatus: true
    };
}

function getUserForUpdate(request) {
    return {
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email
    };
}

function parseToUserDto(user) {
    return _.pick(user, dtoProps);
}

module.exports = {
    getUserForCreation: getUserForCreation,
    getUserForUpdate: getUserForUpdate
};