const Sequelize = require('sequelize')
const database = require('../config/database.js')

module.exports = database.define('Tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})