const express = require('express');
const authMw = require('../middleware/auth-mw')
const route = express.Router();
const studentService =require('../services/student-service');
module.exports= route;

route.get('/', authMw, async (req, res) => {
    await studentService.getAllStudents(req, res);
});

route.post('/', authMw, async (req, res) => {
    await studentService.createStudent(req, res);
});

route.get('/:id', authMw, async (req, res) => {
    await studentService.getStudent(req, res);
});

route.put('/:id', authMw, async (req, res) => {
    await studentService.geUpdateStudent(req, res);
});
