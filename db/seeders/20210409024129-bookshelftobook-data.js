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
      return queryInterface.bulkInsert('BookshelfToBooks', [
        {bookshelfId:1, bookId:1, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:1, bookId:2, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:1, bookId:3, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:2, bookId:3, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:2, bookId:4, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:2, bookId:5, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:3, bookId:6, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:3, bookId:7, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:3, bookId:8, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:3, bookId:9, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:3, bookId:10, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:4, bookId:11, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:4, bookId:12, createdAt: new Date(), updatedAt: new Date()},
        {bookshelfId:4, bookId:13, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('BookshelfToBooks', null, {});
  }
};
