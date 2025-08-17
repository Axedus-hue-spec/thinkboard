const sequelize = require('../db');
const Sequelize = require('sequelize');

const note = sequelize.define('Note', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },

    title: {
        type: Sequelize.STRING,
        required: true
    },

    content: {
        type: Sequelize.STRING,
        required: true
    }
});

module.exports = note;