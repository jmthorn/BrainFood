'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    cover: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    published: DataTypes.DATE,
    avg_rating: DataTypes.DECIMAL
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
    const columnMapping = { 
      through:  "Books-To-Tags",
      otherKey: "tagId",
      foreignKey: "bookId"
    }
    const columnMapping2 = { 
      through:  "Bookshelves-to-Books",
      otherKey: "bookshelfId",
      foreignKey: "bookId"
    }
    Book.hasMany(models.Tag , columnMapping);
    Book.hasMany(models.Bookshelf, columnMapping2);
    Book.hasMany(models.Review, {foreignKey: "bookId"})
    Book.hasMany(models.ReadStatus, {foreignKey: "bookId"})
  };
  return Book;
};
