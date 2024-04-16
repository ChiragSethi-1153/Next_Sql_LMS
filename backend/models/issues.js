'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class issues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users, books}) {
      // define association here
      this.belongsTo(users, {foreignKey: 'userId'})
      this.belongsTo(books, {foreignKey: 'bookId'})
    }
  }
  issues.init({
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    bookId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    borrowDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    lastDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'issues',
    tableName: 'issues'
  });
  return issues;
};