"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Author: {
        type: Sequelize.STRING,
      },
      Title: {
        type: Sequelize.STRING,
      },
      Genre: {
        type: Sequelize.STRING,
      },
      Borrower: {
        type: Sequelize.STRING,
      },
      Owner: {
        type: Sequelize.STRING,
      },
      bookId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Books");
  },
};
