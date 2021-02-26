const express = require('express');
const route = express.Router();
const studentService =require('../services/student-service');
module.exports= route;

route.get('/', (req, res) => {
    studentService.getAllStudents(req, res);
});

route.post('/', (req, res) => {
    studentService.createStudent(req, res);
});

route.get('/:id', (req, res) => {
    studentService.getStudent(req, res);
});

route.put('/:id', (req, res) => {
    studentService.geUpdateStudent(req, res);
});
