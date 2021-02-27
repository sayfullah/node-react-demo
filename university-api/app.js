require('express-async-errors');
const winston = require('winston');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const config = require('config');
const errorHandler = require('./middleware/global-error-handler');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(morgan('tiny'));

require('./app-configs/logging')();
require('./app-configs/routes')(app);

app.use(errorHandler);

if (!config.get('jwtPrivateKey'))
    winston.error(`JWT secret not found........`);

const port = config.get('app_port');
app.listen(port, () => {
    winston.info(`Application Name ${config.get('name')}`);
    winston.info(`Listening on port ${port}.........`);
});