const Sequelize = require('sequelize')
const database = require('../config/database.js')

module.exports = database.define('ProductCategory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_category: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})