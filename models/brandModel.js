const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')


const Brand = sequelize.define('Brand',{
    cName : {
        type:DataTypes.STRING,
        allowNull:false    }
})


module.exports = Brand