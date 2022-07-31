const Sequelize = require('sequelize')
const database = require('../config/database.js')

module.exports = database.define('Company', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    corporate_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    commercial_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    slogan: {
        type: Sequelize.STRING
    },
})