'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderProducts.init({
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderProducts',
  });

  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Order, {
      foreignKey: 'id_order',
      otherKey: 'id_product',
      as:'order_product'
    });

    OrderProducts.belongsTo(models.Product, {
      foreignKey: 'id_product',
      otherKey: 'id_order'
    });

    // OrderProducts.hasMany(models.Product, {
    //   foreignKey: 'id_order',
    //   as:'product_order'
    // });

    
  };

  return OrderProducts;
};