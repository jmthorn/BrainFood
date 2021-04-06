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
  };
  return Book;
};
