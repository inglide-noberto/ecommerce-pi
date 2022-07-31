const Sequelize = require('sequelize')
const database = require('../config/database.js')

const RatingSystem =  database.define('RatingSystem', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: "rating_system"
})

RatingSystem.associate = (models) => {
    RatingSystem.hasMany(models.ProductModel, {
        foreignKey: 'id_rating_system',
        as: 'produtos'
    })
}

module.exports = RatingSystem