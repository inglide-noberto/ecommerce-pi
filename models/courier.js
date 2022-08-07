'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courier.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courier',
  });

  Courier.associate = function(models) {
    Courier.hasMany(models.Order, as = 'orders')
  };


  return Courier;
};