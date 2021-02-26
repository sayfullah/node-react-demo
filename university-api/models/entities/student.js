const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../connections/sequelize-connection');

const Student = sequelize.define('Student', {

    studentName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    studentGradeLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentUniversityName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    studentPhoneNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    studentEmail: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    studentAddress: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    studentCity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    studentState: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    studentCountry: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    underscored: true
});

module.exports = Student;

async function syncStudentWithDatabase() {
    await Student.sync({ alter: true });
    console.log("The table for the Student model was just synchronized");
}

syncStudentWithDatabase();



