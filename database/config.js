const {Sequelize} = require("sequelize")

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "12345",
    database: "dbe1",
    port: 5432,
    logging: false
})

module.exports = {db}