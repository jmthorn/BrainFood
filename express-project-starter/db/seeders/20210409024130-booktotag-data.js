'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('BookToTags', [
        {bookId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 3, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 4, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 5, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 6, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 7, tagId: 7, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 8, tagId: 8, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 9, tagId: 9, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 10, tagId: 10, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 11, tagId: 11, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 12, tagId: 11, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 13, tagId: 12, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 14, tagId: 13, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 15, tagId: 13, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 16, tagId: 12, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 17, tagId: 13, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 18, tagId: 12, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 19, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 20, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 21, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 22, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 23, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 24, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 25, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 26, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 27, tagId: 7, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 28, tagId: 8, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 29, tagId: 9, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 30, tagId: 10, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 31, tagId: 11, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 32, tagId: 12, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 33, tagId: 13, createdAt: new Date(), updatedAt: new Date()},
        {bookId: 34, tagId: 14, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('BookToTags', null, {});

  }
};
