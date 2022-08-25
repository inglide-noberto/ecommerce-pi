'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({ 
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    cpf: DataTypes.BIGINT,
    birt_date: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    type_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function(models) {
    User.hasMany(models.Adress, {
      foreignKey: 'id_user',
      as:'adresses'
    });

    User.hasMany(models.Order, {
      foreignKey: 'id_user',
      as:'orders'
    });
  };
  
  return User;
};