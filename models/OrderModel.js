const { NOW } = require('sequelize')
const Sequelize = require('sequelize')
const database = require('../config/database.js')

const Order = database.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date_order: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    descouint: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    price_payment: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    id_payment_method: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    payment_status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_adress: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_courier: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    delivery_time: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    delivery_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
})





Order.associate = (models) => {
    //--------- Tem 1 usuario ---------
    Order.belongsTo(models.UserModel, {
        foreignKey: 'id_user',
        as: 'user'
    }),
    
    //--------- Tem 1 status ---------
    Order.belongsTo(models.OrderStatusModel, {
        foreignKey: 'id_status',
        as: 'status'
    }),

    //--------- Tem 1 método de pagamento ---------
    Order.belongsTo(models.PaymentMethodModel, {
        foreignKey: 'id_payment_method',
        as: 'payment_method'
    }),

    //--------- Tem 1 uma transportadora ---------
    Order.belongsTo(models.CourierModel, {
        foreignKey: 'id_courier',
        as: 'courier'
    })

    //--------- Possui muitos Product através do OrderProducts ---------
    Order.belongsToMany(models.ProductModel, {
        foreignKey: 'id_product',
        as: 'products',
        through: models.OrderProduct
    })
}






module.exports = Order