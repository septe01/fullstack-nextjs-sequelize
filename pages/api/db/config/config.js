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
    username: "nefsuumphgyljq",
    password:
      "f4c84c8fbf3509abc562801c89111844643a736c39f983f02468728b61a13784",
    database: "ddsng2p05ki5ls",
    host: "ec2-54-155-194-191.eu-west-1.compute.amazonaws.com",
    port: "5432",
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
    // dialect: "postgres",
  },
};
