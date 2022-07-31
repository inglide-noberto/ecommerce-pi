const Sequelize = require('sequelize')
const database = require('../config/database.js')

const Courier = database.define('Courier', {
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


Courier.associate = (models) => {
    Courier.hasMany(models.OrderModel, {
        foreignKey: 'id_courier',
        as: 'orders'
    })
}


module.exports = Courier