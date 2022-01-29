"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "tickets",
      [
        {
          name_train: "Argo Wilis",
          type_train: 1,
          date_start: "2020-03-08",
          start_station: "manggarai",
          start_time: "07:30:00",
          destination_station: "Bogor",
          arival_time: "16:40:00",
          price: 50000,
          qty: 600,
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
        {
          name_train: "Anggrek",
          type_train: 2,
          date_start: "2020-03-08",
          start_station: "manggarai",
          start_time: "10:20:00",
          destination_station: "sukabumi",
          arival_time: "16:40:00",
          price: 20000,
          qty: 900,
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
        {
          name_train: "Bromo",
          type_train: 1,
          date_start: "2020-03-08",
          start_station: "Kota",
          start_time: "09:10:00",
          destination_station: "Bandara",
          arival_time: "16:30:00",
          price: 90000,
          qty: 900,
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
