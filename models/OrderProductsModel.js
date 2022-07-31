const Sequelize = require('sequelize')
const database = require('../config/database.js')

const OrderStatus = database.define('OrderStatus', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})



module.exports = OrderStatus