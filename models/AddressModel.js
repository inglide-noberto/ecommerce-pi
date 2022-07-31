const Sequelize = require('sequelize')
const database = require('../config/database.js')

const Adress = database.define('Adress', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },    
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    complement: {
        type: Sequelize.STRING
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zip_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    shipping_contact_name: {
        type: Sequelize.STRING
    },
    shipping_contact_phone: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: "adress"
})

Adress.associate = (models) => {
    //--------- Pertence a 1 user ---------
    Adress.belongsTo(models.UserModel, {
        foreignKey: 'id_user',
        as: 'user'
    }),

    //--------- Está em muitas ordes ---------
    Adress.hasMany(models.OrderModel, {
        foreignKey: 'id_adress',
        as: 'orders'
    })
}



module.exports = Adress