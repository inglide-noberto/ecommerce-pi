const Sequelize = require('sequelize')
const database = require('../config/database.js')

const User = database.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    cpf: {
        type: Sequelize.INTEGER,
        unique: true
    },
    birt_date: {
        type: Sequelize.DATEONLY,
    },
    gender: {
        type: Sequelize.STRING,
    },
    type_user: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'client'
    }
})

User.associate = (models) => {
    User.hasMany(models.AdressModel, {
        foreignKey: 'id_user',
        as: 'adress'
    }),

    User.hasMany(models.OrderModel, {
        foreignKey: 'id_user',
        as: 'orders'
    })
}

module.exports = User