require('dotenv').config()

console.log(process.env.DB_USERNAME)
console.log(process.env.PASSWORD)

module.exports = {
    dialect : process.env.DIALECT,
    host : process.env.HOST,
    username : process.env.DB_USERNAME,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port : process.env.DB_PORT,
    define : {
        timestamps : true,
        underscored : true,
        underscoredAll : true
    }
}