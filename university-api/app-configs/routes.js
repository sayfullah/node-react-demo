module.exports = function (app) {
    app.use('/users', require('../routes/users-route'));
    app.use('/courses', require('../routes/courses-route'));
    app.use('/students', require('../routes/students-route'));
    app.use('/auth', require('../routes/auth-route'));
}