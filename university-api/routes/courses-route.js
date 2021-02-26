const express = require('express');
const route = express.Router();
const courseService =require('../services/cource-service');
module.exports= route;


route.get('/', async (req, res) => {
    await courseService.getAllCourses(req, res);
});

route.post('/', async (req, res) => {
    await courseService.createCourse(req, res);
});

route.get('/:id', async (req, res) => {
    await courseService.getCourse(req, res);
});

route.put('/:id', async (req, res) => {
    await courseService.geUpdateCourse(req, res);
});
