const {Sequelize} = require('sequelize')

require("dotenv").config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        host : process.env.HOST,
        dialect : 'mysql',
        logging : false
    }
)

// Test the conection
sequelize
.authenticate()
.then(()=>{
    console.log("✅Databse connected successfully!");
})
.catch(()=>{
    console.error("❌Unable to connect to the database")
})


// for table update
sequelize.sync({alter : true})
 .then(()=> console.log("✅Tables altered successfully."))
 .catch(err => console.log("❌Sync error",err))

module.exports = sequelize