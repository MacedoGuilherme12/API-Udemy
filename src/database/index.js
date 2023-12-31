const Sequelize = require('sequelize')
const Users = require('../apps/models/Users')
const databaseConfig = require('../config/db')
const Posts = require('../apps/models/Posts')

const models = [Users, Posts]

class Database{
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig)
        models.map((model)=> model.init(this.connection))
    }
}

module.exports = new Database(databaseConfig)