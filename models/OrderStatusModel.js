const Sequelize = require('sequelize')
const database = require('../config/database.js')

const OrderStatus = database.define('OrderStatus', {
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


OrderStatus.associate = (models) => {
    OrderStatus.hasMany(models.OrderModel, {
        foreignKey: 'id_order_status',
        as: 'orders'
    })
}


module.exports = OrderStatus