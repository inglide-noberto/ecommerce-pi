'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RatingSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RatingSystem.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RatingSystem',
  });

  RatingSystem.associate = function(models) {
    RatingSystem.hasMany(models.Product, as = 'products')
  };

  return RatingSystem;
};