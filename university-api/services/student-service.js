const Student = require('../models/entities/student');
const studentMapper = require('../mappers/student-mapper');
const response = require('../models/dtos/response');
const studentValidator = require('../validators/student-validator');

async function getAllStudents(req, res) {
    try {
        console.log('Getting all Students....');
        const students = await Student.findAll();
        res.status(200).send(response(200, "Students found", students));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function createStudent(req, res) {
    try {
        const request = req.body;
        const validationRslt = studentValidator.createSchema.validate(request);
        if (validationRslt.error) {
            res.status(400).send(response(400, validationRslt.error.details[0].message));
            return;
        }

        const studentExist = await Student.findOne({
            studentEmail: request.studentEmail
        });
        if(studentExist){
            res.status(400).send(response(400, "Student Already Exists with this email"));
            return;
        }

        console.log('Creating Student....');
        const newStudent = await Student.create(studentMapper.getStudentForCreation(request));
        res.status(200).send(response(200, "Student Created successfully", newStudent));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function getStudent(req, res) {
    try {
        console.log('Getting Student....');
        const student = await Student.findByPk(req.params.id);
        if (student)
            res.status(200).send(response(200, "Student found", student));
        else
            res.status(404).send(response(404, "Student not found"));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function geUpdateStudent(req, res) {
    try {
        const request = req.body;
        const validationRslt = studentValidator.updateSchema.validate(request);
        if (validationRslt.error) {
            res.status(400).send(response(400, validationRslt.error.details[0].message));
            return;
        }

        console.log('Updating Student....');
        const updatedStudent = await Student.update(
            studentMapper.getStudentForUpdate(request),
            {
                where: {
                    id: req.params.id
                }
            });
        console.log(updatedStudent);
        if (updatedStudent.includes(1))
            res.status(200).send(response(200, "Student updated successfully"));
        else
            res.status(400).send(response(400, "Invalid Student"));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};


module.exports = {
    getAllStudents: getAllStudents,
    createStudent: createStudent,
    getStudent: getStudent,
    geUpdateStudent: geUpdateStudent
}
