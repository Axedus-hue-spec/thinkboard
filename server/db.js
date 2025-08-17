const Sequelize = require('sequelize');

const SCHEMA = 'notes-rest';
const USER_NAME = 'Axedus';
const PASSWORD = '12345678';

const sequelize = new Sequelize(SCHEMA, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;