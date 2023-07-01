const { Sequelize } = require('sequelize');
const {config} = require('./../config/config');

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const setupModels = require('./../db/models');



const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;

