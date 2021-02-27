require('express-async-errors');
const winston = require('winston');
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

winston.add( new winston.transports.Console());
winston.add(new winston.transports.File({ filename: 'application.log' }));

winston.info(config.get('jwtPrivateKey'));

const port = config.get('app_port');
app.listen(port, () => {
    winston.info(`Application Name ${config.get('name')}`);
    winston.info(`Listening on port ${port}.........`);
});