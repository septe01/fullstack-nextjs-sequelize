"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "septe habudin",
          user_name: "septe",
          email: "septe@gmail.com",
          password: "123456",
          gender: "male",
          phone: "0812 1322 1235",
          address: "Kp. Pabuaran No.26 Rt.03 Rw.953",
          role: "admin",
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
        {
          name: "habudin septe",
          user_name: "habudin",
          email: "habudin@gmail.com",
          password: "123456",
          gender: "male",
          phone: "0812 1322 1235",
          address: "Parung No.26 Rt.03 Rw.953",
          role: "public",
          createdAt: "2021-12-26 02:39:22.000",
          updatedAt: "2021-12-26 02:39:22.000",
        },
        {
          name: "septe stia",
          user_name: "stia",
          email: "stia@gmail.com",
          password: "123456",
          gender: "male",
          phone: "0812 0000 5634",
          address: "Ciseeng No.26 Rt.03 Rw.953",
          role: "public",
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
