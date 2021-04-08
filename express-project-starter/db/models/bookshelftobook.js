'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookshelfToBook = sequelize.define('BookshelfToBook', {
    bookshelfId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  BookshelfToBook.associate = function(models) {
    // associations can be defined here
  };
  return BookshelfToBook;
};