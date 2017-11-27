Sequelize = require('sequelize');
const sequelize = new Sequelize('CompetitionCards', 'root', '0000', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false,
    define: {
      timestamps: false
    }
  });


module.exports = sequelize;