require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const errorHandler = require('./middleware/global-error-handler');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(morgan('tiny'));
app.use('/users', require('./routes/users-route'));
app.use('/courses', require('./routes/courses-route'));
app.use('/students', require('./routes/students-route'));
app.use('/auth', require('./routes/auth-route'));
app.use(errorHandler);

console.log(config.get('jwtPrivateKey'));

const port = config.get('app_port');
app.listen(port, () => {
    console.log(`Application Name ${config.get('name')}`);
    console.log(`Listening on port ${port}.........`);
});