const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();



const sequelize = new Sequelize(process.env.SCHEMA, process.env.USER_NAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;