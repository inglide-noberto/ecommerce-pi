'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      street: {
        type: Sequelize.STRING,
        allowNull:false
      },
      number: {
        type: Sequelize.STRING,
        allowNull:false
      },
      complement: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING,
        allowNull:false
      },
      zip_code: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      city: {
        type: Sequelize.STRING,
        allowNull:false
      },
      country: {
        type: Sequelize.STRING,
        allowNull:false
      },
      shipping_contact_name: {
        type: Sequelize.STRING
      },
      shipping_contact_phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Adresses');
  }
};