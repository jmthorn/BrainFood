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
      return queryInterface.bulkInsert('Bookshelves', [
        {name: "Want To Read", userId: 1,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 2,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 3,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 4,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 5,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 6,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 7,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 8,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 9,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 10,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 11,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 12,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 13,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 14,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 15,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 16,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 17,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 18,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 19,createdAt: new Date(), updatedAt: new Date()},
        {name: "Want To Read", userId: 20,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 1,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 2,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 3,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 4,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 5,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 6,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 7,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 8,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 9,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 10,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 11,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 12,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 13,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 14,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 15,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 16,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 17,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 18,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 19,createdAt: new Date(), updatedAt: new Date()},
        {name: "Currently Reading", userId: 20,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 1,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 2,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 3,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 4,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 5,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 6,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 7,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 8,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 9,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 10,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 11,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 12,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 13,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 14,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 15,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 16,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 17,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 18,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 19,createdAt: new Date(), updatedAt: new Date()},
        {name: "Read", userId: 20,createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
         return queryInterface.bulkDelete('Bookshelves', null, {});

  }
};
