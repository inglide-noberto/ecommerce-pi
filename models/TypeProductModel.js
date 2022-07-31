const Sequelize = require('sequelize')
const database = require('../config/database.js')

const TypeProduct = database.define('TypeProduct', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING
    }
})


TypeProduct.associate = (models) => {
    TypeProduct.hasMany(models.ProductModel, {
        foreignKey: 'id_type_product',
        as: 'produtos'
    })
}


module.exports = TypeProduct