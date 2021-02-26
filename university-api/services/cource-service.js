const Course = require('../models/entities/course');
const courseMapper = require('../mappers/course-mapper');
const response = require('../models/dtos/response');
const courseValidator = require('../validators/course-validator');

async function getAllCourses(req, res) {
    try {
        console.log('Getting all courses....');
        const courses = await Course.findAll();
        res.status(200).send(response(200, "Courses found", courses));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function createCourse(req, res) {
    try {
        const request = req.body;
        const validationRslt = courseValidator.createSchema.validate(request);
        if (validationRslt.error) {
            res.status(400).send(response(400, validationRslt.error.details[0].message));
            return;
        }

        console.log('Creating Course....');
        const newCourse = await Course.create(courseMapper.getCourseForCreation(request));
        res.status(200).send(response(200, "Course Created successfully", newCourse));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function getCourse(req, res) {
    try {
        console.log('Getting Course....');
        const course = await Course.findByPk(req.params.id);
        if (course)
            res.status(200).send(response(200, "Course found", course));
        else
            res.status(404).send(response(404, "Course not found"));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};

async function geUpdateCourse(req, res) {
    try {
        const request = req.body;
        const validationRslt = courseValidator.updateSchema.validate(request);
        if (validationRslt.error) {
            res.status(400).send(response(400, validationRslt.error.details[0].message));
            return;
        }

        console.log('Updating Course....');
        const updatedCourse = await Course.update(
            courseMapper.getCourseForUpdate(request),
            {
                where: {
                    id: req.params.id
                }
            });
        console.log(updatedCourse);
        if (updatedCourse.includes(1))
            res.status(200).send(response(200, "Course updated successfully"));
        else
            res.status(400).send(response(400, "Invalid Course"));
    } catch (err) {
        console.log(err);
        res.status(500).send(response(500, err.message));
    }
};


module.exports = {
    getAllCourses: getAllCourses,
    createCourse: createCourse,
    getCourse: getCourse,
    geUpdateCourse: geUpdateCourse
}