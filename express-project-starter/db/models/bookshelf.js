'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Bookshelf.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "BookshelfToBook",
      otherKey: "bookId",
      foreignKey: "bookshelfId"
    }
    Bookshelf.belongsToMany(models.Book, columnMapping)
    Bookshelf.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Bookshelf;
};
