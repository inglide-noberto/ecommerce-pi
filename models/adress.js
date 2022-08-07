'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Adress.init({
    id_user: DataTypes.INTEGER,
    title: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    district: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    shipping_contact_name: DataTypes.STRING,
    shipping_contact_phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adress',
  });
  
  Adress.associate = function(models) {
    Adress.belongsTo(models.User, {
      foreignKey: 'id_user',
      as: 'user'
    });

    Adress.associate = function(models) {
      Adress.hasMany(models.Order, as = 'orders');
    };
  };

  return Adress;
};