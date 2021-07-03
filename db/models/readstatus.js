'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReadStatus = sequelize.define('ReadStatus', {
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  ReadStatus.associate = function (models) {
    // associations can be defined here
    ReadStatus.belongsTo(models.Book, { foreignKey: "bookId" })
    ReadStatus.belongsTo(models.User, { foreignKey: "userId" })
  };
  return ReadStatus;
};
