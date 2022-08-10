'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductStatus.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductStatus',
  }); 


  ProductStatus.associate = function(models) {
    ProductStatus.hasMany(models.Product, {foreignKey: 'id_product_status', as: 'product_status'})
  };

  return ProductStatus;
};