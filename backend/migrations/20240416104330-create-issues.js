'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('issues', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      bookId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      borrowDate: Sequelize.DATE, 
      returnDate: Sequelize.DATE,
      lastDate: Sequelize.DATE,
      status: {
        type: Sequelize.ENUM("borrowed", "returned", "pending"),
        defaultValue: "borrowed"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('issues');
  }
};