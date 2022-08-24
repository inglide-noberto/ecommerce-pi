'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    promotional_price_status: DataTypes.BOOLEAN,
    promotional_price: DataTypes.DECIMAL,
    brand: DataTypes.STRING,
    year: DataTypes.INTEGER,
    id_type_product: DataTypes.INTEGER,
    plataform: DataTypes.STRING,
    short_description: DataTypes.STRING,
    full_description: DataTypes.STRING,
    id_rating_system: DataTypes.INTEGER,
    id_product_status: DataTypes.INTEGER,
    weight: DataTypes.DECIMAL,
    formart: DataTypes.INTEGER,
    length: DataTypes.DECIMAL,
    width: DataTypes.DECIMAL,
    diameter: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.associate = function(models) {
    Product.belongsTo(models.TypeProduct, {
      foreignKey: 'id_type_product',
      as: 'type_product',
    });

    Product.belongsTo(models.RatingSystem, {
      foreignKey: 'id_rating_system',
      as: 'rating_system',
    });

    Product.belongsTo(models.ProductStatus, {
      foreignKey: 'id_product_status',
      as: 'product_status',
    });

    Product.hasMany(models.ProductImage, {foreignKey:'id_product', as:'images'});

    Product.belongsToMany(models.Category, {
      through: 'ProductCategory', 
      as: 'product_category',
      foreignKey: 'id_product'
    });

    Product.belongsToMany(models.Tag, {
      through: 'TagProduct', 
      foreignKey: 'id_product',
      as:'product_tag'
    });

    Product.belongsToMany(models.Order, {
      through: 'OrderProducts', 
      foreignKey: 'id_product',
      as:'product_order'
    });
  };

  return Product;
};