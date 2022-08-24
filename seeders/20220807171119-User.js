'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('Users', [{
    name:'Joao Manoel',
    slug: 'joao-manoel',
    email: 'joao@mail.com',
    password: '12345',
    phone: '66 99999-9999',
    cpf: '440.444.444-44',
    birt_date: null,
    gender: 'masc',
    type_user: 'client'
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
