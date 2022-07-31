const Sequelize = require('sequelize')
const database = require('../config/database.js')

const PaymentMethod = database.define('PaymentMethod', {
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
}, {
    tableName: "payment_method"
})


PaymentMethod.associate = (models) => {
    PaymentMethod.hasMany(models.OrderModel, {
        foreignKey: 'id_payment_method',
        as: 'orders'
    })
}

module.exports = PaymentMethod