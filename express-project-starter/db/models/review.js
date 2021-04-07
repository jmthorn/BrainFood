'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    author: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Book, { foreignKey: "bookId" })
    Review.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Review;
};
