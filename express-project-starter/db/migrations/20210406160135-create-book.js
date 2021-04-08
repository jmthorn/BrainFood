'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cover: {
        type: Sequelize.STRING(255)
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      author: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      published: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT(1000),
        allowNull: true
      },
      avg_rating: {
        type: Sequelize.DECIMAL(10, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};
