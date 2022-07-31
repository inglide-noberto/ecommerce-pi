const Sequelize = require('sequelize')
const database = require('../config/database.js')

const ProductImage = database.define('ProductImage', {
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
    file: {
        type: Sequelize.BLOB('long'),
        allowNull: false
    },
    file_original_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    file_ext: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: "product_image"
})


ProductImage.associate = (models) => {
    ProductImage.belongsTo(models.ProductModel, {
        foreignKey: 'id_product',
        as: 'product'
    })
}


module.exports = ProductImage