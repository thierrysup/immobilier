require('dotenv').config();

module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'immo_local_db',
    username: 'postgres',
    password: "admin",
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'immo_local_db',
    username: 'postgres',
    password: "admin",
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};



// module.exports = {
//   development: {
//     url: process.env.DEV_DATABASE_URL,
//     dialect: 'postgres',
//   },
//   test: {
//     url: process.env.TEST_DATABASE_URL,
//     dialect: 'postgres',
//   },
//   production: {
//     url: process.env.DATABASE_URL,
//     dialect: 'postgres',
//   },
// };
//
//
// require('dotenv').config();
