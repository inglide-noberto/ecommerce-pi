'use strict';

const { NOW } = require("sequelize");
const { DATEONLY } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      id_user: 1,
      id_status: 1,
      date_order: '2022-01-17T04:33:12.000Z',
      price: 10.5,
      descouint: 0.1,
      price_payment: 10.4,
      id_payment_method: 1,
      payment_status: "Processando",
      id_adress: 1,
      id_courier: 1,
      delivery_time: 5,
      delivery_price: 0.5
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
