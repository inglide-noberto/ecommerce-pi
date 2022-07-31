const Sequelize = require('sequelize')
const database = require('../config/database.js')

const ProductStatus = database.define('ProductStatus', {
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
    tableName: "product_status"
})

ProductStatus.associate = (models) => {
    ProductStatus.hasMany(models.ProductModel, {
        foreignKey: 'id_product_status',
        as: 'produtos'
    })
}

module.exports = ProductStatus