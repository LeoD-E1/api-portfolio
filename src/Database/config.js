require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
    }
  },
  test: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
    }
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: 'postgres',
    dialectOptions: {
      /*
        dialect options
      */
    }
  }
};
