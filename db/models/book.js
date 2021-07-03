'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    cover: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    published: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    avg_rating: DataTypes.DECIMAL
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "BookToTag",
      otherKey: "tagId",
      foreignKey: "bookId",
    }
    const columnMapping2 = {
      through: "BookshelfToBook",
      otherKey: "bookshelfId",
      foreignKey: "bookId"
    }

    Book.belongsToMany(models.Tag, columnMapping);
    Book.belongsToMany(models.Bookshelf, columnMapping2);
    Book.hasMany(models.Review, { foreignKey: "bookId" })
    Book.hasMany(models.ReadStatus, { foreignKey: "bookId" })
    Book.hasMany(models.BookToTag, { foreignKey: "bookId" })
    // Book.hasMany(models.Review, { foreignKey: "bookId", onDelete: 'cascade', hooks: true })
    // Book.hasMany(models.ReadStatus, { foreignKey: "bookId", onDelete: 'cascade', hooks: true })
    // Book.hasMany(models.BookToTag, { foreignKey: "bookId", onDelete: 'cascade', hooks: true })
  };
  return Book;
};
