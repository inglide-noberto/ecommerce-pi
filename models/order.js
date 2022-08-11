'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    id_user: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    date_order: DataTypes.DATE,
    price: DataTypes.DECIMAL,
    descouint: DataTypes.DECIMAL,
    price_payment: DataTypes.DECIMAL,
    id_payment_method: DataTypes.INTEGER,
    payment_status: DataTypes.STRING,
    id_adress: DataTypes.INTEGER,
    id_courier: DataTypes.INTEGER,
    delivery_time: DataTypes.INTEGER,
    delivery_price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Order',
  });
  
  Order.associate = function(models) {
    //------- Pertence a 1 usuário -------
    Order.belongsTo(models.User, {
      foreignKey: 'id_user',
      as: 'user'
    })

    Order.belongsTo(models.OrderStatus, {
      foreignKey: 'id_status',
      as: 'orders_status'
    })

    Order.belongsTo(models.PaymentMethod, {
      foreignKey: 'id_payment_method',
      as: 'payment_method'
    })

    Order.belongsTo(models.Adress, {
      foreignKey: 'id_adress',
      as: 'adress'
    })

    Order.belongsTo(models.Courier, {
      foreignKey: 'id_courier',
      as: 'courier'
    })
    
    Order.belongsToMany(models.Product, {
      through: 'OrderProducts', 
      foreignKey: 'id_order',
      as: 'order_product'
    });
  };
  
  return Order;
};