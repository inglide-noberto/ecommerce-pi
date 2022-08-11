'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tag.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });

  Tag.associate = function(models) {
    Tag.belongsToMany(models.Product, {
      through: 'TagProduct', 
      foreignKey: 'id_tag', 
      as: 'tag_product'
    })
  }
  return Tag;
};