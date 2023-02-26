require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "edwin",
    host: DB_HOST,
    dialect: "postgres",
    port: 5433,
  },
};
