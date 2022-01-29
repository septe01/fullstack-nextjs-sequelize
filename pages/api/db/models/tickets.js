"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tickets.belongsTo(models.trains, {
      //   foreignKey: "type_train",
      // });
    }
  }
  tickets.init(
    {
      name_train: DataTypes.STRING,
      type_train: DataTypes.INTEGER,
      date_start: DataTypes.DATE,
      start_station: DataTypes.STRING,
      start_time: DataTypes.TIME,
      destination_station: DataTypes.STRING,
      arival_time: DataTypes.TIME,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tickets",
    }
  );
  return tickets;
};
