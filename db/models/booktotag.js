'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookToTag = sequelize.define('BookToTag', {
    bookId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  BookToTag.associate = function(models) {
    // associations can be defined here
  };
  return BookToTag;
};