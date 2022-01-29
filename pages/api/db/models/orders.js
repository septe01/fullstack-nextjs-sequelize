"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   orders.belongsTo(models.users, {
    //     foreignKey: "id_user",
    //   });
    //   orders.belongsTo(models.tickets, {
    //     foreignKey: "id_ticket",
    //   });
    // }
  }
  orders.init(
    {
      id_ticket: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      status: DataTypes.ENUM("a", "c", "p"),
      attachment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return orders;
};
