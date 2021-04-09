const {
  db: { username, password, database, host },
} = require('./index');

// module.exports = {
//   development: {
//     username,
//     password,
//     database,
//     host,
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//   },
// };

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};