"use strict";

import userModel from "./users";
import orderModel from "./orders";
import trainModel from "./trains";
import ticketModel from "./tickets";

// require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = userModel(sequelize, Sequelize);
db.orders = orderModel(sequelize, Sequelize);
db.trains = trainModel(sequelize, Sequelize);
db.tickets = ticketModel(sequelize, Sequelize);

db.tutorial = require("./tutorials.js")(sequelize, Sequelize);
db.tag = require("./tags.js")(sequelize, Sequelize);

// db.tag.belongsToMany(db.tutorial, {
//   through: "tutorial_tag",
//   as: "tutorials",
//   foreignKey: "tag_id",
// });
// db.tutorial.belongsToMany(db.tag, {
//   through: "tutorial_tag",
//   as: "tags",
//   foreignKey: "tutorial_id",
// });

// test
db.orders.belongsTo(db.users, {
  foreignKey: "id_user",
});
db.orders.belongsTo(db.tickets, {
  foreignKey: "id_ticket",
});

// db.tickets.belongsTo(models.trains, {
//   foreignKey: "type_train",
// });

module.exports = db;
