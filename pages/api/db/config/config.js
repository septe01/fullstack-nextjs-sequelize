"use strict";
require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "wnwsgyylcrqxpp",
    password:
      "47cf1491c8a32ed54c0b8a46403c167d166018a015c82c393faf490139d224c3",
    database: "daio0l02l69oh5",
    host: "ec2-52-208-221-89.eu-west-1.compute.amazonaws.com",
    port: "5432",
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
};
