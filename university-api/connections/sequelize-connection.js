const { Sequelize } = require('sequelize');
const config = require('config');
const winston = require('winston');

const datasource = config.get('datasource');

const sequelize = new Sequelize(datasource.database, datasource.username, datasource.password, {
    logging: false,
    host: datasource.host,
    schema: datasource.schema,
    port: datasource.port,
    dialect: datasource.dialect
});

module.exports = sequelize;

async function testConnection() {
    try {
        await sequelize.authenticate();
        winston.info('Database Connection has been established successfully.');
    } catch (error) {
        winston.error('Unable to connect to the database:', error);
    }
}

testConnection();
