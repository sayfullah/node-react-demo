const express = require('express');
const route = express.Router();
const courseService =require('../services/cource-service');
module.exports= route;


route.get('/', (req, res) => {
    courseService.getAllCourses(req, res);
});

route.post('/', (req, res) => {
    courseService.createCourse(req, res);
});

route.get('/:id', (req, res) => {
    courseService.getCourse(req, res);
});

route.put('/:id', (req, res) => {
    courseService.geUpdateCourse(req, res);
});