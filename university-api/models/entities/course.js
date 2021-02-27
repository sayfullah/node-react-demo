const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../app-configs/sequelize-connection');
const winston = require('winston');

const Course = sequelize.define('Course', {

    courseTitle: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    courseDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    coursePrice: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    courseRating: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    underscored: true
});


module.exports = Course;

async function syncCourseWithDatabase() {
    await Course.sync({ alter: true });
    winston.info("The table for the Course model was just synchronized");
}

syncCourseWithDatabase();



