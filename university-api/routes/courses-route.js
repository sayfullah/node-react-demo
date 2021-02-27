const express = require('express');
const authMw = require('../middleware/auth-mw')
const route = express.Router();
const courseService =require('../services/cource-service');
module.exports= route;


route.get('/', authMw, async (req, res) => {
    await courseService.getAllCourses(req, res);
});

route.post('/', authMw, async (req, res) => {
    await courseService.createCourse(req, res);
});

route.get('/:id', authMw, async (req, res) => {
    await courseService.getCourse(req, res);
});

route.put('/:id', authMw, async (req, res) => {
    await courseService.geUpdateCourse(req, res);
});
