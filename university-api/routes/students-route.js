const express = require('express');
const route = express.Router();
const studentService =require('../services/student-service');
module.exports= route;

route.get('/', async (req, res) => {
    await studentService.getAllStudents(req, res);
});

route.post('/', async (req, res) => {
    await studentService.createStudent(req, res);
});

route.get('/:id', async (req, res) => {
    await studentService.getStudent(req, res);
});

route.put('/:id', async (req, res) => {
    await studentService.geUpdateStudent(req, res);
});
