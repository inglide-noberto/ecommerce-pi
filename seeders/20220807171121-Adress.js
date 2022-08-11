'use strict';

const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Adresses', [{
    id_user: 1,
    title: 'Casa',
    street: 'rua das ruas',
    number: '28',
    complement: '',
    district: 'Mato Grosso',
    zip_code: 78888888,
    city: 'Sinop',
    country: 'Brasil',
    shipping_contact_name: 'Minha mãe',
    shipping_contact_phone: '66 99999-9999'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Adresses', null, {});
  }
};
