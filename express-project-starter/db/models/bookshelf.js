'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Bookshelf.associate = function(models) {
    // associations can be defined here
  };
  return Bookshelf;
};