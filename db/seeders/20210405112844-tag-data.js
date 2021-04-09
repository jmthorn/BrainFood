'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Tags', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Tags', [
        {category: "Biography", createdAt: new Date(), updatedAt: new Date()},
        {category: "History", createdAt: new Date(), updatedAt: new Date()},
        {category: "Philosophy", createdAt: new Date(), updatedAt: new Date()},
        {category: "Classics", createdAt: new Date(), updatedAt: new Date()},
        {category: "Fiction", createdAt: new Date(), updatedAt: new Date()},
        {category: "Science Fiction", createdAt: new Date(), updatedAt: new Date()},
        {category: "Literature", createdAt: new Date(), updatedAt: new Date()},
        {category: "Academic", createdAt: new Date(), updatedAt: new Date()},
        {category: "Novels", createdAt: new Date(), updatedAt: new Date()},
        {category: "Science", createdAt: new Date(), updatedAt: new Date()},
        {category: "Historical Fiction", createdAt: new Date(), updatedAt: new Date()},
        {category: "Self-Help", createdAt: new Date(), updatedAt: new Date()},
        {category: "Memoir", createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Tags', null, {});
  }
};
