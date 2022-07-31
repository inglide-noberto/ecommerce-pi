const Sequelize = require('sequelize')
const database = require('../config/database.js')

const OrderProduct = database.define('OrderProduct', {
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
}, {
    tableName: "order_product"
})



module.exports = OrderProduct