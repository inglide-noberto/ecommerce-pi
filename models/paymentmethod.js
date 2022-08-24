'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethod.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentMethod',
  });

  PaymentMethod.associate = function(models) {
    PaymentMethod.hasMany(models.Order, {
      foreignKey: 'id_payment_method',
      as: 'orders'
    });
  };

  return PaymentMethod;
};