"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          id_ticket: 1,
          id_user: 2,
          qty: 2,
          total_price: 10000,
          status: "a",
          attachment: "https://i.imgur.com/Iqlugn5.jpg",
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
        {
          id_ticket: 2,
          id_user: 3,
          qty: 5,
          total_price: 10000,
          status: 1,
          attachment: "https://i.imgur.com/Iqlugn5.jpg",
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
        {
          id_ticket: 2,
          id_user: 3,
          qty: 5,
          total_price: 20000,
          status: "p",
          attachment: "",
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
