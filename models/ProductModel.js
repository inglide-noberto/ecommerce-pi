const Sequelize = require('sequelize')
const database = require('../config/database.js')

const Product = database.define('Product', {
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
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    promotional_price_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    promotional_price: {
        type: Sequelize.DECIMAL,
    },
    brand: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_type_product: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    plataform: {
        type: Sequelize.STRING
    },
    short_description: {
        type: Sequelize.STRING
    },
    full_description: {
        type: Sequelize.TEXT
    },
    id_rating_system: {
        type: Sequelize.INTEGER
    },
    id_product_status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weight: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    formart: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    length: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    height: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    width: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    diameter: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: "product"
})


Product.associate = (models) => {
    //--------- Tem 1 TypeProduct ---------
    Product.belongsTo(models.TypeProductModel, {
        foreignKey: 'id_type_product',
        as: 'type_product'
    }),
    
    //--------- Tem 1 RatingSystem ---------
    Product.belongsTo(models.RatingSystemModel, {
        foreignKey: 'id_rating_system',
        as: 'rating_system'
    }),
    
    //--------- Tem 1 ProductStatus ---------
    Product.belongsTo(models.ProductStatusModel, {
        foreignKey: 'id_product_status',
        as: 'product_status'
    }),
    
    //--------- Tem muitas ProductImages ---------
    Product.hasMany(models.ProductImageModel, {
        foreignKey: 'id_product',
        as: 'images'
    }),

    //--------- Está em muitos pedidos através do OrderProducts ---------
    Product.belongsToMany(models.OrderModel, {
        foreignKey: 'id_order',
        as: 'orders',
        through: models.OrderProduct
    }),

    //--------- Está em muitos Product através do TagProducts ---------
    Product.belongsToMany(models.TagModel, {
        foreignKey: 'id_tag',
        as: 'tags',
        through: models.TagProducts
    })
}



module.exports = Product