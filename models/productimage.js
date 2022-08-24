'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductImage.init({
    id_product: DataTypes.INTEGER,
    file_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ProductImage',
  });

  ProductImage.associate = function(models) {
    ProductImage.belongsTo(models.Product, {
      foreignKey: 'id_product',
      as: 'product_image',
    });
  };


  return ProductImage;
};