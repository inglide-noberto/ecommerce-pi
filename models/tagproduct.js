'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TagProduct.init({
    id_product: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TagProduct',
  });

  TagProduct.associate = function(models) {
    TagProduct.belongsTo(models.Product, {
      foreignKey: 'id_product',
      as: 'product',
    });

    TagProduct.belongsTo(models.Tag, {
      foreignKey: 'id_tag',
      as: 'tag',
    });
  };

  return TagProduct;
};