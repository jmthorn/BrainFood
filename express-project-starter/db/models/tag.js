'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    category: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    const columnMapping = { 
      through: "Books-to-Tags",
      otherKey: "bookId",
      foreignKey: "tagId"
    }
    Tag.hasMany(models.Book, columnMapping)
  };
  return Tag;
};
