const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../connections/sequelize-connection');
const winston = require('winston');

const User = sequelize.define('User', {

    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    firstName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lastName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    userStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    underscored: true
});


module.exports = User;

async function syncUserWithDatabase() {
    await User.sync({ alter: true });
    winston.info("The table for the User model was just synchronized");
}

syncUserWithDatabase();



