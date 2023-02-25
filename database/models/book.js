"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      Author: DataTypes.STRING,
      Title: DataTypes.STRING,
      Genre: DataTypes.STRING,
      Borrower: DataTypes.STRING,
      Owner: DataTypes.STRING,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "Books",
      modelName: "Book",
    }
  );
  return Book;
};
