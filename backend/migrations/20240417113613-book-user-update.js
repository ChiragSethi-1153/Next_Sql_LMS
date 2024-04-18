'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('books', 'admin', {
      type: Sequelize.UUID,
      // allowNull: false,
      defaultValue: 'e97f9fd7-79c1-4ceb-8479-1d22705cc486',
      references: {
        model: 'users',
        key: 'id'
      }
    })

    
      await queryInterface.changeColumn('books', 'admin', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      })

    await queryInterface.changeColumn('issues', 'userId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('issues', 'bookId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(
      "books",
      "admin"
    );
    await queryInterface.removeConstraint("issues", "userId");
    await queryInterface.removeConstraint("issues", "bookId");
  }
};
