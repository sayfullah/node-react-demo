const winston = require('winston');

module.exports = function () {
    winston.add(new winston.transports.Console());
    winston.add(new winston.transports.File({filename: 'application.log'}));

    process.on('uncaughtException', (error => {
            winston.error('uncaughtException');
            winston.error(error.message, error);
        })
    );

    process.on('unhandledRejection', (error => {
            winston.error('unhandledRejection');
            winston.error(error.message, error);
        })
    );
}