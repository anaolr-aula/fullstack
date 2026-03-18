const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("api_fullstack", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
