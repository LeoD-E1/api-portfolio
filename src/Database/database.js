import Sequelize from "sequelize";
import { development } from './config'
require('dotenv').config()

export const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false
  }
)

sequelize.sync()