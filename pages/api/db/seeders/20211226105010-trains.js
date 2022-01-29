"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "trains",
      [
        {
          type_train: "Executive",
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
        {
          type_train: "Reguler",
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
